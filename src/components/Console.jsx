import { Box, Chip, Divider, Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { COLORS } from '../constants'
import FindInPageIcon from '@material-ui/icons/FindInPage';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Close, PanoramaFishEye, Refresh } from '@material-ui/icons';
import { TreeItem, TreeView } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DenseTable from './ConsoleTable';

const useStyles = makeStyles({
  root: {
    // height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function Console() {
  const classes = useStyles();
  return (
    <Box style={{ }}>
      <Box style={{ display: "flex", padding: 10 }}>
        <Box style={{ display: "flex", padding: 10 }}>
          <FindInPageIcon style={{ fontSize: '20' }} />
          <Typography variant='subtitle1' style={{ marginLeft: 5, color: COLORS.textColor, fontSize: 13 }}>Query results</Typography>
        </Box>
        <Box style={{ display: "flex", padding: 10 }}>
          <FileCopyIcon style={{ fontSize: '20', color: COLORS.White }} />
          <Typography variant='subtitle1' style={{ marginLeft: 5, color: COLORS.textColor, fontSize: 13 }}>Schemas</Typography>
        </Box>
      </Box>
      <Divider style={{ backgroundColor: COLORS.ListHighlightColor }} />
      <Grid container>
        <Grid xs={4}>
          <Box style={{ padding: 10 }}>
            <Typography variant='subtitle1' style={{ color: COLORS.textColor, fontSize: 13 }}>Refresh</Typography>
            <Refresh style={{ fontSize: '20', marginLeft: 5, marginBottom: 10 }} />
            <TreeView
              className={classes.root}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem nodeId="1" label="dataform_demo">
                <div style={{ display: "flex", padding: 5 }}>
                  <TreeItem nodeId="2" label="dataset_1" style={{ marginLeft: 20 }} icon={<VisibilityIcon />} />
                </div>
                <div style={{ display: "flex", padding: 5 }}>
                  <TreeItem nodeId="3" label="dataset_5_from_script_builder" style={{ marginLeft: 20, color: COLORS.White }} icon={<VisibilityIcon />} />
                </div>
                <div style={{ display: "flex", padding: 5 }}>
                  <TreeItem nodeId="4" label="dataset_3_incremental_date" style={{ marginLeft: 20 }} icon={<VisibilityIcon />} />
                </div>
                <div style={{ display: "flex", padding: 5 }}>
                  <TreeItem nodeId="5" label="dataset_4_incremental_snapshot" style={{ marginLeft: 20, }} icon={<VisibilityIcon />} />
                </div>
                <div style={{ display: "flex", padding: 5 }}>
                  <TreeItem nodeId="6" label="reporting_gb" style={{ marginLeft: 20 }} icon={<VisibilityIcon />} />
                </div>
              </TreeItem>
              <TreeItem nodeId="7" label="dataform_set2">
                <div style={{ display: "flex", padding: 5 }}>
                  <TreeItem nodeId="8" label="dataset_1" style={{ marginLeft: 20 }} icon={<Chip size="small" label="SQL" style={{ marginRight: 20, backgroundColor: COLORS.BtnBGGreen, color: COLORS.White }} />} />
                </div>
                <div style={{ display: "flex", padding: 5 }}>
                  <TreeItem nodeId="9" label="dataset_2_with_ref" style={{ marginLeft: 20 }} icon={<Chip size="small" label="SQL" style={{ marginRight: 20, backgroundColor: COLORS.BtnBGGreen, color: COLORS.White }} />} />
                </div>
              </TreeItem>
            </TreeView>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ width: "1%", height: "100vh" }} style={{ backgroundColor: COLORS.ListHighlightColor }} />
        <Grid xs={7}>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Box style={{ display: "flex", padding: 5 }}>
              <Chip size="small" label="table" style={{ marginRight: 20, backgroundColor: COLORS.BtnBGTeritiary, color: COLORS.White }} />
              <Typography style={{ color: COLORS.textColor }}>dataset_2_with_ref</Typography>
            </Box>
            <Close />
          </Box>
          <DenseTable />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Console