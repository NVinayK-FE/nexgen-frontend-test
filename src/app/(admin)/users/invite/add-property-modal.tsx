"use client";

import React, { useEffect } from "react";

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: () => void;
}

const AddPropertyModal = ({ isOpen, onClose, onCreate }: AddPropertyModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#020617]/85 backdrop-blur-xl z-[200] flex items-center justify-center p-6 transition-opacity"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#0F172A] border border-[#1E2D42] rounded-2xl w-full max-w-[560px] shadow-2xl overflow-hidden transform transition-all">
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#1E293B] to-[#162032] border-b border-[#1E2D42] px-8 py-7 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/40 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" className="w-[22px] h-[22px]">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <div className="text-[1.3125rem] font-extrabold text-[#F1F5F9] leading-tight">Add New Property</div>
              <div className="text-[0.875rem] text-[#64748B] mt-1">Onboard a hotel to the NexGen ecosystem</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-[34px] h-[34px] rounded-lg bg-[#1E2D42] border border-[#334155] flex items-center justify-center text-[#475569] hover:text-[#F1F5F9] hover:bg-[#334155] hover:border-[#475569] transition-all shrink-0 mt-0.5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[15px] h-[15px]">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#475569]">Property Info</span>
            <div className="flex-1 h-px bg-[#1E2D42]"></div>
          </div>

          <div className="mb-5">
            <label className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B] block mb-2">
              Property Name
            </label>
            <input
              type="text"
              placeholder="e.g. Grand Azure Hotel"
              className="w-full bg-[#1A2332] border border-[#1E2D42] text-[#F1F5F9] px-4 py-3.5 rounded-[0.625rem] text-[0.9375rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/12 focus:bg-[#1E2D42] transition-all outline-none placeholder:text-[#334155]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B] block mb-2">
                Type
              </label>
              <select className="w-full bg-[#1A2332] border border-[#1E2D42] text-[#F1F5F9] px-4 py-3.5 rounded-[0.625rem] text-[0.9375rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/12 transition-all outline-none appearance-none cursor-pointer bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2364748B\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.875rem_center] bg-[length:16px] pr-10">
                <option>Hotel</option>
                <option>Resort</option>
                <option>Venue</option>
                <option>Boutique</option>
              </select>
            </div>
            <div>
              <label className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B] block mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="City"
                className="w-full bg-[#1A2332] border border-[#1E2D42] text-[#F1F5F9] px-4 py-3.5 rounded-[0.625rem] text-[0.9375rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/12 transition-all outline-none placeholder:text-[#334155]"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B] block mb-2">
              Full Address
            </label>
            <input
              type="text"
              placeholder="Street address, City, Country"
              className="w-full bg-[#1A2332] border border-[#1E2D42] text-[#F1F5F9] px-4 py-3.5 rounded-[0.625rem] text-[0.9375rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/12 transition-all outline-none placeholder:text-[#334155]"
            />
          </div>

          <div className="flex items-center gap-2 mt-2 mb-4">
            <span className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#475569]">Contact</span>
            <div className="flex-1 h-px bg-[#1E2D42]"></div>
          </div>

          <div className="mb-2">
            <label className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B] block mb-2">
              Manager Email
            </label>
            <input
              type="email"
              placeholder="manager@hotel.com"
              className="w-full bg-[#1A2332] border border-[#1E2D42] text-[#F1F5F9] px-4 py-3.5 rounded-[0.625rem] text-[0.9375rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/12 transition-all outline-none placeholder:text-[#334155]"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 justify-end px-8 py-5 border-t border-[#1E2D42]">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-[0.625rem] bg-transparent text-[#94A3B8] text-[0.9rem] font-semibold border border-[#1E2D42] hover:text-[#F1F5F9] hover:border-[#475569] hover:bg-[#1E2D42] transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onCreate}
            className="px-7 py-3 rounded-[0.625rem] bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-[0.9rem] font-bold flex items-center gap-2 shadow-lg shadow-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/50 hover:-translate-y-0.5 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Create Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyModal;