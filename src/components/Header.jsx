import { Bell } from "lucide-react";
export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">
        {/* CONTAINER IMAGE */}
        <img
          src="/Container.png"
          alt="container"
          className="h-9 w-9 rounded-full"
        />

        {/* IETS TEXT */}
        <h1 className="font-semibold text-2xl text-indigo-600">
          IETS
        </h1>
      </div>

      {/* RIGHT AVATAR */}
      <div className="flex items-center gap-4">
  <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-indigo-600" />

  <img
    src="/Avatar.png"
    alt="profile"
    className="h-9 w-9 rounded-full cursor-pointer hover:ring-2 ring-indigo-500"
  />
</div>

    </header>
  );
}
