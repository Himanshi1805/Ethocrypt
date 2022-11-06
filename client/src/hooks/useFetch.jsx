// import { useEffect, useState } from "react";

// const API_KEY = import.meta.env.VITE_GIPHY_API;

// const useFetch = ({ keyword }) => {
//   const [gifUrl, setGifUrl] = useState("");

//   const fetchGifs = async () => {
//     try {
//       const response = await fetch(`https://g.tenor.com/v1/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
//       const { data } = await response.json();

//       setGifUrl(data[0]?.images?.downsized_medium?.url);
//     } catch (error) {
//       setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
//     }
//   };

//   useEffect(() => {
//     if (keyword) fetchGifs();
//   }, [keyword]);

//   return gifUrl;
// };
const useFetch=()=>{
  return(
    //<Tenor token="AIzaSyCgf02rth3g5zrbJWBfs82I3_7VdrnqAAM" onSelect={result => console.log(result)} />
    <img src="../../../images/transactionImage.jpeg" alt="maaf kardo web3 murdabaad"> </img>

  )
}
export default useFetch;
