import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json() as WebhookEvent;
    
    if (body.type === "user.created") {
      const { id, email_addresses, first_name, last_name } = body.data;

      await prisma.user.upsert({
        where: { clerkId: id },
        update: {},
        create: {
          clerkId: id,
          email: email_addresses[0].email_address,
          name: `${first_name || ""} ${last_name || ""}`.trim(),
        },
      });
    }

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Clerk Webhook Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
