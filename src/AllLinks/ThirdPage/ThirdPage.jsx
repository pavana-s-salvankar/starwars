import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Content from '../ThirdPage/Contents/content.jsx';
import { useParams } from 'react-router';
const Details = () => {
    let {id,id1}=useParams();

    const [detail, setDetail] = useState();

    const content = {
        films: ['episode_id','director','producer','opening_crawl','created','edited','release_date'],
        species: ['classification','average_height','average_lifespan','designation','eye_colors','hair_colors','skin_colors','language','created','edited'],
        planets: ['climate','diameter','gravity','orbital_period','population','rotation_period','residents','surface_water','terrain','created','edited'],
        people: ['birth_year','gender','eye_color','skin_color','hair_color','height','mass','created','edited'],
        starships: ['MGLT','cargo_capacity','consumables','crea','hyperdrive_rating','length','manufacturer','max_atmosphering_speed','model','passengers','starship_class','created','edited'],
        vehicles: ['cargo_capacity','consumables','cost_in_credits','crew','length','manufacturer','max_atmosphering_speed','model','passengers','pilots','vehicle_class','created','edited']
    }

    useEffect(() => {
        getDetail();
    },[]);

    const getDetail = async () => {
        const details = await axios.get(`https://swapi.dev/api/${id}/${id1}`);
        setDetail(details);
        
    }

    return (
        <div>
               {detail === undefined ? console.log() : <Content content = {content[id]} detail = {detail} />}
        </div>
    )
}

export default Details;