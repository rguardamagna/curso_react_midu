//import {useState} from 'react'
import { TwitterFollowCard } from './twitterFollowCard'
export function App() {
    
    //const formattedUserName = (<span>@Rodrigo</span>) // Esto es un elemento y puede pasarse directamente a la tarjeta
    //const formatUserName = (userName) => `@${userName}`
    // userName = `@${userName} // Modificar la prop es una mala praxis, si es necesario, crear una cost diferente
    // const [name, setName] = useState('Rodrigo')

    const users = [
        {
            userName: 'midudev',
            name: 'Migue Angel Durán',
            isFollowing: true,
        },
        {
            userName: 'pheralb' ,
            name: 'Pablo H.',
            isFollowing: false,
        },
        {
            userName: 'Pablo Hdezs',
            name: 'Paco Hdez',
            isFollowing: true,
        },
        {
            userName: 'TMChein',
            name: 'Tomas',
            isFollowing: false,
        },
    ]

    return (
        <section className='App'>
            {/* <TwitterFollowCard formatUserName = {formatUserName} isFollowing={true} userName="kikobeats" name='Rodrigo Guardamagna'/> */}
            {/* <TwitterFollowCard isFollowing={true} userName="midudev" name='Miguel Angel Duran'/>
            <TwitterFollowCard isFollowing={false} userName="elonmusk" name='Elon Musk'/>
            <TwitterFollowCard isFollowing userName="vxnder" name='VanderHart'/>
            <TwitterFollowCard isFollowing userName={name}>
                <strong>Miguel Angel Duran</strong>
            </TwitterFollowCard> */}
            
            {
                users.map (({userName, name, isFollowing}) => {
                    return (
                    <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                        <strong>{name}</strong>
                    </TwitterFollowCard>

                    )
                })
            }

            {/* <button onClick={() => setName('Guardamagna')}>
                Cambio Nombre
            </button> */}

        </section>
    )
}