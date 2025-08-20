import { Container } from "@mui/material";

export default function CustomContainer({ children }) {

    return (
        <Container maxWidth={"lg"}>
            {children}
        </Container>
    );
};