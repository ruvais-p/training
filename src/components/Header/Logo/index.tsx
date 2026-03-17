import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
    return (
        <Link href="/" className='font-mona font-bold logo text-2xl md:text-3xl'>
            Forum Invest
        </Link>
    );
};

export default Logo;