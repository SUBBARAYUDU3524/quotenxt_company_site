import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QUOTENXT',
  description: 'Quotenxt IT Solutions delivers expert IT services, cloud solutions, software development, cybersecurity, and digital transformation strategies to help businesses grow and stay ahead in the digital world.',
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
