import DashboardLayout from "../components/main/DashboardLayout";
import { Dashboard } from "../components/dashboard/Dashboard";

export default function Home() {
  return (
    <DashboardLayout pageLabel="Default">
      <Dashboard />
    </DashboardLayout>
  );
}
