export default function AgentCard({ name, status, load, solved, skills, image })
 {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-3">
        <img
  src={image}
  alt={name}
  className="h-10 w-10 rounded-full"
/>
        <div>
          <p className="font-medium">{name}</p>
          <p
            className={`text-sm ${
              status === "Online"
                ? "text-green-500"
                : status === "Busy"
                ? "text-yellow-500"
                : "text-gray-400"
            }`}
          >
            {status}
          </p>
        </div>
      </div>

      <p className="text-sm mb-1">Current Load: {load}/10</p>
      <div className="h-2 bg-gray-200 rounded mb-2">
        <div
          className="h-full bg-indigo-600 rounded"
          style={{ width: `${load * 10}%` }}
        />
      </div>

      <p className="text-xs text-gray-500 mb-2">
        {solved} Tickets Solved Today
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 text-xs bg-gray-100 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
        View Details & Assign
      </button>
    </div>
  );
}
