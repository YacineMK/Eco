"use client"

import { FC, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';


const Loading: FC = () => {
    const logoRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const logo = logoRef.current;
        gsap.fromTo(
            logo,
            { scale: 1 },
            { scale: 1.2, repeat: -1, yoyo: true, duration: 1 }
        );
    }, []);

    return (
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen z-100 bg-white z-50">
            <Image ref={logoRef} src="/Logo.svg" alt="Logo" width={200} height={100} />
        </div>
    );
};


export default Loading;
