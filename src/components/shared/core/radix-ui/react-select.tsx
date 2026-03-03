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
                className={`theme-layer-border w-full px-3 py-2 rounded-lg flex items-center justify-between cursor-default
                    outline-none transition-all
                    hover:theme-layer-secondary-hover-border
                    focus-visible:theme-layer-secondary-hover-border 
                    data-[state=open]:theme-layer data-[state=open]:rounded-bl-none data-[state=open]:rounded-br-none data-[state=open]:border-t`}
            >
                <Select.Value placeholder={placeholder} />
                <Select.Icon>
                    <ChevronDown className="w-4 h-4" />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content
                    position="popper"
                    side="bottom"
                    align="start"
                    sideOffset={0}
                    className={`theme-layer theme-layer-border z-50 rounded-lg shadow-lg
                        rounded-tl-none rounded-tr-none border-t
                        w-[var(--radix-select-trigger-width)]`}
                >
                    <Select.Viewport className="p-1 w-full">
                        {
                            options.map((option) => (
                                <Select.Item
                                    key={option.value}
                                    value={option.value}
                                    className="px-3 py-2 rounded-md cursor-pointer outline-none data-[highlighted]:theme-layer-primary-hover"
                                >
                                    <Select.ItemText>{option.label}</Select.ItemText>
                                </Select.Item>
                            ))
                        }
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root >
    );
};

export default ReactSelect;
