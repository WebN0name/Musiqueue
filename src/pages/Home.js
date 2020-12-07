import { useEffect } from 'react'


export default function Home() {
    useEffect(() => {
        // window.location.replace('https://oauth.vk.com/authorize?client_id=7689254&display=page&redirect_uri=https://localhost:3000/auth&scope=audio&response_type=token&v=5.52')
        getAudio()
    }, [])


    async function getAudio() {
        fetch('https://cs4-7v4.vkuseraudio.net/p4/e3c7fa9a8c3032.mp3?extra=gvDIWzWaRejB0zLRWPPgNW8lQMBEs0Utv1TQ0iS6z8BgFG7wuiqpKcSf3oZmwLb3AetC1MzNtPjvAAlE2c-Sf1QX6Q3kDGdUjOZPmPAySGeHyleXMC6XoSwp6xO8oOSC4ZEjFfi5Sb1XC_ywA0bXdk22Txx4&long_chunk=1')
            .then(r => {
                console.log(r.url)
                const audio = new Audio()
                audio.autoplay = true
                audio.src = r.url
                audio.load()
                audio.addEventListener("load", function () {
                    audio.play();
                }, true)
            })

    }

    return (
        <>
            <h1>Home</h1>
        </>
    )
}