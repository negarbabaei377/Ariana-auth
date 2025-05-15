import React from 'react';
import {Link, Typography} from "@mui/material";

export const AuthRedirectComponent = ({question, link, nameRedirect}) => {
    return (
        <Typography variant="body2"
                    sx={{textAlign: "center", mt: 2, mb: 2, fontSize: '11px'}}>
            {question}{" "}
            <Link href={link}
                  sx={{color: '#0F172A'}}>
                {nameRedirect}
            </Link>
        </Typography>
    );
};
