'use client'
import { Box, Divider, Link, Typography } from "@mui/material";
import CustomContainer from "../CustomContainer";
import { getWhatsappLink } from "@/utils/functions";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <Box sx={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            py: 5
        }}>
            <CustomContainer>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'start',
                }}>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Box component={'img'} sx={{
                            height: 30,
                            width: 120,
                            mb: 3
                        }} alt="Logo Personal Câmbio" src={'/assets/general/logo.png'} />
                        <Link target="_blank" href={getWhatsappLink()} sx={{
                            textDecoration: 'none'
                        }}>
                            <Typography>
                                51 98181-7748
                            </Typography>
                        </Link>
                        <Link target="_blank" href="mailto:contato@personalcambio.com.br" sx={{
                            textDecoration: 'none'
                        }}>
                            <Typography>
                                contato@personalcambio.com.br
                            </Typography>
                        </Link>
                    </Box>
                </Box>
                <Divider sx={{
                    my: 3
                }} />
                <Box display={'flex'}>
                    <Link target="_blank" href='https://spitha.com.br/' sx={{
                        textDecoration: 'none'
                    }}>
                        <Typography variant="body2">
                            © Desenvolvido por <Box component={'strong'}>Spítha Soluções Digitais</Box>, {currentYear}
                        </Typography>
                    </Link>
                </Box>
            </CustomContainer>
        </Box>
    );
};