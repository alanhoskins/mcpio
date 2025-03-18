'use client';

import { useUser } from '@clerk/nextjs';

export default function UserProfile() {
	const { user, isLoaded } = useUser();

	if (!isLoaded) {
		return <div>Loading user information...</div>;
	}

	if (!user) {
		return <div>Not signed in</div>;
	}

	return (
		<div className="mt-4 rounded bg-gray-50 p-4">
			<h3 className="mb-2 font-medium">Your Account Information:</h3>
			<p>
				Name: {user.firstName} {user.lastName}
			</p>
			<p>Email: {user.primaryEmailAddress?.emailAddress}</p>
			<p>User ID: {user.id}</p>
		</div>
	);
}
