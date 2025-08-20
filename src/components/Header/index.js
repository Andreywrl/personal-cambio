'use client'
import { Box, IconButton, Link, Typography } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa6";
import CustomContainer from "../CustomContainer";
import { getWhatsappLink, sendGTMConversion } from "@/utils/functions";
import ButtonCta from "../ButtonCta";

export default function Header() {

    const links = [
        {
            label: 'Para empresas',
            href: '#empresas'
        },
        {
            label: 'Para você',
            href: '#voce'
        },
        {
            label: 'Nossos serviços',
            href: '#servicos'
        },
        {
            label: 'Sobre nós',
            href: '#nos'
        },
        {
            label: 'Entre em contato',
            href: '#contato'
        },
    ];

    return (
        <Box bgcolor={'white'} component={'header'} position={'fixed'} width={'100vw'} sx={{
            zIndex: 2000,
            height: {
                xs: '4.75rem',
                md: '4.625rem'
            },
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.20)',
        }}>
            <CustomContainer>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box component={'img'} sx={{
                        height: 30,
                    }} alt="Logo Personal Câmbio" src={'/assets/general/logo.png'} />
                    <Box component={'nav'} sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        }
                    }}>
                        {
                            links.map((link, index) => (
                                <Link sx={{
                                    textDecoration: 'none',
                                    pr: links.length === index + 1 ? 0 : '3rem'
                                }} key={index} href={link.href} >
                                    <Typography variant="body2">
                                        {link.label}
                                    </Typography>
                                </Link>
                            ))
                        }
                    </Box>
                    <ButtonCta sx={{
                        display:{
                        xs: 'none',
                        md: 'flex'
                    }
                    }} />
                    <IconButton sx={{
                        display: {
                            xs: 'block',
                            md: 'none'
                        }
                    }} onClick={sendGTMConversion} aria-label="Visitar WhatsApp" target="_blank" alt="Visitar WhatsApp" href={getWhatsappLink()} color="secondary">
                        <FaWhatsapp size={40} />
                    </IconButton>
                </Box>
            </CustomContainer>
        </Box>
    );
};