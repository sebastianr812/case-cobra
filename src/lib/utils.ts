import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return formatter.format(price);
}

export function constructMetadata({
    title = "CaseCobra - custom high-quality phone cases",
    description = "Create custom high-quality phone cases in seconds",
    image = "/thumbnail.png",
    icons = "/favicon.ico",
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
} = {}): Metadata {
    return {
        title,
        description,
        // when you share link - this configures the preview of it
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image
                },
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@sebrojas12"
        },
        icons,
        metadataBase: new URL("https://case-cobra-lime.vercel.app/"),
    };
}

