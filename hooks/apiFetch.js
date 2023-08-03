import {useState, useEffect} from 'react';
const apiFetch = (category) =>{
    const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = `https://www.freetogame.com/api/games?category=${category}`;

makeRequest= async()=>{
setIsLoading(true);
try {
	const response = await fetch(url);
	const result = await response.json();
    setData(result)
	setIsLoading(false);
} catch (error) {
    setError(error);
	console.error(error);
    return null;
}
}
makeRequest();
return {data,isLoading,error};
}
export default apiFetch;