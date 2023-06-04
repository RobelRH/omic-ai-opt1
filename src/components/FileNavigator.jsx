import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import FolderIcon from '@material-ui/icons/Folder';
import { Chip } from '@material-ui/core';
import { COLORS } from '../constants';

const useStyles = makeStyles({
    root: {
        height: 240,
        flexGrow: 1,
        maxWidth: 400,
    },
});

export default function FileSystemNavigator() {
    const classes = useStyles();

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            <TreeItem nodeId="1" label="models">
                <TreeItem nodeId="2" label="1_simple_examples" icon={<FolderIcon />}>
                    <div style={{ display: "flex", padding: 5 }}>
                        <TreeItem nodeId="3" label="dataset_1" style={{ marginLeft: 20 }} icon={<Chip size="small" label="SQL" style={{ marginRight: 20, backgroundColor: COLORS.BtnBGGreen, color: COLORS.White }} />} />
                    </div>
                    <div style={{ display: "flex", padding: 5 }}>
                        <TreeItem nodeId="4" label="dataset_2_with_ref" style={{ marginLeft: 20 }} icon={<Chip size="small" label="SQL" style={{ marginRight: 20, backgroundColor: COLORS.BtnBGGreen, color: COLORS.White }} />} />
                    </div>
                </TreeItem>
                <TreeItem nodeId="5" label="2_advanced_examples" icon={<FolderIcon />}>
                    <div style={{ display: "flex", padding: 5 }}>
                        <TreeItem nodeId="6" label="dataset_3_increase" style={{ marginLeft: 20 }} icon={<Chip size="small" label="SQL" style={{ marginRight: 20, backgroundColor: COLORS.BtnBGGreen, color: COLORS.White }} />} />
                    </div>
                    <div style={{ display: "flex", padding: 5 }}>
                        <TreeItem nodeId="7" label="dataset_4_increase" style={{ marginLeft: 20 }} icon={<Chip size="small" label="JS" style={{ marginRight: 20, backgroundColor: COLORS.BtnBGYellow, color: COLORS.White }} />} />
                    </div>
                </TreeItem>
                <TreeItem nodeId="8" label="3_operation and as.." icon={<FolderIcon />}>
                    <div style={{ display: "flex", padding: 5 }}>
                        <TreeItem nodeId="9" label="grant access" style={{ marginLeft: 20 }} icon={<Chip size="small" label="SQL" style={{ marginRight: 20, backgroundColor: COLORS.BtnBGTeritiary, color: COLORS.White }} />} />
                    </div>
                    <div style={{ display: "flex", padding: 5 }}>
                        <TreeItem nodeId="10" label="simple assertion" style={{ marginLeft: 20 }} icon={<Chip size="small" label="SQL" style={{ marginRight: 20, backgroundColor: COLORS.BtnBGOrange, color: COLORS.White }} />} />
                    </div>
                </TreeItem>
            </TreeItem>
            <TreeItem nodeId="11" label="models_2">

            </TreeItem>
        </TreeView>
    );
}
