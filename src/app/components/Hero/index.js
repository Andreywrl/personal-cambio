import { BreakLine } from "@/components/BreakLine";
import ButtonCta from "@/components/ButtonCta";
import CustomContainer from "@/components/CustomContainer";
import { Box, Chip, Typography } from "@mui/material";

export default function Hero() {
    return (
        <Box id={'empresas'} sx={{
            position:{
                md: 'relative'
            },
        }} overflow="hidden">
            <CustomContainer>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        },
                        alignItems: "center",
                        justifyContent: {
                            xs: 'center',
                            md: 'start'
                        },
                        minHeight: {
                            md:"80vh"
                            },
                        pr: { xs: 0, md: "550px", xl: "400px" },
                        py: {
                            xs: 5,
                            md: 0
                        }
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: {
                            xs: 'center',
                            md: 'start'
                        }
                    }}>
                        <Chip variant="outlined" label="Câmbio comercial para empresas" />
                        <Typography variant="h1" mt={3} sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'start'
                            }
                        }}>
                            Suas transferências cruzando fronteiras com tranquilidade
                        </Typography>
                        <Typography variant="body1" mt={4} sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'start'
                            }
                        }}> 
                            Na Personal Câmbio você tem atendimento especializado em câmbio<BreakLine /> para reduzir o custo e a burocracianos pagamentos das suas<BreakLine /> transferências internacionais
                        </Typography>
                        <Box mt={5} width={'100%'}>
                            <ButtonCta sx={{
                                width: {
                                    xs: '100%',
                                    md: 'auto'
                                }
                            }} />
                        </Box>
                    </Box>
                </Box>
            </CustomContainer>
            <Box
                component="img"
                src="assets/sections/hero/heroImageMobile.png"
                sx={{
                    width: '100%',
                    display: {
                        xs: 'block',
                        md: 'none'
                    }
                }}
            />
            <Box
                component="img"
                src="assets/sections/hero/heroImage.png"
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    height: "100%",
                    maxHeight: "90vh",
                    objectFit: "cover",
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}
            />
        </Box>
    );
};