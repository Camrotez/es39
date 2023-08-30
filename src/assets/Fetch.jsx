
import { useEffect, useState } from "react";

const Fetch = (username) => {
    const [data, setData] = useState("")
    const [load,setLoad] = useState(true)
    const [error, setError] = useState();
    async function fetchData(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setData(json)
            setLoad(false)

      } catch (error) {
            setError(error)
            setLoad(false)
        }
    }
    useEffect(() => {
        fetchData(username);
        if (!username) {
            setLoad(false);
            return;
          }
      
          setLoad(true);
          setError(null);
          setData(null);
    }, [username])
    
    return (
        {data,load,error, fetchData}
    )
}
export default Fetch