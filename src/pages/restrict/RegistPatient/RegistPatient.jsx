/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import api from '../../../services/api'
import Header from "../../../components/Header";
import { Button } from "@mui/material";
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useCallback } from "react";


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

const RegisterPatient = () => {
    
    const dataLocal = {
        cep: "",
        logradouro: "",
        complemento: "", 
        bairro: "",
        localidade: "",
        uf: "",
        ibge: "",
        gia: "",
        ddd: "",
        siafi: "",
    }

    const navigate = useNavigate();
    const [cep, setCep] = useState(null);
    const [streat, setStreat] = useState(null)
    const [district, setDistrict] = useState(null)
    const [state, setState] = useState(null)
    const [city, setCity] = useState(null)
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null)
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null);
    const [bloodType, setBloodType] = useState(null);
    const [password, setPassword] = useState(null);

    const onRegister = useCallback( 
      async() => {
        try {const payloadUser = {
          address: {
            district: district,
            cep: cep,
            city: city,
            state: state,
            streat: streat,
          },
          user: {
            email: email,
            name: name,
            phone: phone,
            password: password,
          },
          patient: {
            weight: weight,
            height: height,
            bloodType: bloodType,
          },
        }
        const users = await api.post('/users', payloadUser);
        console.log("users", users)
        return true
      } catch (e) {
        return console.log(e.err);
      }
    }, [district, cep, city, state, streat, email, name, phone, weight, height, bloodType, password])

    return (
        <>
         <Header about={false} login={false}/>
            <div css={generalStyles}>
                <div>
                DADOS PESSOAIS
                <TextField
                  label="Nome Completo"
                  className="InputText"
                  name="name" 
                  maxlength={8}
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Telefone"
                  className="InputText"
                  name="phone" 
                  maxlength={8}
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                  label="Peso"
                  className="InputText"
                  name="weight" 
                  maxlength={8}
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)}
                />
                <TextField
                  label="Altura"
                  className="InputText"
                  name="height" 
                  maxlength={8}
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)}
                />
                <TextField
                  label="Tipo sanguíneo"
                  className="InputText"
                  name="bloodType" 
                  maxlength={8}
                  value={bloodType} 
                  onChange={(e) => setBloodType(e.target.value)}
                />
                ENDEREÇO
                <TextField
                    label="CEP"
                    className="InputText"
                    name="cep" 
                    maxlength={8}
                    value={cep} 
                    onChange={(e) => setCep(e.target.value)}
                    /> 
                <TextField
                    label="Rua"
                    className="InputText"
                    name="streat" 
                    maxlength={8}
                    value={streat} 
                    onChange={(e) => setStreat(e.target.value)}
                    />
                <TextField
                    label="Bairro"
                    className="InputText"
                    name="district" 
                    maxlength={8}
                    value={district} 
                    onChange={(e) => setDistrict(e.target.value)}
                    /> 
                <TextField
                    label="Cidade"
                    className="InputText"
                    name="city" 
                    maxlength={8}
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                    /> 
                <TextField 
                    name="uf"
                    label="UF"
                    className="InputText" 
                    maxlength={8}
                    value={state} 
                    onChange={(e) => setState(e.target.value)}
                    />
                  LOGIN
                <TextField
                    label="Email"
                    className="InputText"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <div>
                  <Button sx={{
                        width: '150px',
                        height: '50px',
                    }} variant="contained"
                    onClick={() => { 
                    onRegister()
                    navigate("/homerestrict");

                    }
                    }>
                        Registrar
                  </Button>
                </div>
                
            </div>
        </>

    )
}
    
export default RegisterPatient;
