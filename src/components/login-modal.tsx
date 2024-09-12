import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export const LoginModal = ({
    isOpen,
    setIsOpen
}: {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="absolute z-[999999999]">
                <DialogHeader>
                    <div className="relative mx-auto w-24 h-24">
                        <Image
                            src="/snake-1.png"
                            alt="snake image"
                            className="object-contain"
                            fill
                        />
                    </div>
                    <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
                        Log in to continue
                    </DialogTitle>
                    <DialogDescription className="text-base text-center py-2">
                        <span className="font-medium text-zinc-900">
                            Your configuration was saved!
                        </span>{' '}
                        Please login or create an account to complete your purchase.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
                    <SignInButton >
                        <Button className={buttonVariants({
                            variant: "outline",
                            className: "text-black"
                        })}>
                            Login
                        </Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button className={buttonVariants({
                            variant: "default"
                        })}>
                            Sign up
                        </Button>
                    </SignUpButton>
                </div>
            </DialogContent>
        </Dialog>
    );
}

