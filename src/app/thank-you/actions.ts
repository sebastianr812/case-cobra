"use server";

import { db } from "@/db";
import { currentUser } from "@clerk/nextjs/server";

export async function getPaymentStatus({ orderId }: { orderId: string }) {
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0].emailAddress;

    if (!user?.id || !userEmail) {
        throw new Error("you need to be logged in to view this page");
    }

    const order = await db.order.findFirst({
        where: {
            id: orderId,
            userId: user.id
        },
        include: {
            billingAddress: true,
            configuration: true,
            shippingAddress: true,
            user: true
        }
    });

    if (!order) {
        throw new Error("this order was not found");
    }

    if (order.isPaid) {
        return order;
    } else {
        return false;
    }

}

