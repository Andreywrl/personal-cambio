import CustomContainer from "@/components/CustomContainer";
import { getWhatsappLink } from "@/utils/functions";
import { Box, Chip, Grid, Link, Typography } from "@mui/material";
import { FaBriefcaseMedical, FaCreditCard, FaEarthAmericas, FaGlobe, FaHouse, FaUserGraduate } from "react-icons/fa6";

const servicesData = [
    {
        icon: FaGlobe,
        title: 'Exportação e Importação',
        description: 'Pagamentos relacionados a operações de exportação e importação de bens e serviços.',
    },
    {
        icon: FaEarthAmericas,
        title: 'Disponibilidade no Exterior',
        description: 'Depósito ou retirada de recursos em contas no exterior de titularidade do cliente.',
    },
    {
        icon: FaHouse,
        title: 'Manutenção de Residente',
        description: 'Envio de recursos para manutenção de pessoas físicas no exterior ou estrangeiros no Brasil.',
    },
    {
        icon: FaUserGraduate,
        title: 'Manutenção de Estudante',
        description: 'Transferências para sustento de estudantes brasileiros no exterior ou estrangeiros no Brasil.',
    },
    {
        icon: FaCreditCard,
        title: 'Pagamento de Cursos',
        description: 'Pagamentos internacionais de mensalidades, cursos, treinamentos e instituições de ensino.',
    },
    {
        icon: FaBriefcaseMedical,
        title: 'Saúde em Viagem',
        description: 'Transferências para custear atendimentos médicos e serviços de saúde no exterior.',
    },
];


export default function ServicesDetails() {

    return (
        <Box id={'servicos'} sx={{
            bgcolor: 'secondary.main',
            py: {
                xs: 5,
                md: 10
            },
            borderBottomLeftRadius: {
                xs: 25,
                md: 100
            },
            borderBottomRightRadius: {
                xs: 25,
                md: 100
            }
        }}>
            <CustomContainer>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Chip sx={{
                        color: 'white'
                    }} variant="outlined" label="Nossos serviços" />
                    <Typography sx={{
                        textAlign: {
                            xs: 'center',
                            md: 'start'
                        }
                    }} my={2} variant="h2" color="white">
                        Soluções para você e para sua empresa
                    </Typography>
                </Box>
                <Grid container spacing={3} mt={4}>
                    {
                        servicesData.map((service, index) => (
                            <Grid borderRadius={2} p={4} bgcolor={'white'} key={index} size={{
                                xs: 12, sm: 6, md: 4
                            }}>
                                <Box color="secondary.main">
                                    <service.icon size={28} />
                                </Box>
                                <Typography mt={2} variant="h3">
                                    {service.title}
                                </Typography>
                                <Typography my={2} variant="body2">
                                    {service.description}
                                </Typography>
                                <Link color="secondary" href={getWhatsappLink("Olá! Estou vindo do site e gostaria de saber mais sobre " + service.title)} target="_blank">
                                    <Typography fontWeight={600} color="secondary">Saiba mais</Typography>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </CustomContainer>
        </Box>
    );
};