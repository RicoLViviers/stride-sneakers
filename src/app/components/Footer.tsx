import React from 'react';
import Link from 'next/link'; // Use 'next/link' for Next.js or swap to 'react-router-dom' Link

interface FooterLinkItem {
    label: string;
    href: string;
}

interface FooterColumn {
    title: string;
    links: FooterLinkItem[];
}

const footerColumns: FooterColumn[] = [
    {
        title: 'Product',
        links: [
            { label: 'Products', href: '/Products' },
            { label: 'Pricing', href: '/pricing' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Contact', href: '/contact' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Cookie Settings', href: '/cookies' },
        ],
    },
];

async function getCurrentYear() {
    'use cache';
    return new Date().getFullYear();
}

export const Footer: React.FC = () => {
    const currentYear = getCurrentYear();

    return (
        <footer className="bg-neutral-950 text-gray-300 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="text-xl font-bold text-white tracking-tight">
                            STRIDE
                        </Link>
                        <p className="text-sm text-gray-400 max-w-sm">
                            Strive with your shoes you have bought from stride. The best, highest quality shoes you will find anywhere.
                        </p>
                    </div>

                    {footerColumns.map((col) => (
                        <div key={col.title} className="space-y-3">
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                                {col.title}
                            </h3>
                            <ul className="space-y-2">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        © {currentYear} Stride, Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-xs text-gray-400">
                        <Link href="/privacy" className="hover:text-white">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-white">
                            Terms
                        </Link>
                        <Link href="/cookies" className="hover:text-white">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
