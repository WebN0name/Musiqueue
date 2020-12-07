import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'


export default function Auth(props){



    useEffect(() =>{

        console.log(props.location.hash)
        const token = get_hash_data(props.location.hash)
        console.log(token)
    },[])

    return(
        <>
        </>
    )
}

function get_hash_data(hash_){
    const hash = hash_.slice(1);
    const data_arr = hash.split('&');
    let data = {};
        data_arr.forEach((pair)=>{
            let d = pair.split('=')
            data[d[0]] = d[1];
        })
    return data
}
