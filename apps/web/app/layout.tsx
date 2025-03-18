import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Navigation from './components/navigation';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
});

export const metadata: Metadata = {
	title: 'mcpio',
	description:
		'A simple, secure, and scalable platform for managing your mcp tools',
	keywords: ['mcp', 'tools', 'management', 'platform'],
	authors: [{ name: 'Alan Hoskins' }],
	viewport: 'width=device-width, initial-scale=1',
	robots: 'index, follow',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} bg-gray-50`}
				>
					<div className="flex min-h-screen flex-col">
						<Navigation />
						<main className="flex-1">{children}</main>
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
