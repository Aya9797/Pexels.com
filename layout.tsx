import React from 'react';

export const metadata = {
  title: 'AZ-8K | 8K Ultra HD Media Platform',
  description: 'Download free 8K videos and photos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
