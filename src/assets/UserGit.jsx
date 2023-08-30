import Fetch from "./Fetch"
import { useEffect } from "react"
function UserGit({ username }) {
    const { data, load, error, fetchData } = Fetch(username)
    console.log(username)
    useEffect(() => {
        fetchData(username)
    }, [username])
    return (
        <div>
            {data && <h1>{data.name}</h1>}
            {load && <h1>Loading...</h1>}
            {error && <h1>error!</h1>}
        </div>
    )
}
export default UserGit

