import { Box, Button, Chip, Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { COLORS } from '../constants';
import HelpIcon from '@material-ui/icons/Help';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TypographyWithUnderline from '../test';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

function Outline() {
    const classes = useStyles();
    return (
        <Box style={{ padding: 10 }}>
            <TypographyWithUnderline />
            <Typography style={{ color: COLORS.textGoldColor, fontSize: 13, marginBottom: 10 }}><HelpIcon /> No compilation Issue</Typography>
            <Box style={{ display: "flex", padding: 5 }}>
                <Chip size="small" label="table" style={{ marginRight: 20, backgroundColor: COLORS.BtnBGTeritiary, color: COLORS.White }} />
                <Typography style={{ color: COLORS.textColor }}>dataset_2_with_ref</Typography>
            </Box>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <div className={classes.demo}>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Dependencies"
                                    style={{ color: COLORS.textColor }}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="expand">
                                        <ExpandMoreIcon style={{ color: COLORS.textColor }} />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Compiled"
                                    style={{ color: COLORS.textColor }}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="expand">
                                        <ExpandMoreIcon style={{ color: COLORS.textColor }} />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Query"
                                    style={{ color: COLORS.textColor }}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="expand">
                                        <ExpandMoreIcon style={{ color: COLORS.textColor }} />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </div>
                </Grid>
            </Grid>
            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
                <Button style={{ textTransform: "none", backgroundColor: COLORS.BtnBGSecondary, color: COLORS.White, fontSize: 13 }}>Execute query</Button>
                <Button style={{ textTransform: "none", backgroundColor: COLORS.BtnBGPrimary, color: COLORS.White, fontSize: 13 }}>Run this node</Button>
            </Grid>
        </Box>
    )
}

export default Outline