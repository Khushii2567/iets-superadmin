import MainLayout from "../layout/MainLayout";
import StatCard from "../components/StatCard";
import Table from "../components/Table";

export default function Dashboard() {
  return (
    
    <MainLayout>
      <h2 className="text-2xl font-semibold mb-6">
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-5 gap-4 mb-6">
        <StatCard title="Open Tickets" value="42" />
        <StatCard title="Unassigned Tickets" value="8" />
        <StatCard title="Priority Tickets" value="2" color="text-red-500" />
        <StatCard title="In Progress" value="8" />
        <StatCard title="Resolved Tickets" value="8" color="text-green-500" />
      </div>
      <div className="flex items-center justify-between mb-4">
  <input
    type="text"
    placeholder="Search..."
    className="px-4 py-2 border border-gray-200 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />

  <select
    className="px-4 py-2 border border-gray-200 rounded-lg bg-white cursor-pointer hover:border-indigo-400"
  >
    <option>Sort: Last Updated</option>
    <option>Newest First</option>
    <option>Oldest First</option>
    <option>Priority (High → Low)</option>
    <option>Priority (Low → High)</option>
  </select>
</div>

      <Table />
    </MainLayout>
  );
}
