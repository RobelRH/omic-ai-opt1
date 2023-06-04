import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FileList from '../components/FileList';
// import Topbar from './topBar';
// import Sidebar from './SideBar';
// import Body from './Body';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

const Share = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <Topbar /> */}
            <FileList />
            {/* <Body /> */}
        </div>
    );
};

export default Share;
