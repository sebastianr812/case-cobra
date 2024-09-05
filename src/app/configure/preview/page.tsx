import { db } from "@/db";
import { notFound } from "next/navigation";
import { DesignPreview } from "./design-preview";

interface Props {
    searchParams: {
        [key: string]: string;
    }
}

export default async function PreviewPage({ searchParams }: Props) {
    const { id } = searchParams;

    if (!id || typeof id !== "string") {
        return notFound();
    }

    const configuration = await db.configuration.findUnique({
        where: {
            id
        }
    });

    if (!configuration) {
        return notFound();
    }

    return (
        <DesignPreview
            configuration={configuration}
        />
    );
}

