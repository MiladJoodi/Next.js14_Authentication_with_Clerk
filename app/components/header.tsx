import Link from "next/link";
import { UserButton, auth } from '@clerk/nextjs'

const Header = () => {

    const { userId } = auth();

    return (
        <div className="bg-gray-600 text-neutral-100">
            <div className="container mx-auto flex items-center justify-between py-4">
                <Link href='/'>Home</Link>
                <div>
                    {userId ? (
                        <div className="flex gap-4 items-center">
                            <Link href='/dashboard'>Dashboard</Link>
                            <UserButton afterSignOutUrl="/"	 />
                        </div>
                    ) :
                        <div className="flex gap-4 items-center">
                            <Link href="/sign-up">Sign up</Link>
                            <Link href="/sign-in">Sign in</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;