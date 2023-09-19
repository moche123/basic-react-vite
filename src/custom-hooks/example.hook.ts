import { useEffect, useState } from "react"
import axios from "axios"


export default function useFetch(url:string){

    const [data,setData] = useState({name:''})
    const [error,setError] = useState<string>('')
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(url)
                    console.log(response.data)
                    setData(response.data)
                }catch(e){
                    setError('Error')
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }

}