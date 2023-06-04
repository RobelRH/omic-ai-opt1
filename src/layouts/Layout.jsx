import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Topbar from './topBar';
import Sidebar from './SideBar';
import Body from './Body';
import { Box, Divider, Grid, Paper } from '@material-ui/core';
import FileList from '../components/FileList';
import { COLORS } from '../constants';
import CodeRun from '../components/CodeRun';
import Outline from '../components/Outline';
import Console from '../components/Console';

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
                        <Grid item xs={3} style={{ backgroundColor: COLORS.SecondaryB, color: COLORS.textColor }}>
                            <FileList />
                        </Grid>
                        <Grid item xs={9}>
                            <Grid
                                container
                                direction='column'
                            >
                                <Grid item xs={12} style={{ height: "100%" }}>
                                    <Grid container>
                                        <Grid item xs={8} >
                                            <CodeRun />
                                        </Grid>
                                        <Grid item xs={4} style={{ display: "flex", backgroundColor: COLORS.SecondaryA }} >
                                            <Divider orientation="vertical" flexItem sx={{ width: "1%" }} style={{ backgroundColor: COLORS.ListHighlightColor }} />
                                            <Outline />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{height: "50vh", backgroundColor: COLORS.primaryB, color: COLORS.textColor }}>
                                    <Console />
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
