import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';


const ItemDetails = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/item/${id}`);
            setItem(respuesta.data);
        }

        getData();

    }, [id])

    return (
        <>

            <Link to="/" >back to Home</Link>
            <br></br>
            <br></br>
            <br></br>

            <div className="text-center">
                <h4 >{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price} u$d</p>
            </div>





        </>
    )
}

export default ItemDetails