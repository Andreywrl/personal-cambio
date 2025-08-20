'use client'

import CustomContainer from "@/components/CustomContainer";
import { Box, Grid, Typography, IconButton, Button } from "@mui/material";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";

const categoriesData = [
    {
        image: "assets/sections/categories/brand.jpg",
        title: "Para sua empresa",
        description: "Realize pagamentos, recebimentos e transferências de ordens internacionais para sua empresa com as melhores condições do mercado."
    },
    {
        image: "assets/sections/categories/you.jpg",
        title: "Para você",
        description: "Receba e envie valores de qualquer lugar do mundo com rapidez, segurança e simplicidade, seja para pagamentos, suporte familiar, estudos, saúde ou resgate de investimentos."
    },
    {
        image: "assets/sections/categories/tourist.jpg",
        title: "Para turismo",
        description: "Transfira para o exterior qualquer valor referente à serviços turísticos, como pagamentos de hotéis, transporte, seguro viagem, aluguel de automóveis, cruzeiros marítimos e muito mais."
    },
];

export default function Categories() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (!swiperRef.current) return;
        swiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (!swiperRef.current) return;
        swiperRef.current.slideNext();
    };

    return (
        <CustomContainer>
            <Box id={'voce'} sx={{
                py: {
                    xs: 5,
                    md: 10
                },
            }}>
                {/* Cabeçalho */}
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'space-between' },
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'start', md: 'center' },
                }}>
                    <Typography variant="h2">
                        Soluções para você<br />e para sua empresa
                    </Typography>
                    <Typography mt={3} variant="body1" sx={{
                        textAlign: { xs: 'left', md: 'right' },
                    }}>
                        São mais de 120 empresas atendidas e diversos serviços para<br />transferências internacionais.
                    </Typography>
                </Box>

                {/* GRID (desktop) */}
                <Grid
                    sx={{
                        display: { xs: 'none', md: 'flex' }
                    }}
                    container
                    spacing={3}
                    mt={5}
                >
                    {categoriesData.map((category, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box
                                component="img"
                                src={category.image}
                                alt={category.title}
                                sx={{ borderRadius: 2 }}
                            />
                            <Typography variant="h3" marginTop={4}>
                                {category.title}
                            </Typography>
                            <Typography variant="body2" marginTop={2}>
                                {category.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

                {/* SWIPER (mobile) */}
                <Box
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        position: "relative",
                        mt: 5
                    }}
                >
                    <Swiper
                        loop={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
                        spaceBetween={50}
                    >
                        {categoriesData.map((category, index) => (
                            <SwiperSlide key={index}>
                                <Box>
                                    <Box
                                        component="img"
                                        src={category.image}
                                        alt={category.title}
                                        sx={{ borderRadius: 2, width: "100%" }}
                                    />
                                    <Typography variant="h3" marginTop={4}>
                                        {category.title}
                                    </Typography>
                                    <Typography variant="body1" marginTop={2}>
                                        {category.description}
                                    </Typography>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Controles */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: -70,
                            left: 0,
                            display: "flex",
                            alignItems: "center",
                            gap: 2
                        }}
                    >
                        <Button
                            onClick={handlePrev}
                            sx={{
                                bgcolor: "secondary.main",
                                color: "white",
                                borderRadius: 2, // quadrado (usar 2px pra levemente arredondado)
                                width: 40,
                                height: 40,
                            }}
                        >
                            <FaArrowLeft size={18} />
                        </Button>

                        <Typography variant="body2" textAlign={'center'} width={'2rem'}>
                            {currentIndex}/{categoriesData.length}
                        </Typography>

                        <Button
                            onClick={handleNext}
                            sx={{
                                bgcolor: "secondary.main",
                                color: "white",
                                borderRadius: 2,
                                width: 40,
                                height: 40,
                            }}
                        >
                            <FaArrowRight size={18} />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </CustomContainer>
    );
}
