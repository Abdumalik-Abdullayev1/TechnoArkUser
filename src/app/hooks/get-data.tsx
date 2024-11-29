"use client"
import { useState, useEffect } from 'react';


interface ApiResponse {
  status: string;
  data:any;
}

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async ():Promise<void> => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result: ApiResponse = await response.json();
        setData(result.data);

      } catch (error:any) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };


    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
