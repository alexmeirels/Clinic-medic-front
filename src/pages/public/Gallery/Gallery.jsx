/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css } from '@emotion/react';
import api from '../../../services/api'
import Header from "../../../components/Header";
import { Typography } from "@mui/material";

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
    padding-left: 60px;
  }
`

const Gallery = () => {
    useEffect(() => {
        const getData = async() => {
            const repos = await api.get('/repos/rodvl/githubexplorer');
            console.log(repos);
        }
        getData()
    }, [])

    return (
        <div css={generalStyles}>
            <Header about={false} login={false}/>
            <div 
            style={{ backgroundImage: `url("https://paulomuzy.com.br/wp-content/uploads/2022/07/Muzy-bracos-cruzados.webp")` }}
            >
            <Typography>
                teste
            </Typography>
            </div>
            <div>
            {/* <img src={LogoTitle} alt='logo' /> */}
            </div>
        </div>
        )
}
    
export default Gallery;
