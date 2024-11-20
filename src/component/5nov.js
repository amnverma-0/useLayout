import React, { useEffect, useState } from 'react'

function Datafetcher  () {
    const [data, setdata] = useState(null);

    useEffect(() =>{
        const fetchData = async() => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const result = await response.json();
            setdata(result);
        };
        fetchData();
    }, []);
  return (
    <div>
        {data ? <p>{data.body}</p> : <p>Loading....</p>}
    </div>
  )
}

export default Datafetcher;
