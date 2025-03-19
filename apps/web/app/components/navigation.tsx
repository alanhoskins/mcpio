'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
	const pathname = usePathname();

	return (
		<header className="border-secondary bg-primary text-secondary flex items-center justify-between border-b p-4">
			<div className="flex items-center">
				<Link href="/" className="text-2xl uppercase tracking-wider">
					mcpio
				</Link>

				<SignedIn>
					<nav className="ml-8">
						<ul className="flex space-x-4">
							<li>
								<Link
									href="/dashboard"
									className={`px-4 py-2 uppercase transition-colors ${
										pathname === '/dashboard'
											? 'bg-primary text-secondary'
											: 'hover:bg-primary hover:text-secondary'
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
						<button className="border-primary bg-secondary hover:bg-primary hover:text-secondary border px-4 py-2 uppercase transition-colors">
							Sign In
						</button>
					</SignInButton>
					<Link
						href="/sign-up"
						className="border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary border px-4 py-2 uppercase transition-colors"
					>
						Sign Up
					</Link>
				</SignedOut>
			</div>
		</header>
	);
}
