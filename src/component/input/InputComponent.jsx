import React from 'react';
import {Box, TextField, Typography} from "@mui/material";

export const InputComponent = ({name, value, handleChange, error, placeholder, type, labels}) => {
    return (
        <Box sx={{width: "100%", marginBottom: "7px", display: "flex", flexDirection: "column"}}>
            <Typography variant="subtitle2"
                        sx={{
                            mb: 0.4,
                            fontWeight: 500,
                            fontSize: "11px",
                            color: error ? '#DC2626' : '#020617'
                        }}>
                {labels}
            </Typography>
            <TextField
                fullWidth
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                error={!!error}
                helperText={error}
                placeholder={error ? "" : placeholder}
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
                    '& .MuiOutlinedInput-root.Mui-error': {
                        '& fieldset': {
                            borderColor: '#DC2626',
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
                        fontSize: '9.8px',
                        fontWeight: 600,
                        m: 0,
                        paddingTop: '2px',
                        color: '#DC2626'
                    },
                }}
            />
        </Box>
    );
};

