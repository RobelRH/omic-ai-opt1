import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { COLORS } from '../constants';
import AdjustIcon from '@material-ui/icons/Adjust';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';
import AlarmIcon from '@material-ui/icons/Alarm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StorageIcon from '@material-ui/icons/Storage';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import FaceIcon from '@material-ui/icons/Face';

const drawerWidth = '5%';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: COLORS.primaryA,
    },
    list: {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center"
    },
    listItem: {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        marginBottom: 5
    },
    listItemIcon: {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center"
    }
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <List className={classes.list}>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <AdjustIcon style={{ color: COLORS.White, fontSize: 23 }} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <PlayCircleFilledIcon style={{ color: COLORS.BtnBGPrimary, fontSize: 23 }} />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ marginBottom: 5, backgroundColor: COLORS.ListHighlightColor, width: '50%' }} />
                <ListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <TrackChangesIcon style={{ color: COLORS.ListColor, fontSize: 23 }} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <SearchIcon style={{ color: COLORS.ListColor, fontSize: 23 }} />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ marginBottom: 5, backgroundColor: COLORS.ListHighlightColor, width: '50%' }} />
                <ListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <ShareIcon style={{ color: COLORS.White, fontSize: 23 }} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <AlarmIcon style={{ color: COLORS.ListColor, fontSize: 23 }} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <AssignmentIcon style={{ color: COLORS.ListColor, fontSize: 23 }} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <StorageIcon style={{ color: COLORS.ListColor, fontSize: 23 }} />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ marginBottom: 5, backgroundColor: "#3c4752", width: '50%' }} />
                <ListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <ArrowForwardIosIcon style={{ color: COLORS.ListColor, fontSize: 23 }} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <InsertLinkIcon style={{ color: COLORS.ListColor, fontSize: 23 }} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <FaceIcon style={{ color: COLORS.ListColor, fontSize: 23 }} />
                    </ListItemIcon>
                </ListItem>

            </List>
        </Drawer>
    );
};

export default Sidebar;
