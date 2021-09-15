import React from "react";
import MenuItem from "../../components/navigation/menu-item";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../../actions";
import "./about.css";

export default function About() {
    const myState = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch();
    return(
        <div className="page-wrapper">
            <MenuItem />
            <div className="page-title">
                <h1>Im About page</h1>
            </div>

            {/* redux inc dec output */}
            <div className="container-wrap">
                <div className="redux-title">
                    <h1>Increment/Decrement Counter</h1>
                </div>
                <div className="redux-subtitle">
                    <h4>Using React and Redux</h4>
                </div>
                <div className="quantity">
                    <button className="quantity_minus click-btn" title="Decrement" onClick={ () => dispatch(decNumber())}><span>-</span></button>
                    <input name="quantity" type="text" className="quantity_input" value={myState} />
                    <button className="quantity_plus click-btn" title="Increment" onClick={ () => dispatch(incNumber())}><span>+</span></button>
                </div>
            </div>
            {/* redux inc dec output */}
        </div>
    )
}