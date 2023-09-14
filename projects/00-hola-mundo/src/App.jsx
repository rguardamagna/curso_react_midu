import { TwitterFollowCard } from './twitterFollowCard'
export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName = {formatUserName} isFollowing={true} userName="kikobeats" name='Rodrigo Guardamagna'/>
            <TwitterFollowCard formatUserName = {formatUserName} isFollowing={true} userName="midudev" name='Miguel Angel Duran'/>
            <TwitterFollowCard formatUserName = {formatUserName} isFollowing={false} userName="elonmusk" name='Elon Musk'/>
            <TwitterFollowCard formatUserName = {formatUserName} isFollowing userName="vxnder" name='VanderHart'/>
            <TwitterFollowCard formatUserName = {formatUserName} userName="midudev" name='Miguel Angel Duran'/>
        </section>
    )
}