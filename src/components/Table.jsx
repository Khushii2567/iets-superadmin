export default function Table() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 font-semibold border-b">
        Incoming Triage Queue (Unassigned)
      </div>

      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            {["ID", "Subject", "Company", "Priority", "Created", "Actions"].map(
              (h) => (
                <th key={h} className="text-left px-4 py-3">
                  {h}
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {[
  ["TKT-1087", "Email server outage", "Acme Corp", "High"],
  ["TKT-1086", "VPN issue", "StartupXYZ", "High"],
  ["TKT-1085", "New software installation request", "GlobalTech", "Medium"],
  ["TKT-1084", "Printer not responding", "Acme Corp", "Low"],
  ["TKT-1083", "Request for new user account setup", "StartupXYZ", "Medium"],
].map((row, i) => (
            <tr
              key={i}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3">{row[0]}</td>
              <td className="px-4 py-3">{row[1]}</td>
              <td className="px-4 py-3">{row[2]}</td>
              <td
  className={`px-4 py-3 font-medium ${
    row[3] === "High"
      ? "text-red-500"
      : row[3] === "Medium"
      ? "text-yellow-500"
      : "text-gray-500"
  }`}
>
  {row[3]}
</td>

              <td className="px-4 py-3">2023-10-26</td>
              <td className="px-4 py-3">
                <button className="px-3 py-1 border rounded hover:bg-indigo-50 text-indigo-600">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
