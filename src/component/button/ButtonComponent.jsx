import React from 'react';
import {Button} from "@mui/material";

export const ButtonComponent = ({loading, name, disabled = false}) => {
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
                mt: 1,
                color: name === "Register" ? (disabled ? '#0F172A' : '#F8FAFC') : "#F8FAFC",
                backgroundColor: name === "Register" ? (disabled ? '#F1F5F9' : '#0F172A') : "#0F172A",
                "&:hover": {boxShadow: 'none'},
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: "11px",
            }}
        >
            {loading ? "Please wait ..." : name}
        </Button>
    );
};
