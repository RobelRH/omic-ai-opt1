import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import '../constants'
import { COLORS } from '../constants';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TabletIcon from '@material-ui/icons/Tablet';
import ComputerIcon from '@material-ui/icons/Computer';

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: '95%',
        height: 55,
        backgroundColor: COLORS.primaryB,
        display: "flex",
        alignContent: "center"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const Topbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" elevation={0} className={classes.appBar}>
            <Toolbar style={{ display: "flex", justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="body" noWrap style={{ fontSize: 16, color: COLORS.textColor }}>
                        Project name
                    </Typography>
                    <ExpandMoreIcon style={{ color: COLORS.textColor }} />
                    <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<ExpandMoreIcon style={{ color: COLORS.textColor }} />}
                        style={{ fontSize: 13, marginLeft: 10, marginRight: 10, borderColor: COLORS.ListHighlightColor, color: "white", textTransform: 'none' }}
                    >
                        Development
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AllInclusiveIcon style={{ fontSize: 15 }} />}
                        style={{ fontSize: 13, height: 30, borderRadius: 5, backgroundColor: COLORS.BtnBGPrimary, color: "white", textTransform: 'none' }}
                    >
                        Commit (2 files)
                    </Button>
                </Box>
                <Box>
                    <TabletIcon style={{ color: COLORS.textColor }} />
                    <PhoneIphoneIcon style={{ color: COLORS.textColor }} />
                    <ComputerIcon style={{ color: COLORS.textColor }} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
