'use client'

import { getWhatsappLink } from "@/utils/functions"
import { Button } from "@mui/material"
import { FaWhatsapp } from "react-icons/fa6";

export default function ButtonCta({sx}) {

    return (
        <Button
            startIcon={<FaWhatsapp size={24} />}
            href={getWhatsappLink()}
            target="_blank"
            color={'tertiary'}
            sx={{
                color: 'white',
                borderRadius: 8,
                px: "2.25rem",
                py: '.5rem',
                ...sx
            }}
            variant="contained"
        >
            Fazer uma cotação
        </Button>
    );
};