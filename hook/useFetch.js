import { useState, useEffect } from 'react'
import axios from 'axios'

//const rapidApiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY;
const rapidApiKey = 'test';


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://map-places.p.rapidapi.com/${endpoint}/json`,
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'map-places.p.rapidapi.com'
        },
        params: { ...query },
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request
            (options);

            setData(response.data.results);
            setIsLoading(false);
        } catch(error) {
            setError(error);
            alert('There is an error');
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return { data, isLoading, error, refetch};
}

export default useFetch;
