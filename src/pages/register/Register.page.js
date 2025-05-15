import React, {useState} from "react";
import {PATH} from "../../config/path.config";
import {toast} from "react-toastify";
import {AuthRedirectComponent, ButtonComponent, FormComponent, InputComponent} from "../../component";
import {Avatar, Box, Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import logo_profile from "../../assets/image/icon-profile.png";
import {useNavigate} from "react-router-dom";
import {loginApi, RegisterApi} from "../../api/user.api";

export const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        avatar: null
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [imageURL, setImageURL] = useState("");
    const navigate = useNavigate()

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 4) {
            newErrors.password = "Password must be at least 4 characters";
        }
        if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm Password is required"
        else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords do not match!";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        if (Object.values(formData).length > 4 && !Object.values(formData).includes("")) {
            setDisabled(false)
        }
    };

    const handleUploadImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageURL(url)
            setFormData({...formData, avatar: file})
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validate()) {
            setLoading(true)
            const userData = {
                username: formData.username,
                password: formData.password
            }
            await loginApi(userData).then((res) => {
                setDisabled(true)
                setLoading(false)
                setErrors({username: "This username is already taken!"});
                return;
            })
            if (validate()) {
                const data = new FormData();
                data.append("first_name", formData.firstName);
                data.append("last_name", formData.lastName);
                data.append("username", formData.username);
                data.append("password", formData.password);
                data.append("confirm_password", formData.confirmPassword);
                data.append("avatar", formData.avatar)

                RegisterApi(data).then(() => {
                    setFormData({
                        firstName: "",
                        lastName: "",
                        username: "",
                        password: "",
                        confirmPassword: "",
                        avatar: null
                    })
                    toast.success("User has been added.");
                    navigate(PATH.LOGIN)
                }).catch(() => {
                    toast.error("An error has been occurred")
                }).finally(() => {
                    setLoading(false)
                    setDisabled(true)
                    setErrors({})
                })
            }
        }
    };

    return (
        <FormComponent name="Sign Up"
                       caption="Enter your information to create an account"
                       submit={handleSubmit}
                       handleChange
                       avatar={formData.avatar}
        >
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #E2E8F0",
                width: "100%",
                padding: "7px 8px",
                marginBottom: "10px",
                borderRadius: "5px"
            }}>
                <Avatar sx={{width: 36, height: 35, backgroundColor: "#F1F5F9"}}>
                    {imageURL !== "" ? <img src={imageURL}
                                            alt="user image"
                                            style={{objectFit: "contain", width: "100%", height: "100%"}}/> :
                        <img src={logo_profile}
                             alt="default logo"/>}
                </Avatar>
                <Button
                    component="label"
                    variant="contained"
                    sx={{
                        fontSize: "10px",
                        "&:hover": {boxShadow: 'none'},
                        boxShadow: 'none',
                        textTransform: 'none',
                        border: "1px solid #E2E8F0",
                        backgroundColor: "transparent",
                        color: "#0F172A",
                        fontWeight: 600,
                        padding: "4px 6px"
                    }}
                >
                    Upload<AddIcon sx={{fontSize: "14px", m: 0, paddingLeft: "2px"}}/>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleUploadImage}
                        hidden
                    />
                </Button>
            </Box>

            <InputComponent name="firstName"
                            type="string"
                            value={formData.firstName}
                            handleChange={handleChange}
                            error={errors.firstName}
                            placeholder="Please enter your first name"
                            labels="First Name"

            />
            <InputComponent name="lastName"
                            type="string"
                            value={formData.lastName}
                            handleChange={handleChange}
                            error={errors.lastName}
                            placeholder="Please enter your last name"
                            labels="Last name"

            />
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
            <InputComponent name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            handleChange={handleChange}
                            error={errors.confirmPassword}
                            placeholder="Please re-enter your password"
                            labels="Confirm Password"

            />
            <ButtonComponent name="Register"
                             loading={loading}
                             disabled={disabled}
            />
            <AuthRedirectComponent question="Already have an account?"
                                   link={PATH.LOGIN}
                                   nameRedirect="Sign in"
            />
        </FormComponent>
    );
};
