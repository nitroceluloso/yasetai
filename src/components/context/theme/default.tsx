import React from 'react';
import { ThemeProvider } from "styled-components";

const colors = {
    red: 'red'
}

type ThemeProps = {
    children: React.ReactNode;
}

export const Theme = (props: ThemeProps) => {
    return (
        <ThemeProvider theme={colors}>
            {props.children}
        </ThemeProvider>
    )
};
