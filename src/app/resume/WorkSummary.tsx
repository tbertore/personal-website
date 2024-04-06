import { Box, Card, CardContent, List, ListItem, Stack, Typography, useTheme } from "@mui/material";
import { ReactElement } from "react"

type WorkSummaryProps = {
    jobTitle: string,
    company?: string,
    startDate?: string,
    endDate?: string,
    location?: string,
    workItems?: string[]
}
export default function WorkSummary(props: WorkSummaryProps): ReactElement {
    const theme = useTheme();

    return (
        <Box sx={{}}>
            <Typography variant="h6" component="h1">
                {props.jobTitle}
            </Typography>
            <Typography variant="body1" component="h1">
                {props.company}
            </Typography>
            <Typography variant="body1" component="h1">
                {props.startDate} - {props.endDate} / {props.location}
            </Typography>
            <List>
                {props.workItems?.map((item, idx) => {
                    return (
                        <ListItem key={idx}>{item}</ListItem>
                    )
                })}
            </List>
        </Box>
    )
}