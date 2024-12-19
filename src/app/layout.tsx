import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@styles/css/globals.css';

const pretendard = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Fit Island',
  description: 'Fit Island 입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
