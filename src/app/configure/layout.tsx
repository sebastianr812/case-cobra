import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Steps } from "@/components/steps";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <MaxWidthWrapper className="flex-1 flex flex-col">
            <Steps />
            {children}
        </MaxWidthWrapper>
    );
}

