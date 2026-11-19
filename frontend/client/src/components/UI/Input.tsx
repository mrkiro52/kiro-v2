import {
    type FieldValues,
} from "react-hook-form"

import { type InputProps } from "../../types/InputProps"


const Input = <T extends FieldValues,>({label, placeholder, type, inputMode, register, required, pattern}: InputProps<T>) => {
    return(
      <>
        <div>
        <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.04em] text-text-primary">
            {label}
        </label>
        <input
            className="min-h-13.5 w-full rounded-[13px] border border-border-color bg-bg-tertiary px-4 text-[14px] text-text-primary outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-text-tertiary focus:border-accent-lime focus:shadow-[0_0_0_3px_rgba(255,214,10,0.14)] motion-reduce:transition-none"
            placeholder={placeholder}
            type={type}
            inputMode={inputMode}
            {...register(label, {required, pattern})}
        />
        </div>
        </>
    )
}

export default Input
