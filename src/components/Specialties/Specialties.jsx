/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { css } from '@emotion/react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import BoxComponent from '../BoxComponent';

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

const Specialties = () => {

  return (
    <div css={generalStyles}>
        <h1 className="h1">
            Especialidades
        </h1>
        <p className="p">
            Atendemos diversas especialidades e possuímos os melhores especialistas em cada área
        </p>
        <BoxComponent titleLeft="Cardiologia" titleMiddle="Clínica Médica" titleRight="Dermatologia" />
        <BoxComponent titleLeft="Fonoaudiologia" titleMiddle="Ginecologia" titleRight="Nutrição"/>
        <BoxComponent titleLeft="Ortopedia" titleMiddle="Otorrino" titleRight="Pediatria"/>
        <BoxComponent titleLeft="Psicologia" titleMiddle="Psiquiatria" titleRight="Clínica Médica"/>
    </div>
  );
}

export default Specialties;
