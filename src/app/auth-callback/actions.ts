"use server";

import { db } from "@/db";
import { currentUser } from "@clerk/nextjs/server";

export async function getAuthStatus() {
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0].emailAddress;


    if (!user?.id || !userEmail) {
        throw new Error("Invalid user data");
    }

    const existingUser = await db.user.findUnique({
        where: {
            id: user.id
        }
    });

    if (!existingUser) {
        await db.user.create({
            data: {
                id: user.id,
                email: userEmail,
            }
        });
    }

    return { success: true }
}

