import Fetch from "./Fetch"
function UserGit({ username }) {
    const data = Fetch(username)
    console.log(data)
    const load = Fetch(username)
    return (
        <div>
            {load === true? <p>loading...</p> : <h1>{data.name}</h1>}
        </div>
    )
}
export default UserGit

