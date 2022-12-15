/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { css } from '@emotion/react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const generalStyles = () => css`
  .TopBox {
    padding-top: 50px
  }
  .h1 {
    text-align: center; 
    width:100%;
  }
`
const styleBox = {
  width: 300,
  height: 200,
  backgroundColor: 'primary.dark',
  '&:hover': {
  backgroundColor: 'primary.main',
  opacity: [0.9, 0.8, 0.7],
  },
  textAlign: 'center',
  color:'#fff'
};

const BoxComponent = ({iconLeft, iconMiddle, iconRight, titleLeft, titleMiddle, titleRight}) => {
  return (
    <div css={generalStyles}>
        <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="TopBox">
          <Grid xs={3}>
            <Box
              component="h1"
              sx={styleBox}>
                  {
                    titleLeft
                  }
            </Box>
          </Grid>
          <Grid item xs={3} className="BoxMiddle">
            <Box
              component="h1"
              sx={styleBox}
            >
              {
                titleMiddle
              }
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              component="h1"
              sx={styleBox}
            >
              {
                titleRight
              }
            </Box>
          </Grid>
        </Grid>
    </div>
  );
}

export default BoxComponent;
