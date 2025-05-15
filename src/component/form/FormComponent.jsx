import React from 'react';
import arianaLogo from "../../assets/image/logo m+a+l_1 1.png";
import {Box, Container, Typography} from "@mui/material";

export const FormComponent = ({children, name, caption, submit}) => {
    return (
        <Container maxWidth="sm"
                   sx={{
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       height: "100vh"
                   }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    backgroundColor: "#ffffff",
                    width: "55%",
                    border: "1px solid #E2E8F0",
                    padding: "10px 15px"
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
                        {name}
                    </Typography>
                    <Typography variant="body1"
                                sx={{color: "#64748B", fontSize: "10px"}}>
                        {caption}
                    </Typography>
                </Box>
                <Box component="form"
                     onSubmit={submit}
                     sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    {children}
                </Box>
            </Box>
        </Container>
    );
};
