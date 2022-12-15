/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { css } from '@emotion/react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import LogoTitle from '../../image/LogoTitle.png'

const generalStyles = () => css`
  .ButtonTitle {
    height: 100px;
    padding-left: 20px;
  }
  .ButtonAbout {
    height: 100px;
    padding-left: 30px;
  }
  .ButtonLogin {
    height: 100px;
    padding-left: 10px;
  }
`

const Header = ({about, login, schedule}) => {
  const navigate = useNavigate();
  let pessoaString = JSON.parse(localStorage.getItem('user'));
  
  return (
    <div css={generalStyles}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
              <IconButton className="ButtonTitle" onClick={() => navigate("/")}>
                <img src={LogoTitle} alt='logo' />
                Clinica Médica
              </IconButton>
          </Grid>
          <Grid item xs={9}>
            {
              schedule && (
                <Button className="ButtonAbout" onClick={() => navigate("/scredule")}>
                Agenda consulta
                </Button>
              )
            }
            {
              about && (
                <Button className="ButtonAbout" onClick={() => navigate("/gallery")}>
                SOBRE
              </Button>
              )
            }
            {
             pessoaString && (
                <Button className="ButtonLogin" onClick={() => {
                  navigate("/login")
                  localStorage.removeItem("user")
                }} disableRipple={true}>
                  {`${pessoaString.name}`}
                </Button>
              ) 
            }
            {
              login && !pessoaString && (
                <Button className="ButtonLogin" onClick={() => {
                  navigate("/login")
                }} disableRipple={true}>
                  LOGIN
                </Button>
              )
            }
              
          </Grid>
        </Grid>
    </div>
  );
}

export default Header;
