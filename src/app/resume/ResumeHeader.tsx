import { Box, Typography, useTheme } from "@mui/material";
import { ReactElement } from "react"

type ResumeHeaderProps = {
    title: string,
    subtitle: string,
}
export default function ResumeHeader(props: ResumeHeaderProps): ReactElement {
    const theme = useTheme();

    return (
        <Box
            sx={{
                my: 4,
                mx: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#3D3D3D',
                color: "#FFFFFF"
            }}>
            <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
            {props.title}
            </Typography>
            <Typography variant="h5" component="h1" sx={{ mb: 2, fontStyle: 'italic' }}>
            {props.subtitle}
            </Typography>
        </Box>
    )
}