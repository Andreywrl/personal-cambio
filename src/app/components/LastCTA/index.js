import ButtonCta from "@/components/ButtonCta";
import CustomContainer from "@/components/CustomContainer";
import { Box, Button, Typography } from "@mui/material";

export default function LastCTA() {

    return (
        <Box id={'contato'} sx={{
            py: {
                xs: 5,
                md: 10
            },
            backgroundImage: 'url(/assets/sections/lastCta/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'top'
        }}>
            <CustomContainer>
                <Box sx={{
                    bgcolor: 'white',
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: {
                        xs: 3,
                        md: 5
                    }
                }}>
                    <Typography variant="h2" sx={{
                        textAlign: {
                            xs: 'center',
                            md: 'left'
                        }
                    }}>
                        Faça seu orçamento conosco
                    </Typography>
                    <Typography my={2} sx={{
                        textAlign: {
                            xs: 'center',
                            md: 'left'
                        }
                    }}>
                        Entre em contato com o nosso time e receba uma resposta em menos de 24 horas.
                    </Typography>
                    <ButtonCta sx={{
                        width: {
                            xs: '100%',
                            md: 'auto'
                        }
                    }} />
                </Box>
            </CustomContainer>
        </Box>
    );
};