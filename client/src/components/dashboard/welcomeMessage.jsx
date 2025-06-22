import { Box, Button, Grid, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';
import configData from '../../config.json'
import palette from "../../theme/palette";
export const WelcomeMessage = () => {
    return (
        <Box sx={{
            boxShadow: 5,
            p: 5,
            bgcolor: (theme) => theme.palette['primary'].lighter,
            color: (theme) => theme.palette['primary'].darker,
            borderRadius: 2
        }}>
            <Grid container spacing={2} justifyContent={'center'}
                alignItems={'center'}
            >

                <Grid container>
                    <Grid item lg={6} md={6} xs={12}>

                        <Typography variant="h5" pb={2}>
                            Hey buddy!
                        </Typography>
                        <Typography variant="body2" pb={2} >
                            Welcome back to Split Buddy your one stop solution to all expense tracking issues 
                        </Typography>
                        <Button style = {{
                            backgroundColor : '#b33856'
                        }} variant="contained"
                            component={RouterLink}
                            to={configData.USER_GROUPS_URL}
                        >
                            View Groups
                        </Button>
                    </Grid>
                    <Grid item lg={5} md={6} xs={12}>
                        <img src="/static/illustrations/dashboard-card.jpeg" alt="dashboard" />
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}
