import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className='py-10 justify-center items-center text-center'>
          Hecho con ❤ por la gente de Vercel
        </footer>
      </body>
    </html>
  );
}
