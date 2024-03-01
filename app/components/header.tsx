import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-gray-600 text-neutral-100">
            <div className="container mx-auto flex items-center justify-between py-4">
                <Link href='/'>Home</Link>
                <div>
                    <div className="flex gap-4 item">
                        <Link href="/sign-up">Sign up</Link>
                        <Link href="/sign-up">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;