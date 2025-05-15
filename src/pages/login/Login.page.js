import React, {useState} from 'react';
import {loginApi} from "../../api/user.api";
import {PATH} from "../../config/path.config";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {AuthRedirectComponent, ButtonComponent, FormComponent, InputComponent} from "../../component";
import {Typography} from "@mui/material";

export const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(false)
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!formData.username || formData.username === "") newErrors.username = "Username is required";
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 4) {
            newErrors.password = "Password must be at least 4 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        setInvalid(false)
        e.preventDefault()
        if (validate()) {
            setLoading(true);
            setErrors({});
            loginApi(formData).then(() => {
                navigate(PATH.DASHBOARD)
            }).catch(() => {
                setInvalid(true)
                toast.error("An error has been occurred. please try again")
            }).finally(() => setLoading(false))
        }
    };

    return (
        <FormComponent name="Login"
                       caption="Enter your username and password to login to your account"
                       submit={handleSubmit}
        >
            <InputComponent name="username"
                            type="string"
                            value={formData.username}
                            handleChange={handleChange}
                            error={errors.username}
                            placeholder="Please enter your username"
                            labels="Username"

            />
            <InputComponent name="password"
                            type="password"
                            value={formData.password}
                            handleChange={handleChange}
                            error={errors.password}
                            placeholder="Please enter your password"
                            labels="Password"

            />
            <Typography sx={{
                display: invalid ? "block" : "none",
                color: "#DC2626",
                textAlign: "center",
                margin: "10px 0",
                fontSize: "11px",
                fontWeight: 600,
            }}>
                Invalid username or password
            </Typography>
            <ButtonComponent name="Login"
                             loading={loading}/>
            <AuthRedirectComponent question="Don't have an account?"
                                   link={PATH.REGISTER}
                                   nameRedirect="Sign up"
            />
        </FormComponent>
    );
}
