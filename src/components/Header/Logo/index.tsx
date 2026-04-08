import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center group">
            <Image
                src="/logo/YACS logo 3.png"
                alt="YACS Logo"
                width={2242}
                height={686}
                className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
            />
        </Link>
    );
};

export default Logo;
