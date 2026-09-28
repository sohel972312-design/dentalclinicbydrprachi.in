import Footer from '@/components/Layout/Footer';
import './globals.css';
import { Poppins, Outfit } from 'next/font/google';

// Headings ke liye modern 'Outfit' font
const fontHeading = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

// Paragraphs, ul, li ke liye 'Poppins' font
const fontBody = Poppins({
  weight: ['300', '400', '500', '600', '700'], // Required weights
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: "Dr. Prachi's Dental Clinic",
  description: 'Advanced and gentle dental care.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Yahan dono fonts ke CSS variables inject kiye gaye hain
    <html lang="en" className={`${fontHeading.variable} ${fontBody.variable}`}>
      {/* Body par default font-body apply kar diya hai */}
      <body className="font-body bg-[#F8FAFC] text-slate-800 antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}