import Link from "next/link";  //Link need to make "L" uppercase

export default function header() {
    return (
        <div className="border-black/10 border-b h-[40px] flex item-center justify-between px-5">
            <div>Logo</div>

            <ul className="flex item-center gap-3">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>

            </ul>
        </div>
    );
}