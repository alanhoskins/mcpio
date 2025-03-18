import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex items-center justify-center p-8">
			<div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
				<h2 className="mb-4 text-center text-2xl font-semibold">
					Welcome to mcpio!
				</h2>

				<SignedIn>
					<div className="text-center">
						<p className="mb-4">
							You are signed in and can access protected content.
						</p>
						<Link
							href="/dashboard"
							className="inline-block rounded-md bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600"
						>
							Go to Dashboard
						</Link>
					</div>
				</SignedIn>

				<SignedOut>
					<div className="text-center">
						<p className="mb-4">Please sign in to access your account.</p>
						<div className="flex flex-col space-y-3">
							<SignInButton mode="modal">
								<button className="w-full rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
									Sign In
								</button>
							</SignInButton>
							<Link
								href="/sign-up"
								className="w-full rounded border border-blue-500 px-4 py-2 text-blue-500 transition-colors hover:bg-blue-50"
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
