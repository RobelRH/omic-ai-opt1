import { Box, Chip, Typography } from '@material-ui/core'
import React from 'react'
import { COLORS } from '../constants'
import FileSystemNavigator from './FileNavigator'

function FileList() {

  return (
    <div style={{ padding: 20, fontSize: 13 }}>
      <Typography variant="h5">Files</Typography>
      <Box style={{ display: "flex", marginTop: 10 }}>
        <Chip size="small" label="config" style={{ fontSize: 13, marginRight: 10, backgroundColor: COLORS.BtnBGTeritiary, color: COLORS.White }} />
        <Typography variant="p">dataform</Typography>
      </Box>
      <Box style={{ display: "flex", marginTop: 10 }}>
        <Chip size="small" label="config" style={{ fontSize: 13, marginRight: 10, backgroundColor: COLORS.BtnBGTeritiary, color: COLORS.White }} />
        <Typography variant="p">package-lock</Typography>
      </Box>
      <Box style={{ display: "flex", marginTop: 10, marginBottom: 30 }}>
        <Chip size="small" label="config" style={{ fontSize: 13, marginRight: 10, backgroundColor: COLORS.BtnBGTeritiary, color: COLORS.White }} />
        <Typography variant="p">package</Typography>
      </Box>
      <FileSystemNavigator />
    </div>
  )
}

export default FileList