import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between">
            {/* LEFT */}
            <div className="md:hidden lg:block w-[20%]">
                <Link className="text-xl font-bold text-blue-500" href="/">
                    SOCIALIMA
                </Link>
            </div>

            {/* CENTER */}
            <div className="hidden md:flex w-[50%] items-center justify-between">
                {/* LINKS */}
                <div className="flex gap-6 text-gray-600">
                    <Link href="/" className="flex gap-2 items-center">
                        <Image
                            src="/house.svg"
                            width={24}
                            height={24}
                            alt="home"
                        />
                        <span>Home</span>
                    </Link>
                    <Link href="/" className="flex gap-2 items-center">
                        {/* <Image src="/friends.png" width={20} height={20} alt="Friends" /> */}
                        <Image
                            src="/friends.svg"
                            width={24}
                            height={24}
                            alt="Friends"
                        />
                        <span>Friends</span>
                    </Link>
                    <Link href="/" className="flex gap-2 items-center">
                        {/* <Image src="/stories.png" width={20} height={20} alt="Stories" /> */}
                        <Image
                            src="/stories.svg"
                            width={24}
                            height={24}
                            alt="Stories"
                        />
                        <span>Stories</span>
                    </Link>
                </div>

                <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
                    <input type="text" placeholder="Search..." className="bg-transparent outline-none" />
                    <Image src="/search.png" alt="search" width={24} height={24}/>
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end ">
                <ClerkLoading>
                    <Image
                        className="animate-spin"
                        src="/loader.svg"
                        alt="loading"
                        width={24}
                        height={24}
                    />
                </ClerkLoading>
                <ClerkLoaded >
                    <SignedIn>
                        <div className="cursor-pointer">
                            <Image
                                src="/people.png"
                                alt="profile"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="cursor-pointer">
                            <Image
                                src="/messages.png"
                                alt="messages"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="cursor-pointer">
                            <Image
                                src="/notifications.png"
                                alt="notifications"
                                width={24}
                                height={24}
                            />
                        </div>
                        <UserButton/>
                    </SignedIn>
                    <SignedOut>
                        <div className="flex items-center gap-2">
                            <Image
                                src="/login.svg"
                                alt="login"
                                width={24}
                                height={24}
                            />
                            <Link href="/sign-in">Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu />
            </div>
        </div>
    );
};

export default Navbar;
