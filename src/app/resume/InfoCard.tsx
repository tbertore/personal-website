import { Box, Card, CardContent, Stack, Typography, useTheme } from "@mui/material";
import { ReactElement } from "react"

type InfoCardProps = {
    header: string,
    icon?: ReactElement,
    children?: ReactElement
}
export default function InfoCard(props: InfoCardProps): ReactElement {
    const theme = useTheme();

    return (
      <Card sx={{ m: 1,}}>
        <CardContent>
            <Box display="flex" marginLeft={"auto"}>
                <Typography variant="h6" component="h1">
                    {props.header}
                </Typography>
                <Box display="flex" marginLeft={"auto"} color={"#737373"}>
                    {props.icon}
                </Box>
            </Box>
            {props.children}
        </CardContent>
      </Card>
    )
}