import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  UserCog,
  Headphones,
  Globe,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Tenants (Companies)", path: "/tenants", icon: Building2 },
  { name: "Service Managers", path: "/managers", icon: UserCog },
  { name: "Service Agents", path: "/agents", icon: Headphones },
  { name: "Global Users", path: "/users", icon: Globe },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">

      {/* TOP ITEM */}
      <nav className="px-4 pt-4 space-y-2">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold
            transition-all
            ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            }`
          }
        >
          <img
          src="/Logo.png"
          alt="container"
          className="h-9 w-9.5"
        />
        </NavLink>

        <div className="border-b border-gray-200 my-3" />

        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium
                transition-all
                ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="mt-auto p-4 border-t border-gray-200 space-y-2">
        <button className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          <Settings className="w-5 h-4" />
          Settings
        </button>

        <button className="flex items-center gap-2 w-full px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 transition">
          <LogOut className="w-5 h-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
