import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center group">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">
                Forum
                <span className="text-tertiary group-hover:text-white transition-colors duration-300 ml-1">
                    Invest
                </span>
            </span>
        </Link>
    );
};

export default Logo;