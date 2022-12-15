import React, { useEffect } from "react";
import api from '../../../services/api'
import Header from "../../../components/Header";
import Specialties from "../../../components/Specialties";
import ScheduleAppointment from "../../../components/ScheduleAppointment";

const Home = () => {
    useEffect(() => {
        const getData = async() => {
            const repos = await api.get('/repos/rodvl/githubexplorer');
            console.log(repos);
        }
        getData()
    }, [])

    return (
        <>
            <Header about={true} login={true} schedule={true}/>
            <Specialties />
            <ScheduleAppointment />
        </>
    )
}
    
export default Home;