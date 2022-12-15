/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import api from '../../../services/api'
import Header from "../../../components/Header";
import { Button } from "@mui/material";
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useCallback } from "react";
import {FormControl} from "@mui/material";
import {InputLabel} from "@mui/material";
import {Select} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

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

const Scredule = () => {

    const navigate = useNavigate();
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(null)
    const [medic, setMedic] = useState(null);
    const [medicSelect, setMedicSelect] = useState(null);


    const onRegister = useCallback( 
      async() => {
        let pessoaString = JSON.parse(localStorage.getItem('user'));
        console.log(medicSelect)
        try {
        await api.post('/schedule', {
            date: date,
            hour: hour,
            name: pessoaString.name,
            phone: "998",
            email: pessoaString.email,
            employer_id: medicSelect.employerId,
        });
        return true
      } catch (e) {
        return console.log(e.err);
      }
    }, [medic, date, hour, medicSelect])


    useEffect(() => {
        const getData = async() => {
            const {data} = await api.get('/employer');
            setMedic(data);
            console.log(data)
        }
        getData() 
    }, [])
    return (
        <>
         <Header about={false} login={false}/>
            <div css={generalStyles}>
                <div>
                INSIRA OS DADOS NECESSÁRIOS
                
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Selecione o Médico para consulta</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={medicSelect}
                    label="specialty"
                    onChange={(e) => setMedicSelect(e.target?.value)}
                >
                    { medic?.map((value) => (
                        <MenuItem value={value} > {`${value.name}`} </MenuItem>
                    ))}
                </Select>
                </FormControl>
                <TextField
                  label="Especialidade do Médico"
                  className="InputText"
                  name="specialty" 
                  maxlength={8}
                  value={null} 
                />
                <TextField
                    label="Data da consulta"
                    className="20/04/2021"
                    name="dateConsult" 
                    maxlength={8}
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    /> 
                <TextField
                    label="Horário da consulta"
                    className="InputText"
                    name="hour" 
                    maxlength={8}
                    value={hour} 
                    onChange={(e) => setHour(e.target.value)}
                    />
                </div>
                <div>
                  <Button sx={{
                        width: '150px',
                        height: '50px',
                    }} variant="contained"
                    onClick={() => { 
                      let test = onRegister()
                      if(test === true)
                        return navigate("/homerestrict");
                      return null
                    }
                    }>
                        Agendar
                  </Button>
                </div>
                
            </div>
        </>

    )
}
    
export default Scredule;

