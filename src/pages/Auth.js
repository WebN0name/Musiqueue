import React, {useEffect, useState} from 'react'



export default function Auth(props){


    const[token,setToken] = useState({})

    useEffect(() =>{

        console.log(props.location.hash)
        const token = get_hash_data(props.location.hash)
        setToken(token)
        // const hash = props.location.hash
        console.log(token)
    },[])
    // const search = props.location.search;
    // const token = new URLSearchParams(search).get('access_token');

    return(
        <>
            <h1>хуй</h1>
            <h2>Пизда</h2>
            <p>--{token.access_token}--</p>
            {/*{ token.map((member) => <p>{member}</p>) }*/}
            {Object.keys(token).map((keyName, i) => (
                <li  key={i}>
                    <span>key: {i} Name: {token[keyName]}</span>
                </li>
            ))}
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
