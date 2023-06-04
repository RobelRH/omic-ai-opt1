import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Topbar from './topBar';
import Sidebar from './SideBar';
import Body from './Body';
import { Box, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
    },
}));

const Layout = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container>
                <Grid item style={{ width: "5%" }}>
                    <Sidebar />
                </Grid>
                <Grid item style={{ width: "95%" }}>
                    <Box style={{ height: 50 }}>
                        <Topbar />
                    </Box>
                    <Grid container style={{ height: "92vh" }}>
                        <Grid item xs={3} style={{ border: "1px solid black" }}>
                            <Paper className={classes.paper}>xs</Paper>
                            <Paper className={classes.paper}>xs</Paper>
                            <Paper className={classes.paper}>xs</Paper>
                        </Grid>
                        <Grid item xs={9} style={{ border: "1px solid black" }}>
                            <Grid
                                container
                                direction='column'
                            >
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={8} >
                                            <Paper style={{ height: "48vh", border: "1px solid black" }} className={classes.paper}>xs</Paper>
                                        </Grid>
                                        <Grid item xs={4} >
                                            <Paper style={{ height: "48vh", border: "1px solid black" }} className={classes.paper}>xs</Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} >
                                    <Paper style={{ height: "43vh", border: "1px solid black" }} className={classes.paper}>xs</Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Layout;
