import React, { useState } from "react";
import "./contactform.css"
import Signupform from "./signupform";
import Successformmessage from "./successform";


export default function Contactform() {
   const [formissubmitted, setFormissubmitted] = useState(false);

   const submitForm = () => {
     setFormissubmitted(true);
   };
  return (
    <>
    {!formissubmitted ? <Signupform submitForm={submitForm} /> : <Successformmessage />}
    </>
  );
}