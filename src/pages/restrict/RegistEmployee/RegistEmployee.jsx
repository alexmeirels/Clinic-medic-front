/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import api from '../../../services/api'
import Header from "../../../components/Header";
import { Button } from "@mui/material";
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useCallback } from "react";
import Checkbox from '@mui/material/Checkbox';


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

const RegistEmployee = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const navigate = useNavigate();
    const [cep, setCep] = useState(null);
    const [streat, setStreat] = useState(null)
    const [district, setDistrict] = useState(null)
    const [state, setState] = useState(null)
    const [city, setCity] = useState(null)
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null);
    const [contract, setContract] = useState(null)
    const [salary, setSalary] = useState(null);
    const [specialty, setSpecialty] = useState(null)
    const [document, setDocument] = useState(null);
    const [selectMedic, setSelectMedic] = useState(false)
    const [selectEmployer, setSelectEmployer] = useState(false);

    const onRegister = useCallback( 
      async() => {
        try {const payloadUser = {
          user: {
            email: email,
            name: name,
            phone: phone,
            password: password,
          },
          address: {
            district: district,
            cep: cep,
            city: city,
            state: state,
            streat: streat,
          },
          employer: {
            salary: salary,
            contractDate: contract,
            specialty: specialty,
            crm: document,
          }
        }

        const users = await api.post('/users/employer', payloadUser);
        console.log("users", users)
        return true
      } catch (e) {
        return console.log(e.err);
      }
    }, [district, cep, city, state, streat, email, name, phone, password, salary, contract, specialty, document])

    return (
        <>
         <Header about={false} login={false}/>
            <div css={generalStyles}>{}

                <FormControlLabel control={<Checkbox checked={selectEmployer} 
                  onChange={(e) => {
                    setSelectEmployer(e.target.checked)
                    if(selectEmployer === true) {
                      setSelectMedic(false)
                    }

                    }}
                />} label="FUNCIONÁRIO" />
                <FormControlLabel control={<Checkbox checked={selectMedic} 
                  onChange={(e) => {
                    setSelectMedic(e.target.checked)
                    if(selectMedic === true) {
                      setSelectEmployer(false)
                    }
                    }} />
                  } label="MÉDICO" />

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
                  CONTRATO
                <TextField
                  label="Salário"
                  className="InputText"
                  name="salary" 
                  maxlength={8}
                  value={salary} 
                  onChange={(e) => setSalary(e.target.value)}
                  /> 
                <TextField 
                    name="contract"
                    label="Data do contrato"
                    className="InputText" 
                    maxlength={8}
                    value={contract} 
                    onChange={(e) => setContract(e.target.value)}
                    />
                  { 
                    selectMedic && (
                      <TextField
                        label="Especialidade"
                        className="InputText"
                        name="specialty" 
                        maxlength={8}
                        value={specialty} 
                        onChange={(e) => setSpecialty(e.target.value)}
                        /> 
                    ) 
                  }
                  {
                    selectMedic && (
                        <TextField
                          label="Documento"
                          className="InputText"
                          name="document" 
                          maxlength={8}
                          value={document} 
                          onChange={(e) => setDocument(e.target.value)}
                          /> 
                    )

                  }
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

export default RegistEmployee;



