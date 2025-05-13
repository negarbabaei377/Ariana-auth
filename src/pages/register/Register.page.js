import React, {useState} from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Link,
    Container,
} from "@mui/material";
import {PATH} from "../../config/path.config";
import arianaLogo from '../../assets/image/logo m+a+l_1 1.png';
import {RegisterApi} from "../../api/user.api";
import {toast} from "react-toastify";

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

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "Please enter your first name";
        if (!formData.lastName) newErrors.lastName = "Please enter your last name";
        if (!formData.username) newErrors.username = "Please enter your username";
        if (!formData.password) newErrors.password = "Please enter your password";
        else if (formData.password.length < 4) {
            newErrors.password = "Password must be at least 4 characters";
        }
        if (!formData.confirmPassword) newErrors.confirmPassword = "Please enter your confirm password"
        else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords do not match!";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        validate()
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validate()) {
            setLoading(true);
            setErrors({});
            const userData = {
                first_name: formData.firstName,
                last_name: formData.lastName,
                username: formData.username,
                password: formData.password,
                confirm_password: formData.confirmPassword,
                avatar: formData.avatar,
            };
            RegisterApi(userData).then(() => {
                setFormData({
                    firstName: "",
                    lastName: "",
                    username: "",
                    password: "",
                    confirmPassword: "",
                    avatar: null
                })
                toast.success("User has been added.")
            }).catch(() => {
                toast.error("An error has been occurred")
            }).finally(() => setLoading(false))
        }
    };

    return (
        <Container maxWidth="sm"
                   sx={{display: "flex", justifyContent: "center"}}>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    backgroundColor: "#ffffff",
                    width: "55%",
                    height: "100%",
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
                        Sign Up
                    </Typography>
                    <Typography variant="body1"
                                sx={{color: "#64748B", fontSize: "10px"}}>
                        Enter your information to create an account
                    </Typography>
                </Box>

                <Box component="form"
                     onSubmit={handleSubmit}
                     sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Box sx={{width: "100%", marginBottom: "7px"}}>
                        <Typography variant="subtitle2"
                                    sx={{mb: 0.4, fontWeight: 500, fontSize: "11px"}}>
                            First name
                        </Typography>
                        <TextField
                            fullWidth
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                            placeholder="Please enter your first name"
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
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    textAlign: 'left',
                                    color: "#64748B",
                                    opacity: 1,
                                },
                                '& .MuiFormHelperText-root': {
                                    fontSize: '9px',
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{width: "100%", marginBottom: "7px"}}>
                        <Typography sx={{mb: 0.4, fontWeight: 500, fontSize: "11px"}}>
                            Last name
                        </Typography>
                        <TextField
                            fullWidth
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                            placeholder="Please enter your last name"
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
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    textAlign: 'left',
                                    color: "#64748B",
                                    opacity: 1,
                                },
                                '& .MuiFormHelperText-root': {
                                    fontSize: '9px',
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{width: "100%", marginBottom: "7px"}}>
                        <Typography variant="subtitle2"
                                    sx={{mb: 0.4, fontWeight: 500, fontSize: "11px"}}>
                            Username
                        </Typography>
                        <TextField
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
                                '& .MuiFormHelperText-root': {
                                    fontSize: '9px',
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
                                '& .MuiFormHelperText-root': {
                                    fontSize: '9px',
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{width: "100%", marginBottom: "7px"}}>
                        <Typography variant="subtitle2"
                                    sx={{mb: 0.4, fontWeight: 500, fontSize: "11px"}}>
                            Confirm Password
                        </Typography>
                        <TextField
                            fullWidth
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            placeholder="Please re-enter your password"
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
                                '& .MuiFormHelperText-root': {
                                    fontSize: '9px',
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
                            backgroundColor: "#F1F5F9",
                            color: "#0F172A",
                            "&:hover": {boxShadow: 'none'},
                            boxShadow: 'none',
                            textTransform: 'none',
                            fontSize: "11px"
                        }}
                        disabled={loading}
                    >
                        {loading ? 'please wait...' : 'Register'}
                    </Button>

                    <Typography variant="body2"
                                sx={{textAlign: "center", mt: 2, mb: 2, fontSize: '11px'}}>
                        Already have an account?{" "}
                        <Link href={PATH.LOGIN}
                              sx={{color: '#0F172A'}}>
                            Sign in
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};
