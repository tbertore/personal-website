import { Box, Container, Grid, Link, List, ListItem, ListItemIcon, ListItemText, PaletteMode, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import styles from "./index.module.css"
import { PaletteOptions, ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import InfoCard from "@/app/resume/InfoCard";
import ResumeHeader from "@/app/resume/ResumeHeader";
import WorkSummary from "@/app/resume/WorkSummary";
import { theme } from "@/app/theme";
import Header from "@/app/header";
const mode: PaletteMode = 'light';

const palette = {
  mode: mode,
  primary: {
    main: '#44485c',
  },
  secondary: {
    main: '#9c27b0',
  },
}
export const themeOptions: ThemeOptions = {
  palette: palette,
  components: {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          
        }
      }
    }
  },
  typography: {

  }
};

export default function Resume(): ReactElement {
    return (
      <ThemeProvider theme={theme}>
        <Header/>
        <ResumeHeader title="Todd Bertorelli" subtitle="Sr. Software Engineer"/>
        <Grid container spacing={2} columns={4} sx={{ m: 1}}>
          <Grid item xs={1}>
            <Stack>
              <InfoCard header="Contact" icon={<ContactPhoneIcon/>}>
                <List>
                  <ListItem disablePadding>
                    <ListItemText primary="toddbertorelli@gmail.com" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="(123) 456-7890" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="Seattle, WA" />
                  </ListItem>
                </List>
              </InfoCard>
              <InfoCard header="Education" icon={<SchoolIcon/>}>
                <List>
                  <ListItem disablePadding>
                    <ListItemText primary="BS, Computer Science" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="California Polytechnic University" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="San Luis Obispo" />
                  </ListItem>
                </List>
              </InfoCard>
              <InfoCard header="Skills" icon={<CodeIcon/>}>
                <List>
                  <ListItem disablePadding>
                    <ListItemText primary="AWS DynamoDB" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="AWS EventBridge" />
                  </ListItem>
                </List>
              </InfoCard>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5">
              Experience
            </Typography>
            <WorkSummary 
              jobTitle="Sr. Software Engineer" 
              company="Amazon.com"
              startDate="July 2019"
              endDate="Present"
              location="Seattle, WA"
              workItems={["Migrated legacy accounting system to company-wide solution, including transferring and auditing of existing accounting records",
              "Implemented distributed system that maintained a real-time search index for hundreds of millions of documents",
              "Designed, implemented, and lead a team building a metering service for measuring and billing internal usage of services, including replay and auditing infrastructure for billing correctness",
              "Designed, implemented, and lead a team building a billing & invoicing service for charging for usage of internal services, including integration with 3P billing platforms",
              "Designed, implemented, and lead a team building a tax solution for subscription-based fees, utilizing an internal tax engine",
              "Designed, implemented, and lead a team building a full-stack, public-internet facing customer console for managing subscriptions and promotions with a React-based frontend, ECS Fargate-based backend, a DynamoDB database, with infrastructure all managed by AWS CDK."]} 
            />
            <WorkSummary 
              jobTitle="Software Development Enigneer II" 
              company="Amazon.com"
              startDate="October 2016"
              endDate="July 2019"
              location="San Luis Obispo, CA"
              workItems={["Migrated production legacy database off of Oracle SQL to DynamoDB in AWS.",
              "Migrated subscription workflows off of legacy Quartz Job + SQL database into an AWS-based solution that utilized SQS and DynamoDB instead.",
              "Redesigned existing E-Book and print book backend services to support new businesses through multi-tenancy.",
              "Redesigned and migrated legacy file processing workflows for ebook interior formatting to step functions solution in AWS."]} 
            />
            <WorkSummary 
              jobTitle="Software Development Enigneer" 
              company="Amazon.com"
              startDate="May 2015"
              endDate="October 2016"
              location="San Luis Obispo, CA"
              workItems={[
                "Implemented automation using OCR to format print book cover and interior PDFs for printing processes.",
                "Designed and implemented analytics feeds to data lakes from book metadata databases",
                "Implemented QA automation for CRM checks for print books"
              ]} 
            />
            <WorkSummary 
              jobTitle="SDE Intern III" 
              company="Amazon.com"
              startDate="March 2015"
              endDate="May 2015"
              location="San Luis Obispo, CA"
              workItems={[
                "Designed and implemented a throttler that manages client code execution on our web platform, including limiting thread usage and execution time.",
                "Redesigned the build tools for clients that develop on our platform, reducing the build-test time to a tenth of its previous duration.",
                "Designed and set up a testing fleet for automated test runs of our client’s services."
              ]} 
            />
          </Grid>
        </Grid>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </ThemeProvider>
    )
}