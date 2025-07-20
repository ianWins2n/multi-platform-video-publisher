"use server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export async function saveVideoToDatabase(videoURL: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    throw new Error("You must be logged in to create a post");
  }

    await prisma.video.create({
      data: {
        url: videoURL,
        uploaderId: session.user.id,
      },
    });
}
