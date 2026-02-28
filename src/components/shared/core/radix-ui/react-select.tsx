import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export interface ISelectItem {
    value: string;
    label: string;
}

interface IReactSelectProps {
    value: string;
    options: ISelectItem[];
    onChange: (value: string) => void;
    placeholder?: string;
}

const ReactSelect: React.FC<IReactSelectProps> = ({
    value,
    options,
    onChange,
    placeholder = "",
}: IReactSelectProps) => {
    return (
        <Select.Root
            value={value}
            onValueChange={onChange}
        >
            <Select.Trigger
                className="w-full px-3 py-2 rounded-lg text-sm bg-(--container-bg) border border-(--container-br) text-(--container-fg) focus-visible:border-(--container-sub-nav-br-hover) outline-none transition-all flex items-center justify-between data-[state=open]:border-(--container-sub-nav-br-hover) data-[state=open]:bg-(--container-bg)/80"
            >
                <Select.Value placeholder={placeholder} />
                <Select.Icon>
                    <ChevronDown className="w-4 h-4 text-(--container-fg)" />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content
                    position="popper"
                    side="bottom"
                    align="start"
                    sideOffset={0}
                    className="z-50 rounded-lg border border-(--container-br) bg-(--container-bg) shadow-lg w-[var(--radix-select-trigger-width)]"
                >
                    <Select.Viewport className="p-1 w-full">
                        {
                            options.map((option) => (
                                <Select.Item
                                    key={option.value}
                                    value={option.value}
                                    className="px-3 py-2 text-sm text-(--container-fg) rounded-md cursor-pointer outline-none data-[highlighted]:bg-(--container-nav-bg-hover) data-[highlighted]:text-(--container-nav-fg-hover)"
                                >
                                    <Select.ItemText>{option.label}</Select.ItemText>
                                </Select.Item>
                            ))
                        }
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
};

export default ReactSelect;
