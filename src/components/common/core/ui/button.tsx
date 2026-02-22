import { cn } from "@/lib/cn";

export enum ButtonType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
    DANGER = "danger",
    SUCCESS = "success",
    WARNING = "warning",
    INFO = "info",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    type?: "button" | "submit" | "reset";
    buttonType?: ButtonType;
    onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    classNames?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    type = "button",
    buttonType = ButtonType.PRIMARY,
    onClickHandler,
    classNames,
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClickHandler}
            className={cn(`relative py-2 px-3 rounded-md text-sm text-white
               transition-all duration-200 overflow-hidden`,
                [buttonType === ButtonType.PRIMARY && "bg-blue-600 border-blue-600 hover:bg-blue-500 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"],
                [buttonType === ButtonType.SECONDARY && "bg-gray-600 border-gray-600 hover:bg-gray-500 hover:border-gray-500 hover:shadow-[0_0_20px_rgba(75,85,99,0.4)]"],
                [buttonType === ButtonType.TERTIARY && "bg-transparent border-gray-600 text-gray-600 hover:bg-gray-100 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(75,85,99,0.4)]"],
                [buttonType === ButtonType.DANGER && "bg-red-600 border-red-600 hover:bg-red-500 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"],
                [buttonType === ButtonType.SUCCESS && "bg-green-600 border-green-600 hover:bg-green-500 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"],
                [buttonType === ButtonType.WARNING && "bg-yellow-600 border-yellow-600 hover:bg-yellow-500 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"],
                [buttonType === ButtonType.INFO && "bg-cyan-600 border-cyan-600 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"],
                classNames
            )}
            {...props}
        >
            <span className="relative z-10">
                {text}
            </span>
        </button>
    );
};

export default Button;
