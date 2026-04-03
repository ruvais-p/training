import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center group">
            <span 
                className="text-xl md:text-2xl font-black tracking-tighter uppercase italic"
                style={{
                    color: "var(--tertiary)",
                    fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                    fontWeight: 200
                }}
            >
                CyberSecurity
            </span>
        </Link>
    );
};

export default Logo;
