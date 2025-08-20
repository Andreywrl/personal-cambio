import { Box } from "@mui/material"

export const BreakLine = ({ visibility }) => {

    var display = {
        xs: 'none',
        md: 'block'
    };

    if (visibility === 'mobile') {

        display = {
            xs: 'block',
            md: 'none'
        };
    };

    return (
        <Box sx={{
            display: display
        }} component={'br'} />
    )
};