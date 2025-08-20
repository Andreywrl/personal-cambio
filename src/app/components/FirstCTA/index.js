'use client'

import ButtonCta from "@/components/ButtonCta";
import CustomContainer from "@/components/CustomContainer";
import { Box, Button, Chip, Typography, useTheme } from "@mui/material";

export default function FirstCTA() {

    const theme = useTheme();

    return (
        <Box
            sx={{
                pt: {
                    xs: 5,
                    md: 10,
                },
                backgroundImage: {
                    xs: `linear-gradient(${theme.palette.secondary.main} 100%, ${theme.palette.secondary.main} 100%)`,
                    md: `linear-gradient(white 30%, ${theme.palette.secondary.main} 30%)`,
                },
            }}
        >
            <CustomContainer>
                <Box sx={{
                    p: {
                        xs: 3,
                        md: 5
                    },
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: '#F8F7FF',
                    borderRadius: 4
                }}>
                    <Box sx={{
                        pr: {
                            xs: 0,
                            md: 5
                        }
                    }}>
                        <Chip variant="outlined" label="Este é o melhor momento" />
                        <Typography variant="h2" my={5}>
                            Deixe sua empresa e suas viagens em boas mãos
                        </Typography>
                        <Typography>
                            Fale agora com a Personal Câmbio e descubra como reduzir custos e agilizar suas transferências internacionais com segurança e atendimento humanizado.
                        </Typography>
                        <Box mt={4} width={'100%'}>
                            <ButtonCta sx={{
                                width: {
                                    xs: '100%',
                                    md: 'auto'
                                }
                            }} />
                        </Box>
                        <Box sx={{
                            mt: 4,
                            borderRadius: 100,
                            display: {
                                xs: 'block',
                                md: 'none'
                            },
                            width: '100%'
                        }} component={'img'} src={'assets/sections/firstCta/circleImage.jpg'} />
                    </Box>
                    <Box sx={{
                        borderRadius: 100,
                        display: {
                            xs: 'none',
                            md: 'block'
                        }
                    }} component={'img'} src={'assets/sections/firstCta/circleImage.jpg'} />
                </Box>
            </CustomContainer>
        </Box>
    );
};