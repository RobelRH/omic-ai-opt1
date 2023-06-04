import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Share from '../pages/Share';
import FileList from '../components/FileList';

const useStyles = makeStyles((theme) => ({
    content: {
        // margin: 0,
        // flexGrow: 1,
        padding: theme.spacing(10),
        // width: "96%",
        border: "1px solid black"
    },
}));

const Body = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            {/* <FileList /> */}
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Grid item xs={2}>
                    hello
                </Grid>
                <Grid item xs={10}>
                    there
                </Grid>
            </Grid>
        </main>
    );
};


export default Body;