import { useState } from "react";

export const useForm = (initialObject = {}) => {
    
    const [form, setForm] = useState(initialObject);

    const serializeForm = (form) => {
        const formData = new FormData(form);
        const finalObject = {};

        for(let [name, value] of formData) {
            finalObject[name] = value;
        }
        return finalObject;
    }
    const sent = (e) => {
        e.preventDefault();
        let course = serializeForm(e.target);
        setForm(course)
        document.querySelector('.code').classList.add('sent');
    }

    const edited = ({ target }) => {
        const {name, value} = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return {
        form,
        sent,
        edited
    }
}