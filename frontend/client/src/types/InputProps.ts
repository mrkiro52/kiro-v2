import type React from "react"
import { 
    type UseFormRegister, 
    type FieldPath,
    type FieldValues,
} from "react-hook-form"




export type InputProps<T extends FieldValues> = {
    inputName: string
    label: FieldPath<T>
    placeholder: string
    type: string
    value?: string
    inputMode?: React.HtmlHTMLAttributes<HTMLInputElement>['inputMode']
    register: UseFormRegister<T>
    required: boolean | string
    pattern?: {
        value: RegExp,
        message: string
    }
}
