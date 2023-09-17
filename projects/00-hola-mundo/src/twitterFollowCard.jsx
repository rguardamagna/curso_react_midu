import {useState} from 'react'

import './App.css'
//export function TwitterFollowCard ({formatUserName, userName, name, isFollowing}) 
export function TwitterFollowCard ({children, userName = 'unknown', initialIsFollowing})
{
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]
    // lo de arriba es igual a:
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    //const addAt = (userName) => `@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-follow-card-button is-following'
        : 'tw-follow-card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (        
            //<article style={{display:'flex', alignItems:'center, color:'#fff'}}>
            <article className='tw-follow-card'>
                <header className='tw-follow-card-header'>
                    <img src={`https://unavatar.io/${userName}`} 
                    alt="avatar"
                    className='tw-follow-card-avatar' />
                    <div className='tw-follow-card-info'>
                        {/* <strong>{name}</strong> */}
                        <strong>{children}</strong>
                        {/* <span className='tw-follow-card-info-username'>{addAt(userName)}</span> */}
                        <span className='tw-follow-card-info-username'>@{userName}</span>
                    </div>                
                </header>
    
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        <span className='tw-follow-card-text'>{text}</span>
                        <span className='tw-follow-card-stopFollow'>Dejar de seguir</span>
                    </button>
                </aside>
            </article>
    )
}