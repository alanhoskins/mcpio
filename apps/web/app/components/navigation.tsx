'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
	const pathname = usePathname();

	return (
		<header className="flex items-center justify-between border-b p-4">
			<div className="flex items-center">
				<Link href="/" className="text-2xl font-bold">
					mcpio
				</Link>

				<SignedIn>
					<nav className="ml-8">
						<ul className="flex space-x-4">
							<li>
								<Link
									href="/dashboard"
									className={`rounded px-3 py-2 transition-colors ${
										pathname === '/dashboard'
											? 'bg-blue-100 text-blue-800'
											: 'hover:bg-gray-100'
									}`}
								>
									Dashboard
								</Link>
							</li>
							{/* Add more navigation items here */}
						</ul>
					</nav>
				</SignedIn>
			</div>

			<div className="flex items-center space-x-4">
				<SignedIn>
					<UserButton afterSignOutUrl="/" />
				</SignedIn>

				<SignedOut>
					<SignInButton mode="modal">
						<button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
							Sign In
						</button>
					</SignInButton>
					<Link
						href="/sign-up"
						className="rounded border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-50"
					>
						Sign Up
					</Link>
				</SignedOut>
			</div>
		</header>
	);
}
