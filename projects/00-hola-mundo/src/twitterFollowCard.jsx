import './App.css'
export function TwitterFollowCard ({formatUserName, userName, name, isFollowing}) {
    //const addAt = (userName) => `@${userName}`
    return (        
            //<article style={{display:'flex', alignItems:'center, color:'#fff'}}>
            <article className='tw-follow-card'>
                <header className='tw-follow-card-header'>
                    <img src={`https://unavatar.io/${userName}`} 
                    alt="avatar de midu"
                    className='tw-follow-card-avatar' />
                    <div className='tw-follow-card-info'>
                        <strong>{name}</strong>
                        {/* <span className='tw-follow-card-info-username'>{addAt(userName)}</span> */}
                        <span className='tw-follow-card-info-username'>{formatUserName(userName)}</span>
                    </div>                
                </header>
    
                <aside>
                    <button className='tw-follow-card-button'>
                        Seguir
                    </button>
                </aside>
            </article>
    )
}