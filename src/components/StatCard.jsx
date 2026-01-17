export default function StatCard({ title, value, subtitle, color })  {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <p className={`text-sm ${color ?? "text-gray-500"}`}>
  {title}
</p>
<h2 className={`text-3xl font-bold mt-1 ${color ?? "text-gray-900"}`}>
  {value}
</h2>
      {subtitle && (
        <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
      )}
    </div>
  );
}
