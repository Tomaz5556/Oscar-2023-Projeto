import { StyledLinearGradient, StyledActivityIndicator } from "./styles";

import theme from "../../global/styles/theme";
import React from "react";

export function Loading() {
    return (
        <StyledLinearGradient
            colors={[theme.colors.background_dark, theme.colors.background_regular, theme.colors.background_light]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <StyledActivityIndicator
                color={theme.colors.secondary}
                size={70}
            />
        </StyledLinearGradient>
    );
}