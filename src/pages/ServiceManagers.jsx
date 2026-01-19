import MainLayout from "../layout/MainLayout";

export default function ServiceManagers() {
  return (
    <MainLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Service Managers</h2>

        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow">
          + Add Service Manager
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr className="text-gray-500">
              <th className="px-6 py-4 text-left font-medium">
                EMPLOYEE NAME
              </th>
              <th className="px-6 py-4 text-left font-medium">EMAIL</th>
              <th className="px-6 py-4 text-left font-medium">TEAM</th>
              <th className="px-6 py-4 text-left font-medium">STATUS</th>
              <th className="px-6 py-4 text-left font-medium">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                name: "John Smith",
                email: "john.smit@acmecorp.com",
                team: "6 Service Agents",
                avatar: "/Alex.png",
              },
              {
                name: "Jane Doe",
                email: "jane.doe@acmecorp.com",
                team: "6 Service Agents",
                avatar: "/Emily.png",
              },
            ].map((manager, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={manager.avatar}
                      alt={manager.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <span className="font-medium">
                      {manager.name}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4">{manager.email}</td>

                <td className="px-6 py-4">{manager.team}</td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-2 text-green-600 font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Active
                  </span>
                </td>

                <td className="px-6 py-4 text-xl font-bold text-gray-400 cursor-pointer">
                  …
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
