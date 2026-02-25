import React, { type HTMLInputTypeAttribute } from 'react';

interface FormInputProps {
    label?: string;
    type?: HTMLInputTypeAttribute;
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMsg?: string;
}

const FormInput: React.FC<FormInputProps> = ({
    label = "Email",
    type = "email",
    id = "email",
    name = "email",
    placeholder = "you@nexgenguest.com",
    value,
    onChange,
    errorMsg = '',
}) => {
    return (

        // <FormField
        //     control={control}
        //     name={name}
        //     render={({ field }) => (
        //         <FormItem className="mt-4">
        //             <FormLabel>{label}</FormLabel>
        //             <FormControl>
        //                 <Input {...field} placeholder={placeholder} className={className} disabled={disabled} />
        //             </FormControl>
        //             <FormMessage />
        //         </FormItem>
        //     )}
        // />
        //     <div className="w-full">
        <label
            htmlFor={id}
            className="block text-xs font-medium text-slate-400 mb-2 text-left"
        >
            {label}
        </label>
        //         <div className={errorMsg !== '' ? 'bg-red-950/70 rounded-xl border border-red-700/90' : ''}>
        //             <Input
        //                 type={type}
        //                 id={id}
        //                 name={name}
        //                 placeholder={placeholder}
        //                 value={value}
        //                 onChange={onChange}
        //             />
        //         </div>
        //         {errorMsg && (
        //             <p className="text-red-500 text-xs mt-2">
        //                 {errorMsg}
        //             </p>
        //         )}
        //     </div>
    );
};

export default FormInput;
