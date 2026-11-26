import Input from "./Input"
import { useForm } from "react-hook-form"
import type ReviewType from "../../types/ReviewType"
import {type ReportDialogType } from "../../types/ReportDialogType"


const reasons = ["Спам", "Оскорбление", "Неприемлемый контент", "Другое"]

const ReportDialog = ({postId, onClose}: ReportDialogType) => {


    
    const { register, formState } = useForm<ReviewType>()
    const descriptionError = formState.errors['review']?.message

    return (
        <div className="fixed inset-0 z-50 flex overflow-y-auto bg-bg-primary/75 p-4">
            <form className="widget m-auto grid w-full max-w-md gap-4 p-4.5 font-sans text-text-primary shadow-[0_6px_20px_rgba(0,0,0,0.45)]">
                <h2 className="font-display text-[17px]/[22px] font-bold">Пожаловаться</h2>

                <fieldset className="min-w-0">
                    <legend className="mb-2 text-[11px]/[14px] font-bold tracking-[0.08em] text-text-tertiary uppercase">
                        Причина жалобы
                    </legend>
                    <div className="grid gap-2">
                        {reasons.map((reason) => (
                            <label
                                key={reason}
                                className="flex min-h-11 cursor-pointer items-center gap-3 rounded-radius-sm border border-border-color bg-bg-tertiary px-3 py-2 text-sm/5.5 text-text-secondary hover:text-text-primary has-checked:border-accent-lime has-checked:bg-accent-lime/14 has-checked:text-accent-lime"
                            >
                                <input
                                    type="radio"
                                    className="size-4 shrink-0 accent-accent-lime scheme-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime"
                                />
                                {reason}
                            </label>
                        ))}
                    </div>
                </fieldset>

                <div className="[&_label]:text-text-secondary [&_input:focus]:bg-bg-secondary [&:has(.form-error)_input]:border-danger">
                    <Input
                        inputName="Опишите что вам не понравилось"
                        label="review"
                        placeholder="Добавь детали для модератора"
                        type="text"
                        register={register}
                        required='Добавьте описание жалобы'
                    />
                    {descriptionError && <p className="form-error">{descriptionError}</p>}
                </div>
                <button className="cursor-pointer" onClick={onClose}>
                    Отменить
                </button>
            </form>
        </div>
    )
}

export default ReportDialog
