import React, { useState } from "react";
import MenuItem from "../../components/navigation/menu-item";
import "./form.css";

export default function Signupform() {
    const [userregisteration, setUserregistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserregistration({...userregisteration, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userregisteration, id: new Date().getTime().toString() }
        setRecords([...records, newRecord])

        setUserregistration({ username: "", email: "", phone: "", password: "" });
    }

    return(
        <>
        <MenuItem />
        <div className="page-title form-wrapper">
        <form action="" onSubmit={handleSubmit}>
            <div className="form-wrap">
                <label htmlFor="username">username</label>
                <input type="text" autoComplete="off" value={userregisteration.username} onChange={handleInput} name="username" id="username" />
            </div>
            <div className="form-wrap">
                <label htmlFor="email">email</label>
                <input type="email" autoComplete="off" value={userregisteration.email} onChange={handleInput} name="email" id="email" />
            </div>
            <div className="form-wrap">
                <label htmlFor="phone">phone</label>
                <input type="text" autoComplete="off" value={userregisteration.phone} onChange={handleInput} name="phone" id="phone" />
            </div>
            <div className="form-wrap">
                <label htmlFor="password">password</label>
                <input type="password" autoComplete="off" value={userregisteration.password} onChange={handleInput} name="password" id="password" />
            </div>
            <button type="submit">Registration</button>
        </form>

        <div className="showdata">
            {
                records.map((currentElement) => {
                    const { id, username, email, phone, password } = currentElement;
                    return(
                        <div className="showdatastyle" key={id}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{password}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}