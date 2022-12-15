/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import  api from '../../../services/api'
import { css } from '@emotion/react';
import Header from "../../../components/Header";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const generalStyles = () => css`
    
  .InputText {
    margin: auto;
    // >div{
        margin: auto;
        background-color: #dedede;
        border-radius: 16px;
        padding: 16px;
    // }
  }
//   .ButtonContainer {
//     margin: auto;
//     width: max-content;
//     display: flex;
//     gap: 16px;   
//   }
`

const ListPatient = () => {
    const [patient, setPatient] = useState([])
    useEffect(() => {
        const getData = async() => {
            const {data} = await api.get('/patient');
            setPatient(data);
            
        }
        getData()
    }, [])

    return (
        <div css={generalStyles}>
            <Header/>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className="InputText">
                {patient?.map((value) => (
                    <ListItem
                    key={value.name}
                    disableGutters
                    >
                    <ListItemText primary={`${value.name}`} />
                    </ListItem>
                ))}
            </List>
                
        </div>
    )
}
    
export default ListPatient;


