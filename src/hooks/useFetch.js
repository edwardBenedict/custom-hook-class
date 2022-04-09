import {useState, useEffect} from 'react'
function useFetch() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        
        return response.json()})
    .then(data => setData(data));
}, [])

    
}

export default useFetch