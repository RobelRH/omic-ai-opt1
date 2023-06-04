import { Box, Button, Chip, Divider, Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { COLORS } from '../constants';
import HelpIcon from '@material-ui/icons/Help';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TypographyWithUnderline from './TypographyWithUnderline';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Outline() {
    const classes = useStyles();
    return (
        <Box style={{ padding: 10, width: "100%" }}>
            <TypographyWithUnderline />
            <Typography style={{ color: COLORS.textGoldColor, fontSize: 13, marginBottom: 10 }}><HelpIcon /> No compilation Issue</Typography>
            <Box style={{ display: "flex", padding: 5 }}>
                <Chip size="small" label="table" style={{ marginRight: 20, backgroundColor: COLORS.BtnBGTeritiary, color: COLORS.White }} />
                <Typography style={{ fontSize: 15, color: COLORS.textColor }}>dataset_2_with_ref</Typography>
            </Box>
            <Divider style={{ backgroundColor: COLORS.ListHighlightColor }} />
            <Grid container>
                <Grid item xs={12} md={12}>
                    <div className={classes.demo}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography variant="body1" style={{ fontSize: '14px', color: COLORS.textColor }}>
                                        Dependencies
                                    </Typography>
                                </ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="expand">
                                        <ExpandMoreIcon style={{ color: COLORS.textColor }} />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider style={{ backgroundColor: COLORS.ListHighlightColor }} />
                            <ListItem>
                                <ListItemText>
                                    <Typography variant="body1" style={{ fontSize: '14px', color: COLORS.textColor }}>
                                        Compiled
                                    </Typography>
                                </ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="expand">
                                        <ExpandMoreIcon style={{ color: COLORS.textColor }} />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider style={{ backgroundColor: COLORS.ListHighlightColor }} />
                            <ListItem>
                                <ListItemText>
                                    <Typography variant="body1" style={{ fontSize: '14px', color: COLORS.textColor }}>
                                        Query
                                    </Typography>
                                </ListItemText>
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
            <Grid style={{ display: "flex", justifyContent: "space-between", marginLeft: 16, marginRight: 16 }}>
                <Button style={{ textTransform: "none", backgroundColor: COLORS.BtnBGSecondary, color: COLORS.White, fontSize: 13 }}>Execute query</Button>
                <Button style={{ textTransform: "none", backgroundColor: COLORS.BtnBGPrimary, color: COLORS.White, fontSize: 13 }}>Run this node</Button>
            </Grid>
        </Box>
    )
}

export default Outline