/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { css } from '@emotion/react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TeleMarketing from '../../image/TeleMarketing.png'

const generalStyles = () => css`
  .h1 {
    padding-top: 80px;
    text-align: center; 
    width:100%;
  }
  .p {
    text-align: center; 
    width:100%;
  }
`

const ScheduleAppointment = () => {

  return (
    <div css={generalStyles}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
                <img src={TeleMarketing} alt='logo' />
          </Grid>
          <Grid item xs={6}>
            <h2>AGENDE SUA
                CONSULTA
            </h2>
            <Button 
                size="large"
                sx={{
                    width: 200,
                    height: 50,
                }}
            >
                ATENDIMENTO VIA WHATSAPP
              </Button>
          </Grid>
        </Grid>
    </div>
  );
}

export default ScheduleAppointment;
