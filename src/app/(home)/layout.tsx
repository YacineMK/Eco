import HomeLayout from "@/components/layout";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <HomeLayout>{children}</HomeLayout>
            </body>
        </html>
    );
}
