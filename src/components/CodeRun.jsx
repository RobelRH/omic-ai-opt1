import { Box, Button, Divider, Typography } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { COLORS } from '../constants';

const CodeRun = () => {
    const codeString = `
    -- learn more on
    --js type('table')
    SELECT country        as country,
           device_type    as device_type,
           sum(revenue)   as revenue,
           sum(sessions)  as sessions,
           sum(pageviews) as pageviews
    FROM my_table
    WHERE country = 'FRANCE'
    GROUP BY 1, 2
  `;
    return (
        <Box style={{ padding: 10, backgroundColor: COLORS.SecondaryA }}>
            <Box style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <Typography variant='subtitle1' style={{ color: COLORS.textColor, fontSize: 13 }}>definitions/1_simple_examples/dataset_2_with_ref.sql</Typography>
                <Button style={{ height: 30, color: COLORS.White, textTransform: "none", backgroundColor: COLORS.BtnBGSecondary }}>Save</Button>
            </Box>
            <Divider style={{ backgroundColor: COLORS.ListHighlightColor }} />
            <SyntaxHighlighter language="sql" style={darcula} showLineNumbers={true} customStyle={{ fontSize: 13, backgroundColor: COLORS.SecondaryA }}>
                {codeString}
            </SyntaxHighlighter>
        </ Box>
    );
};

export default CodeRun