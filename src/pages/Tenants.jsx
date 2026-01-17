import MainLayout from "../layout/MainLayout";

export default function Tenants() {
  return (
    <MainLayout>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Tenant Management</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          + Onboard New Company
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              {["Company", "Domain", "SLA", "Users", "Tickets", "Actions"].map(
                (h) => (
                  <th key={h} className="px-4 py-3 text-left">
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
  {[
    {
      name: "Acme Corp",
      domain: "acmecorp.com",
      sla: "Gold",
      users: 145,
      tickets: 1205,
      date: "2022-01-15",
    },
    {
      name: "Innovate Solutions",
      domain: "innovate.io",
      sla: "Platinum",
      users: 230,
      tickets: 870,
      date: "2021-11-20",
    },
    {
      name: "Global Insights",
      domain: "globalinsights.net",
      sla: "Silver",
      users: 88,
      tickets: 312,
      date: "2023-03-01",
    },
    {
      name: "Tech Innovators Co.",
      domain: "techinnovators.dev",
      sla: "Bronze",
      users: 62,
      tickets: 95,
      date: "2023-06-10",
    },
    {
      name: "Future Wave Inc.",
      domain: "futurewave.biz",
      sla: "Gold",
      users: 190,
      tickets: 650,
      date: "2022-09-05",
    },
  ].map((t, i) => (
    <tr key={i} className="border-t hover:bg-gray-50 transition">
      <td className="px-4 py-3">{t.name}</td>
      <td className="px-4 py-3">{t.domain}</td>
      <td className="px-4 py-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium
          ${
            t.sla === "Gold"
              ? "bg-indigo-100 text-indigo-600"
              : t.sla === "Platinum"
              ? "bg-pink-100 text-pink-600"
              : t.sla === "Silver"
              ? "bg-gray-200 text-gray-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {t.sla}
        </span>
      </td>
      <td className="px-4 py-3">{t.users}</td>
      <td className="px-4 py-3">{t.tickets}</td>
      <td className="px-4 py-3">{t.date}</td>
      <td className="px-4 py-3">
        <button className="border px-4 py-1.5 rounded-lg hover:bg-gray-100 transition">
          Manage
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </MainLayout>
  );
}
