"use client";
import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

interface ColorPickerPopoverProps {
    color: string;
    onChange: (color: string) => void;
    barColor: string;
}

const ColorPickerPopover: React.FC<ColorPickerPopoverProps> = ({ color, onChange, barColor }) => {
    const [open, setOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="relative flex flex-row gap-2 items-start">
            <span className="text-xs mt-1">{color}</span>
            <div
                className="theme-layer-border w-24 h-6 rounded cursor-pointer"
                style={{ backgroundColor: barColor }}
                onClick={() => setOpen((prev) => !prev)}
            />

            {open && (
                <div
                    ref={popoverRef}
                    className="absolute z-10 mt-2 p-2 bg-white border rounded shadow-lg"
                    style={{ minWidth: "180px" }}
                >
                    <HexColorPicker color={color} onChange={onChange} />
                </div>
            )}
        </div>
    );
};

export default ColorPickerPopover;
