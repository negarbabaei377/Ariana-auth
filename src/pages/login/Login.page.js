import React, {useState} from 'react';
import {Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {loginApi} from "../../api/user.api";
import {TOKEN} from "../../config/variables.config";
import {PATH} from "../../config/path.config";
import {useNavigate} from "react-router-dom";
import arianaLogo from "../../assets/image/logo m+a+l_1 1.png";
import {toast} from "react-toastify";

export const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!formData.username || formData.username === "") newErrors.username = "Please enter your username";
        if (!formData.password) newErrors.password = "Please enter your password";
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
        e.preventDefault()
        if (validate()) {
            setLoading(true);
            setErrors({});
            loginApi(formData).then(res => {
                localStorage.setItem(TOKEN, res.token)
                navigate(PATH.DASHBOARD)
            }).catch(
                toast.error("An error has been occured. please try again")
            ).finally(() => setLoading(false))
        }
    };

    return (
        <Container maxWidth="sm"
                   sx={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    backgroundColor: "#ffffff",
                    height: "55%",
                    width: "55%",
                    border: "1px solid #E2E8F0",
                    padding: "0 15px"
                }}
            >
                <img src={arianaLogo}
                     alt="Ariana Logo"
                     style={{width: 220, marginBottom: 10}}/>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "20px"
                }}>
                    <Typography variant="h8"
                                component="h2"
                                sx={{fontSize: "18px", color: "#020617", marginBottom: "5px"}}>
                        Login
                    </Typography>
                    <Typography variant="body1"
                                sx={{color: "#64748B", fontSize: "10px"}}>
                        Enter your username and password to login to your account
                    </Typography>
                </Box>

                <Box component="form"
                     onSubmit={handleSubmit}
                     sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Box sx={{width: "100%", marginBottom: "7px"}}>
                        <Typography variant="subtitle2"
                                    sx={{mb: 0.4, fontWeight: 500, fontSize: "11px"}}>
                            Username
                        </Typography>
                        <TextField
                            required
                            fullWidth
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            error={!!errors.username}
                            helperText={errors.username}
                            placeholder="Please enter username"
                            size="small"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#E2E8F0',
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: '1.5px solid #64748B',
                                    },
                                },
                                '& .MuiInputBase-root': {
                                    fontSize: '10px',
                                    padding: '0',
                                    textAlign: "left"
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    textAlign: 'left',
                                    color: "#64748B",
                                    opacity: 1,
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{width: "100%", marginBottom: "7px"}}>
                        <Typography variant="subtitle2"
                                    sx={{mb: 0.4, fontWeight: 500, fontSize: "11px"}}>
                            Password
                        </Typography>
                        <TextField
                            fullWidth
                            required
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            placeholder="Please enter your password"
                            size="small"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#E2E8F0',
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: '1.5px solid #64748B',
                                    },
                                },
                                '& .MuiInputBase-root': {
                                    fontSize: '10px',
                                    padding: '0',
                                    textAlign: "left"
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    textAlign: 'left',
                                    color: "#64748B",
                                    opacity: 1,
                                },
                            }}
                        />
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 1,
                            backgroundColor: "#0F172A",
                            color: "#F8FAFC",
                            "&:hover": {boxShadow: 'none'},
                            boxShadow: 'none',
                            textTransform: 'none',
                            fontSize: "11px"
                        }}
                        disabled={loading}
                    >
                        {loading ? 'please wait...' : 'Login'}
                    </Button>

                    <Typography variant="body2"
                                sx={{textAlign: "center", mt: 2, mb: 2, fontSize: '11px'}}>
                        Don't have an account?{" "}
                        <Link href={PATH.REGISTER}
                              sx={{color: '#0F172A'}}>
                            Sign up
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
