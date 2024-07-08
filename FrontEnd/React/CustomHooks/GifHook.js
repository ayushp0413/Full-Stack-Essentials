import { useEffect, useState } from "react";
import axios from "axios";


const url = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;
function useGifs(tag)
{

  const [gif,setGif]  = useState("");
  const [loading,setLoading] = useState(false);

  async function fetchData(tag)
  {
    setLoading(true);
    const {data} = await axios.get(tag ? `${url}&tag${tag}` : url);
    const gifSource = data.data.images.downsized_large.url;
    setGif(gifSource);
    setLoading(false);
  }

  useEffect(()=>{
    fetchData(tag);
  },[])


  return {gif,loading,fetchData};

}

export default useGifs;