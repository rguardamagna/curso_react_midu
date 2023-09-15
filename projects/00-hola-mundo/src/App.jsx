import {useState} from 'react'
import { TwitterFollowCard } from './twitterFollowCard'
export function App() {
    
    //const formattedUserName = (<span>@Rodrigo</span>) // Esto es un elemento y puede pasarse directamente a la tarjeta
    //const formatUserName = (userName) => `@${userName}`
    // userName = `@${userName} // Modificar la prop es una mala praxis, si es necesario, crear una cost diferente
    
    const [name, setName] = useState('Rodrigo')

    return (
        <section className='App'>
            {/* <TwitterFollowCard formatUserName = {formatUserName} isFollowing={true} userName="kikobeats" name='Rodrigo Guardamagna'/> */}
            {/* <TwitterFollowCard isFollowing={true} userName="midudev" name='Miguel Angel Duran'/>
            <TwitterFollowCard isFollowing={false} userName="elonmusk" name='Elon Musk'/>
            <TwitterFollowCard isFollowing userName="vxnder" name='VanderHart'/> */}
            
            <TwitterFollowCard isFollowing userName="midudev">
                <strong>Miguel Angel Duran</strong>
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="vxnder">
                <strong>{name}</strong>
            </TwitterFollowCard>
            
            <button onClick={() => setName('Guardamagna')}>
                Cambio Nombre
            </button>

        </section>
    )
}