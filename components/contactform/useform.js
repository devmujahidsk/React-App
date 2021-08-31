import { useState, useEffect } from "react";
import Validation from "./validation";


export default function useForm(submitForm) {
const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: ""
})
const [errors, setErrors] = useState({});
const [dataiscorrect, setDataiscorrect] = useState(false);

const handleChange = (event) => {
    setValues({
        ...values, 
        [event.target.name]: event.target.value,
    })
}
const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataiscorrect(true);
};

useEffect(() =>{
    if(Object.keys(errors).length === 0 && dataiscorrect){
        submitForm(true);
    }

}, [errors]);

return {handleChange, handleFormSubmit, errors, values};

}