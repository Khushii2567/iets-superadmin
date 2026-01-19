import MainLayout from "../layout/MainLayout";
import { UploadCloud } from "lucide-react";
import { useState } from "react";

export default function OnboardCompany() {
    const [logo, setLogo] = useState(null);

const handleDrop = (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file) setLogo(file);
};

const handleDragOver = (e) => {
  e.preventDefault();
};

const handleFileSelect = (e) => {
  const file = e.target.files[0];
  if (file) setLogo(file);
};

  return (
    <MainLayout>
      <h2 className="text-2xl font-semibold mb-6">Add New Company</h2>

      <div className="bg-white rounded-xl shadow-sm p-6">
        {/* Header */}
        <div className="mb-6 border-b pb-4">
          <h3 className="text-lg font-semibold">Company Details</h3>
          <p className="text-sm text-gray-500">
            Provide essential information about the new tenant company.
          </p>
        </div>

        <div className="space-y-8">
  {/* Full width inputs */}
  <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
    <div>
      <label className="text-sm font-medium text-gray-700">
        Company Name
      </label>
      <input
        type="text"
        placeholder="e.g., Acme Innovations Inc."
        className="mt-1 w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>

    <div>
      <label className="text-sm font-medium text-gray-700">
        Domain
      </label>
      <input
        type="text"
        placeholder="e.g., @acme.com"
        className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>
  </div>

  {/* Logo + Primary Admin aligned */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Logo */}
    <div>
      <label className="text-sm font-medium text-gray-700">
        Logo Upload
      </label>
<div
  onDrop={handleDrop}
  onDragOver={handleDragOver}
  className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:border-indigo-500 transition cursor-pointer h-40"
>
        <input
  type="file"
  accept="image/*"
  onChange={handleFileSelect}
  className="hidden"
  id="logoUpload"
/>

<label htmlFor="logoUpload" className="cursor-pointer text-center">
  {logo ? (
    <p className="text-sm font-medium text-indigo-600">
      {logo.name}
    </p>
  ) : (
    <>
      <p className="text-sm font-medium">Upload Company Logo</p>
      <span className="text-xs text-gray-400 mt-1 block">
        Drag & drop or click to upload
      </span>
    </>
  )}
</label>

      </div>
    </div>

    {/* Primary Admin */}
    <div>
      <h4 className="text-lg font-semibold mb-1">Primary Admin</h4>
      <p className="text-sm text-gray-500 mb-4">
        Assign the first administrator for the new tenant.
      </p>

      <label className="text-sm font-medium text-gray-700">
        Admin Email
      </label>
      <input
        type="email"
        placeholder="e.g., admin@acme.com"
        className="mt-1 w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
      />
      <p className="text-xs text-gray-400 mt-2">
        This email will be used to set up the first user account.
      </p>
    </div>
  </div>
</div>


        {/* Button */}
        <div className="mt-8">
          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition shadow">
            Create Tenant & Send Welcome Email
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
