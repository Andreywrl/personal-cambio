import theme from "@/theme/theme";
import { Box, ThemeProvider } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";

export default function ComponentProvider({ children }) {

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Box component={'main'} sx={{
                pt: {
                    xs: '4.75rem',
                    md: '4.625rem'
                }
            }}>
                {children}
            </Box>
            <Footer />
        </ThemeProvider>
    );
};