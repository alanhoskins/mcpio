import UserProfile from '../components/user-profile';

export default function DashboardPage() {
	return (
		<div className="p-6">
			<h1 className="mb-6 text-2xl font-bold">Dashboard</h1>

			<div className="rounded-lg bg-white p-6 shadow-md">
				<h2 className="mb-4 text-xl font-semibold">
					Welcome to your Dashboard!
				</h2>
				<p className="mb-4">
					This is a protected page that only authenticated users can access.
				</p>

				<UserProfile />
			</div>
		</div>
	);
}
