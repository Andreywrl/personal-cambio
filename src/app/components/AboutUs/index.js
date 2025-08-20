import CustomContainer from "@/components/CustomContainer";
import { Box, Typography } from "@mui/material";

export default function AboutUs() {

    return (
        <CustomContainer>
            <Box sx={{
                py: {
                    xs: 5,
                    md: 10
                }
            }} id={'nos'} display={'flex'} alignItems={'center'}>
                <Box sx={{
                    borderTopRightRadius: 100,
                    borderTopLeftRadius: 16,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 16,
                    display: {
                        xs: 'none',
                        md: 'block'
                    },
                }}
                    component={'img'} src={'assets/sections/aboutUs/image.jpg'} />
                <Box sx={{
                    pl: {
                        md: 10
                    }
                }}>
                    <Box component={'img'} src={'assets/general/executivaLogo.jpg'} />
                    <Typography mt={3} mb={5} variant="h2">
                        Somos parceiros oficiais<br></br>do Grupo Executive
                    </Typography>
                    <Box sx={{
                        borderTopRightRadius: 100,
                        borderTopLeftRadius: 16,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 16,
                        display: {
                            xs: 'block',
                            md: 'none'
                        },
                        width: '100%',
                        mb: 5
                    }}
                        component={'img'} src={'assets/sections/aboutUs/image.jpg'} />
                    <Box display={'flex'} sx={{
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        }
                    }} >
                        <Box sx={{
                            width: {
                                xs: '100%',
                                md: '50%'
                            },
                            pr: {
                                xs: 0,
                                md: 4
                            }
                        }} >
                            <Typography variant="h3">
                                Credibilidade
                            </Typography>
                            <Typography mt={2}>
                                A Executive é uma corretora de câmbio prestigiada que preza pela transparência e agilidade no atendimento há mais de 20 anos.
                            </Typography>
                        </Box>
                        <Box sx={{
                            width: {
                                xs: '100%',
                                md: '50%'
                            },
                            mt: {
                                xs: 5,
                                md: 0
                            }
                        }}>
                            <Typography variant="h3">
                                Economia e segurança
                            </Typography>
                            <Typography mt={2}>
                                Operações financeiras internacionais e recebimentos e pagamentos de mercadorias fora do Brasil.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </CustomContainer>
    );
};