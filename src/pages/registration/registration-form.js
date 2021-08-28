import React from "react";
import MenuItem from "../../components/navigation/menu-item";

export default function Registration() {
    // const [userRegistration, setUserRegistration] = useState({
    //     username: "",
    //     email: "",
    //     comments: ""

    // });
    // const handleInput = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     console.log(name, value);
    // }
    return(
        <>
            <MenuItem />
            <div className="page-title">
                <h1>Please Register here</h1>
            </div>

            <form action="">
                <div className="input-wrap">
                    <label htmlFor="username">Full Name</label>
                    <input type="text" autoComplete="off" name="username" id="username" required />
                </div>
                <div className="input-wrap">
                    <label htmlFor="email">Email</label>
                    <input type="text" autoComplete="off" name="email" id="email" required />
                </div>
                <div className="input-wrap">
                    <label htmlFor="comments">Comments</label>
                    <input type="text" autoComplete="off" name="comment" id="comment" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
    
}