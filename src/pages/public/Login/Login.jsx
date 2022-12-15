/** @jsxImportSource @emotion/react */
import React, { useState, useCallback } from "react";
import api from '../../../services/api'
import Header from "../../../components/Header";
import { Button } from "@mui/material";
import { css } from '@emotion/react';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";


const generalStyles = () => css`
    max-width: 40%;
    margin: auto;
  .InputText {
    width: 100%;
    margin-bottom: 15px;
  }
  .ButtonContainer {
    margin: auto;
    width: max-content;
    display: flex;
    gap: 16px;   
  }
`

const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [nameProfile, setNameProfile] = useState(null);

    const onLogin = useCallback( 
        async(login) => {
          try {
          const {data} = await api.post('/login', {email: login});
          console.log(data)
          localStorage.setItem('user', JSON.stringify(data.user));
          navigate(data.user.isEmployer ? "/homerestrict" : "/")
          return true
        } catch (e) {
          return console.log(e.err);
        }
      }, [])
    return (
        <>
         <Header about={false} login={false}/>
            <div css={generalStyles}>
                <div>
                    <TextField
                        label="Email"
                        className="InputText"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        className="InputText"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <div className='ButtonContainer'>
                    <Button sx={{
                        width: '150px',
                        height: '50px',
                    }} variant="contained"
                    onClick={() => {
                        onLogin(login)
                    }}
                    >  
                        LOGIN 
                    </Button>
                    <Button sx={{
                        width: '150px',
                        height: '50px',
                    }} variant="contained"
                    onClick={() => navigate("/")}>
                        Voltar
                    </Button>
                </div>
            </div>
        </>

    )
}
    
export default Login;
