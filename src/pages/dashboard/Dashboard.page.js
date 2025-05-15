import {Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import arianaLogo from "../../assets/image/logo m+a+l_1 1.png";
import dashboard from "../../assets/image/dashborad.png";
import {useEffect, useState} from "react";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import {currentUserApi, logoutApi} from "../../api/user.api";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../config/path.config"
import {toast} from "react-toastify";

export const DashboardPage = () => {
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        currentUserApi().then(res => {
            setUserData(res)
        })
    }, [])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleLogout = () => {
        handleClose();
        logoutApi().then(() => {
            handleClose();
            navigate(PATH.LOGIN)
        }).catch(() => {
            toast.error("An error has been occurred");
        })
    }

    return (
        <Box sx={{display: "flex", width: "100%", height: "100vh"}}>
            <Box sx={{
                backgroundColor: "#F8FAFC",
                border: "1px solid #E2E8F0",
                width: "15%",
                padding: "18px 10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Avatar sx={{width: 56, height: 56}}>
                        {userData?.avatar || "N"}
                    </Avatar>
                    <Typography variant="h5"
                                sx={{mb: 0.2, mt: 1, fontWeight: 700, fontSize: "12px"}}>
                        {userData?.first_name + userData?.last_name || "Negar Babaei"}
                    </Typography>
                    <Typography variant="h5"
                                sx={{fontWeight: 500, fontSize: "12px"}}>
                        {userData?.username || "@negarbabaei"}
                    </Typography>
                </Box>
                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleOpen}
                    sx={{
                        mt: 1,
                        color: "#F8FAFC",
                        backgroundColor: "#DC2626",
                        "&:hover": {boxShadow: 'none'},
                        boxShadow: 'none',
                        textTransform: 'none',
                        fontSize: "11px",
                    }}
                >
                    <LogoutIcon sx={{fontSize: "15px", marginRight: "4px"}}/>Logout
                </Button>

            </Box>
            <Box sx={{width: "85%", height: "100%"}}>
                <Box sx={{backgroundColor: "#F8FAFC"}}>
                    <img src={arianaLogo}
                         alt="Ariana Logo"
                         style={{width: 150}}/>
                </Box>
                <Box sx={{height: "80%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={dashboard}
                         alt="Dashboard image"
                         style={{width: 400}}/>
                </Box>
                <Dialog open={open}
                        onClose={handleClose}
                        PaperProps={{
                            sx: {
                                border: "1px solid #E2E8F0",
                                borderRadius: "8px",
                                height: "28%",
                                width: "23%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingTop: "30px",
                                position: "relative",
                                boxShadow: "none"
                            },
                        }}
                        BackdropProps={{
                            style: {
                                backgroundColor: "#000000",
                                opacity: 0.7
                            },
                        }}

                >
                    <CloseIcon sx={{
                        position: "absolute",
                        top: 15,
                        right: 12,
                        fontSize: "15px",
                        color: "#0F172A",
                        cursor: "pointer"
                    }}
                               onClick={handleClose}/>
                    <Box sx={{
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <ErrorOutlineOutlinedIcon fontSize="large"/>
                        <DialogTitle sx={{fontSize: "15px", fontWeight: "700", p: 0.5}}>log out</DialogTitle>
                        <DialogContent>
                            <Typography sx={{fontSize: "12px"}}>
                                Are you sure you want to sign out of your account?
                            </Typography>
                        </DialogContent>
                        <DialogActions sx={{width: "100%", display: "flex", justifyContent: "space-around"}}>
                            <Button sx={{
                                width: "70%",
                                border: "1px solid #E2E8F0",
                                backgroundColor: "#FFFFFF",
                                color: "#0F172A",
                                textTransform: "none",
                                "&:hover": {boxShadow: 'none'},
                                boxShadow: 'none',
                                fontSize: "12px",
                            }}
                                    onClick={handleLogout}
                                    color="error"
                                    variant="contained">
                                Logout
                            </Button>
                            <Button sx={{
                                width: "70%",
                                backgroundColor: "#0F172A",
                                border: "1px solid #0F172A",
                                color: "#F8FAFC",
                                textTransform: "none",
                                "&:hover": {boxShadow: 'none'},
                                boxShadow: 'none',
                                fontSize: "12px"
                            }}
                                    onClick={handleClose}
                                    color="primary">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Box>
                </Dialog>
            </Box>
        </Box>
    )
};
