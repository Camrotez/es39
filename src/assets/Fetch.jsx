
import { useEffect, useState } from "react";

const Fetch = (username) => {
    const [data, setData] = useState("")
    const [load,setLoad] = useState(true)
    async function fetchData(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setData(json)
            setLoad(false)
      } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
        fetchData(username)
    }, [username])
    return (
        data,
        load
    )
}
export default Fetch