import { useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {

    const [form, setForm] = useState(initialState)

    const handleChangeForm = (value: string, name: keyof T): void => {
        setForm({
            ...form,
            [name]: value,
        })
    }

    return {
        form,
        handleChangeForm,
    }
}
