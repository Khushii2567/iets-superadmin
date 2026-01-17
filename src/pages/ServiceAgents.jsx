import MainLayout from "../layout/MainLayout";
import AgentCard from "../components/AgentCard";
import StatCard from "../components/StatCard";

export default function ServiceAgents() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-semibold mb-6">
        Service Agent Workload & Performance
      </h2>

      {/* TOP STATS */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard
          title="Active Agents"
          value="12"
          subtitle="Currently online and available"
        />
        <StatCard
          title="Total Open Tickets"
          value="145"
          subtitle="Tickets awaiting assignment"
        />
        <StatCard
          title="Total Resolved Tickets"
          value="90"
          subtitle="See Agent Work"
        />
      </div>
    <div className="flex items-center justify-between mb-6">
  <input
    type="text"
    placeholder="Search agents..."
    className="px-4 py-2 border border-gray-200 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />

  <select
    className="px-4 py-2 border border-gray-200 rounded-lg bg-white hover:border-indigo-400"
  >
    <option>Sort: Last Updated</option>
    <option>Workload (High → Low)</option>
    <option>Workload (Low → High)</option>
    <option>Status</option>
    <option>Tickets Solved</option>
  </select>
</div>

      {/* AGENT GRID */}
      <div className="grid grid-cols-4 gap-5">
        {[
          {
            name: "John Smith",
            status: "Online",
            load: 3,
            solved: 15,
            skills: ["Network", "VPN"],
            image: "/Alex.png",
          },
          {
            name: "Jane Doe",
            status: "Busy",
            load: 8,
            solved: 10,
            skills: ["Hardware", "Software"],
            image: "/Emily.png",
          },
          {
            name: "Mike Johnson",
            status: "Offline",
            load: 0,
            solved: 8,
            skills: ["Database"],
            image: "/Alex.png",
          },
          {
            name: "Sarah Williams",
            status: "Online",
            load: 2,
            solved: 18,
            skills: ["Security", "Cloud"],
            image: "/Emily.png",
          },
          {
            name: "Alex Brown",
            status: "Busy",
            load: 7,
            solved: 11,
            skills: ["Network", "Firewall"],
            image: "/Alex.png",
          },
          {
            name: "Emily Davis",
            status: "Online",
            load: 4,
            solved: 14,
            skills: ["Software", "OS"],
            image: "/Emily.png",
          },
        ].map((agent, i) => (
          <AgentCard key={i} {...agent} />
        ))}
      </div>
    </MainLayout>
  );
}
