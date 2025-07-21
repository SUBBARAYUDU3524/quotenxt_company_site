import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'A Next.js app with a constant navbar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
