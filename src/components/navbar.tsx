import Link from "next/link";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";

export const Navbar = async () => {
    const user = await currentUser();

    const isAdmin = user?.emailAddresses[0].emailAddress === process.env.ADMIN_EMAIL;

    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="flex z-40 font-semibold">
                        case <span className="text-green-600">cobra</span>
                    </Link>
                    <div className="h-full flex items-center space-x-4">
                        {user ? (
                            <>
                                <SignOutButton redirectUrl="/">
                                    <Link
                                        className={buttonVariants({
                                            size: "sm",
                                            variant: "ghost"
                                        })}
                                        href="#">
                                        Sign out
                                    </Link>
                                </SignOutButton>
                                {isAdmin ? (
                                    <Link
                                        className={buttonVariants({
                                            size: "sm",
                                            variant: "ghost"
                                        })}
                                        href="/dashboard">
                                        Dashboard
                                    </Link>) : null}
                                <Link
                                    className={buttonVariants({
                                        size: "sm",
                                        className: "hidden sm:flex items-center gap-1"
                                    })}
                                    href="/configure/upload">
                                    Create case
                                    <ArrowRight className="ml-1.5 size-5" />
                                </Link>
                            </>
                        ) : (
                            <>
                                <SignUpButton mode="modal">
                                    <Link
                                        className={buttonVariants({
                                            size: "sm",
                                            variant: "ghost"
                                        })}
                                        href="#">
                                        Sign up
                                    </Link>
                                </SignUpButton>
                                <SignInButton mode="modal">
                                    <Link
                                        className={buttonVariants({
                                            size: "sm",
                                            variant: "ghost"
                                        })}
                                        href="#">
                                        Login
                                    </Link>
                                </SignInButton>

                                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                                <Link
                                    className={buttonVariants({
                                        size: "sm",
                                        className: "hidden sm:flex items-center gap-1"
                                    })}
                                    href="/configure/upload">
                                    Create case
                                    <ArrowRight className="ml-1.5 size-5" />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav >
    );
}
