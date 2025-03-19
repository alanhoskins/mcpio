import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex items-center justify-center p-8">
			<div className="border-primary bg-secondary w-full max-w-md border p-8">
				<h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-wider">
					Welcome to mcpio!
				</h2>

				<SignedIn>
					<div className="text-center">
						<p className="mb-6 text-lg">
							You are signed in and can access protected content.
						</p>
						<Link
							href="/dashboard"
							className="border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary inline-block border px-8 py-3 uppercase transition-colors"
						>
							Go to Dashboard
						</Link>
					</div>
				</SignedIn>

				<SignedOut>
					<div className="text-center">
						<p className="mb-6 text-lg">
							Please sign in to access your account.
						</p>
						<div className="flex flex-col space-y-4">
							<SignInButton mode="modal">
								<button className="border-primary bg-secondary hover:bg-primary hover:text-secondary w-full border px-8 py-3 uppercase transition-colors">
									Sign In
								</button>
							</SignInButton>
							<Link
								href="/sign-up"
								className="border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary w-full border px-8 py-3 uppercase transition-colors"
							>
								Sign Up
							</Link>
						</div>
					</div>
				</SignedOut>
			</div>
		</div>
	);
}
