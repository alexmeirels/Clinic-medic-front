import React, { useEffect } from "react";
import api from '../../../services/api'

const Address = () => {
    useEffect(() => {
        const getData = async() => {
            const repos = await api.get('/repos/rodvl/githubexplorer');
            console.log(repos);
        }
        getData()
    }, [])

    return <h1>Address</h1>
}
    
export default Address;