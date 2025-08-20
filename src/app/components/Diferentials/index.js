import CustomContainer from "@/components/CustomContainer";
import { Box, Grid, Typography } from "@mui/material";
import { FaFileInvoiceDollar, FaMoneyBillWave, FaScaleBalanced, FaWhatsapp } from "react-icons/fa6";

const diferentialsData = [
    {
        icon: FaMoneyBillWave,
        title: 'Suporte em Câmbio',
        description: 'Auxiliamos suas operações com todos os bancos do país, garantindo segurança e agilidade.',
    },
    {
        icon: FaScaleBalanced,
        title: 'Taxas Flexíveis',
        description: 'Oferecemos condições personalizadas que se adaptam às suas necessidades financeiras.',
    },
    {
        icon: FaWhatsapp,
        title: 'Atendimento Humano',
        description: 'Conte com nossa equipe pelo WhatsApp ou presencialmente, sempre com proximidade e cuidado.',
    },
    {
        icon: FaFileInvoiceDollar,
        title: 'Câmbio em Papel',
        description: 'Disponibilizamos também a opção de câmbio físico, de forma prática e segura.',
    },
];

export default function Diferentials() {

    return (
        <CustomContainer>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                py: {
                    xs: 10,
                    md: 10
                }
            }}>
                <Box sx={{
                    pr: {
                        xs: 0,
                        md: 5
                    }
                }}>
                    <Typography variant="h2" textAlign={'left'}>
                        Mais de 20 anos no<br></br>setor de câmbio
                    </Typography>
                    <Box sx={{
                        mt: 5,
                        width: '100%',
                        borderRadius: 2,
                        display: {
                            xs: 'block',
                            md: 'none'
                        }
                    }} component={'img'} src={"assets/sections/diferentials/image.jpg"} />
                    <Grid mt={5} container spacing={3} width={'100%'}>
                        {diferentialsData.map((diferential, index) => (
                            <Grid key={index} size={{ xs: 12, md: 6 }}>
                                <Box color="secondary.main">
                                    <diferential.icon size={28} />
                                </Box>
                                <Typography mt={1} variant="h3">
                                    {diferential.title}
                                </Typography>
                                <Typography mt={1} variant="body2">
                                    {diferential.description}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{
                    borderRadius: 2,
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }} component={'img'} src={"assets/sections/diferentials/image.jpg"} />
            </Box>
        </CustomContainer>
    );
};