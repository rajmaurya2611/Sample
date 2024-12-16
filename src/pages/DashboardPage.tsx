import LogoutButton from "../components/LogoutButton";

const DashboardPage = () => {
  return (
    <div className="max-w-md mx-auto p-4 shadow-md bg-white rounded-md text-center">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <LogoutButton />
    </div>
  );
};

export default DashboardPage;
