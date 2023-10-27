import { useRef, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Login(){

    const userNameRef = useRef(null);
    const passwordRef = useRef(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function validate(){

        const username = userNameRef.current.value;
        const password = passwordRef.current.value;

        try {

            const url = "http://localhost:9000/login";
            const response = await axios.post(url, {name: username, password});
            const userInfo = {
                isAuthenticated: true,
                userName: username,
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken
            }
            const action = {type: "SAVE_AUTH", payload: userInfo};
            dispatch(action);


            setMessage("");
            navigate("/products");

        } catch (errorResponse) {
            setMessage("Invalid Credentials");

            dispatch({type: "SAVE_AUTH", payload: {

                isAuthenticated: false,
                userName: "",
                accessToken: "",
                refreshToken: ""
            }})

        }
    }

    return (

        <div>
            {message ? <div className="alert alert-danger">{message}</div> : null}

            <div className="form-group">
                <label>UserName</label>
                <input ref={userNameRef} className="form-control"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" ref={passwordRef} className="form-control"/>
            </div>

            <div>
                <button className="btn btn-primary" onClick={validate}>Login</button>
            </div>
        </div>
    )
}

export default Login;