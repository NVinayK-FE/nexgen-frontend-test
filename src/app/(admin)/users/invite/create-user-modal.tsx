"use client";

import { useEffect, useState } from "react";

interface CreateRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateRoleModal = ({ isOpen, onClose }: CreateRoleModalProps) => {
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#020617]/72 backdrop-blur-[3px] z-[500] flex items-center justify-center transition-opacity"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#1A2332] border border-[#1E2D42] rounded-2xl w-full max-w-[570px] max-h-[92vh] overflow-y-auto shadow-2xl transform transition-all">
        {/* Modal Header */}
        <div className="p-7 pb-5 flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center shrink-0 mt-0.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="2"
                className="w-[18px] h-[18px]"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
            </div>
            <div>
              <h2 className="text-[1.375rem] font-bold text-[#F1F5F9] leading-tight">
                Create New Role
              </h2>
              <p className="text-[0.875rem] text-[#64748B] mt-1">
                Define custom permissions for a new organizational staff role.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-[30px] h-[30px] rounded-md text-[#475569] hover:text-[#94A3B8] hover:bg-[#94A3B8]/10 flex items-center justify-center transition-all shrink-0"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-[18px] h-[18px]"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-7">
          {/* Role Name Field */}
          <div className="mb-5">
            <label className="block text-[0.875rem] font-medium text-[#CBD5E1] mb-2">
              Role Name
            </label>
            <input
              type="text"
              placeholder="e.g. Front Desk Manager"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              className="w-full bg-[#0F172A] border border-[#1E2D42] rounded-lg px-4 py-3 text-[0.9375rem] text-[#F8FAFC] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/10 transition-all outline-none placeholder:text-[#334155]"
            />
          </div>

          {/* Role Description Field */}
          <div className="mb-5">
            <label className="block text-[0.875rem] font-medium text-[#CBD5E1] mb-2">
              Role Description
            </label>
            <textarea
              placeholder="Describe the primary responsibilities and access scope of this role…"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full bg-[#0F172A] border border-[#1E2D42] rounded-lg px-4 py-3 text-[0.875rem] text-[#F8FAFC] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/10 transition-all outline-none placeholder:text-[#334155] resize-none"
            />
          </div>

          {/* Permissions Section Header */}
          <div className="flex items-center justify-between mt-6 mb-4">
            <span className="text-[1rem] font-bold text-[#F1F5F9]">
              Permissions
            </span>
            <span className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#475569]">
              Access Control
            </span>
          </div>

          {/* Permissions Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* View Dashboard */}
            <div className="bg-[#0F1C2D] border border-[#1E2D42] rounded-[0.625rem] p-4 flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-[18px] h-[18px] text-[#475569]"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[0.9rem] font-semibold text-[#CBD5E1]">
                  View Dashboard
                </div>
                <div className="text-[0.75rem] text-[#475569] mt-0.5">
                  Access to global metrics
                </div>
              </div>
              <label className="relative w-[42px] h-6 cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  className="peer absolute opacity-0 w-0 h-0"
                  defaultChecked
                />
                <span className="absolute inset-0 bg-[#1E293B] border border-[#334155] rounded-full transition-all peer-checked:bg-[#3B82F6] peer-checked:border-[#2563EB]"></span>
                <span className="absolute top-1 left-1 w-[14px] h-[14px] bg-[#475569] rounded-full transition-all peer-checked:left-[22px] peer-checked:bg-white"></span>
              </label>
            </div>

            {/* Manage Users */}
            <div className="bg-[#0F1C2D] border border-[#1E2D42] rounded-[0.625rem] p-4 flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-[18px] h-[18px] text-[#475569]"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[0.9rem] font-semibold text-[#CBD5E1]">
                  Manage Users
                </div>
                <div className="text-[0.75rem] text-[#475569] mt-0.5">
                  Add, edit, or remove staff
                </div>
              </div>
              <label className="relative w-[42px] h-6 cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  className="peer absolute opacity-0 w-0 h-0"
                />
                <span className="absolute inset-0 bg-[#1E293B] border border-[#334155] rounded-full transition-all peer-checked:bg-[#3B82F6] peer-checked:border-[#2563EB]"></span>
                <span className="absolute top-1 left-1 w-[14px] h-[14px] bg-[#475569] rounded-full transition-all peer-checked:left-[22px] peer-checked:bg-white"></span>
              </label>
            </div>

            {/* Edit Hotel Settings */}
            <div className="bg-[#0F1C2D] border border-[#1E2D42] rounded-[0.625rem] p-4 flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-[18px] h-[18px] text-[#475569]"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[0.9rem] font-semibold text-[#CBD5E1]">
                  Edit Hotel Settings
                </div>
                <div className="text-[0.75rem] text-[#475569] mt-0.5">
                  Modify property configuration
                </div>
              </div>
              <label className="relative w-[42px] h-6 cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  className="peer absolute opacity-0 w-0 h-0"
                />
                <span className="absolute inset-0 bg-[#1E293B] border border-[#334155] rounded-full transition-all peer-checked:bg-[#3B82F6] peer-checked:border-[#2563EB]"></span>
                <span className="absolute top-1 left-1 w-[14px] h-[14px] bg-[#475569] rounded-full transition-all peer-checked:left-[22px] peer-checked:bg-white"></span>
              </label>
            </div>

            {/* View Analytics */}
            <div className="bg-[#0F1C2D] border border-[#1E2D42] rounded-[0.625rem] p-4 flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-[18px] h-[18px] text-[#475569]"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[0.9rem] font-semibold text-[#CBD5E1]">
                  View Analytics
                </div>
                <div className="text-[0.75rem] text-[#475569] mt-0.5">
                  Access performance reports
                </div>
              </div>
              <label className="relative w-[42px] h-6 cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  className="peer absolute opacity-0 w-0 h-0"
                  defaultChecked
                />
                <span className="absolute inset-0 bg-[#1E293B] border border-[#334155] rounded-full transition-all peer-checked:bg-[#3B82F6] peer-checked:border-[#2563EB]"></span>
                <span className="absolute top-1 left-1 w-[14px] h-[14px] bg-[#475569] rounded-full transition-all peer-checked:left-[22px] peer-checked:bg-white"></span>
              </label>
            </div>

            {/* Billing Access */}
            <div className="bg-[#0F1C2D] border border-[#1E2D42] rounded-[0.625rem] p-4 flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-[18px] h-[18px] text-[#475569]"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[0.9rem] font-semibold text-[#CBD5E1]">
                  Billing Access
                </div>
                <div className="text-[0.75rem] text-[#475569] mt-0.5">
                  Manage invoices & payments
                </div>
              </div>
              <label className="relative w-[42px] h-6 cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  className="peer absolute opacity-0 w-0 h-0"
                />
                <span className="absolute inset-0 bg-[#1E293B] border border-[#334155] rounded-full transition-all peer-checked:bg-[#3B82F6] peer-checked:border-[#2563EB]"></span>
                <span className="absolute top-1 left-1 w-[14px] h-[14px] bg-[#475569] rounded-full transition-all peer-checked:left-[22px] peer-checked:bg-white"></span>
              </label>
            </div>

            {/* Stock Control */}
            <div className="bg-[#0F1C2D] border border-[#1E2D42] rounded-[0.625rem] p-4 flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-[18px] h-[18px] text-[#475569]"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[0.9rem] font-semibold text-[#CBD5E1]">
                  Stock Control
                </div>
                <div className="text-[0.75rem] text-[#475569] mt-0.5">
                  Manage room inventories
                </div>
              </div>
              <label className="relative w-[42px] h-6 cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  className="peer absolute opacity-0 w-0 h-0"
                />
                <span className="absolute inset-0 bg-[#1E293B] border border-[#334155] rounded-full transition-all peer-checked:bg-[#3B82F6] peer-checked:border-[#2563EB]"></span>
                <span className="absolute top-1 left-1 w-[14px] h-[14px] bg-[#475569] rounded-full transition-all peer-checked:left-[22px] peer-checked:bg-white"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-7 pt-5 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-transparent border border-[#334155] rounded-lg text-[0.9rem] font-semibold text-[#94A3B8] hover:bg-[#1E293B] hover:border-[#475569] hover:text-[#F1F5F9] transition-all"
          >
            Cancel
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3B82F6] border-none rounded-lg text-[0.9rem] font-semibold text-white hover:bg-[#2563EB] hover:shadow-lg hover:shadow-[#3B82F6]/40 transition-all">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Create Role
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoleModal;