// src/app/layout.tsx
import '../app/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Management',
  description: 'User management dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-gray-50'>{children}</body>
    </html>
  );
}
