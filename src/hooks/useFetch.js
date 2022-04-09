import { useState, useEffect } from "react";
function useFetch(url, initialdata = []) {
  const [data, setData] = useState(initialdata);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setError("Something went wrong!");
          setLoading(false);
        }else{
            return response.json();
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
