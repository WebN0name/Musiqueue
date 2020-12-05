import {useEffect} from 'react'


export default function Home(){
    useEffect(() =>{
        window.location.replace('https://oauth.vk.com/authorize?client_id=7689075&display=page&redirect_uri=https://localhost:3000/auth&scope=audio&response_type=token&v=5.52')  
      }, [])

    return(
        <>
            <h1>Home</h1>
        </>
    )
}