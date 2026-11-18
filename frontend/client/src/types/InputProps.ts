import type React from "react"
import { 
    type UseFormRegister, 
    type FieldPath,
    type FieldValues,
} from "react-hook-form"




export type InputProps<T extends FieldValues> = {
    label: FieldPath<T>
    placeholder: string
    type: string
    inputMode?: React.HtmlHTMLAttributes<HTMLInputElement>['inputMode']
    register: UseFormRegister<T>
    required: boolean
}
