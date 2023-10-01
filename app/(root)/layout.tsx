import { ClerkProvider } from '@clerk/nextjs';
import '../globals.css';
import { Inter } from 'next/font/google';
import Topbar from '@/components/shareds/Topbar';
import Bottombar from '@/components/shareds/Bottombar';
import LeftSidebar from '@/components/shareds/LeftSidebar';
import RightSidebar from '@/components/shareds/RightSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Threads',
    description: 'A Next.js 13 Metadata Threads Application'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={inter.className}>
                    <Topbar />

                    <main className='flex flex-row'>
                        <LeftSidebar />

                        <section className='main-container'>
                            <div className='w-full max-w-4xl'>{children}</div>
                        </section>

                        <RightSidebar />
                    </main>

                    <Bottombar />
                </body>
            </html>
        </ClerkProvider>
    );
}
