export default function Navbar() {
    return (
        <header className="bg-neutral-950/99 fixed top-0 left-0 w-full flex flex-row items-center justify-between px-20 pt-3 pb-3">
            <img className="w-[200px]" src="/images/logo.svg" alt="Stride Logo" />
            <nav className="flex gap-16 pr-20">
                <a href="#home">Home</a>
                <a href="#home">Shop</a>
                <a href="#home">About Us</a>
                <a href="#home">Contact</a>
            </nav>
        </header>
    )
}