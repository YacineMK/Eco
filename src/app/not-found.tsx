"use client"

import Image from 'next/image';
import { FC } from 'react';

const ErrorPage: FC = () => {
    return (
        <div className="flex flex-col gap-7 justify-center items-center h-screen">
            <Image src="/Logo.svg" alt="Logo" width={200} height={100} />
            <div className='flex flex-col text-center'>
                <h1 className="text-4xl font-extrabold">404 - Page Not Found</h1>
                <p className="text-xl font-semibold text-black mt-2">The page you're looking for does not exist.</p>
            </div>
        </div>
    );
};

export default ErrorPage;