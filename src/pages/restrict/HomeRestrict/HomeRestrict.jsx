/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import api from '../../../services/api'
import { css } from '@emotion/react';
import Header from "../../../components/Header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const generalStyles = () => css`

//   .InputText {
//     width: 100%;
//     margin-bottom: 15px;
//   }
//   .ButtonContainer {
//     margin: auto;
//     width: max-content;
//     display: flex;
//     gap: 16px;   
//   }
`

const HomeRestrict = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async() => {
            const repos = await api.get('/repos/rodvl/githubexplorer');
            console.log(repos);
        }
        getData()
    }, [])

    return (
        <div>
            <Header login={true}/>
            <div css={generalStyles}>
                <div className='ButtonContainer'>
                        <Button sx={{
                            width: '150px',
                            height: '50px',
                        }} variant="contained"
                            onClick={() => navigate("/registEmployee")}
                        >  
                            Novo Funcionário 
                        </Button>
                        <Button sx={{
                            width: '150px',
                            height: '50px',
                        }} variant="contained"
                            onClick={() => navigate("/registPatient")}>
                            Novo Paciente
                        </Button>
                        <Button sx={{
                            width: '150px',
                            height: '50px',
                        }} variant="contained"
                            onClick={() => navigate("/listEmployee")} 
                            >  
                            Listar Funcionários 
                        </Button>
                        <Button sx={{
                            width: '150px',
                            height: '50px',
                        }} variant="contained"
                            onClick={() => navigate("/listPatient")} 
                        >
                            Listar Pacientes
                        </Button>
                        <Button sx={{
                            width: '150px',
                            height: '50px',
                        }} variant="contained">
                            Listar todos Agendamentos
                        </Button>
                        <Button sx={{
                            width: '150px',
                            height: '50px',
                        }} variant="contained"
                        onClick={() => navigate("/listAppointment")} 
                        >
                            Listar meus Agendamentos
                        </Button>
                    </div>
            </div>
        </div>
        
    )
}
    
export default HomeRestrict;