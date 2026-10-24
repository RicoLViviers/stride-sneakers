export default function Navbar() {
    return (
        <header className="bg-neutral-950/99 fixed top-0 left-0 w-full flex flex-row items-center justify-between px-20 pt-3 pb-3 border-b border-neutral-800">
            <img className="w-[200px]" src="/images/logo.svg" alt="Stride Logo" />
            <nav className="flex gap-16 pr-20">
                <a href="#home" className="relative group">Home
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                </a>
                <a href="#home" className="relative group">Shop
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                </a>
                <a href="#home" className="relative group">About Us
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                </a>
                <a href="#home" className="relative group">Contact
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                </a>
            </nav>
        </header>
    )
}