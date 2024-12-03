/*Exporterar asynkrona funktioner: en för att hämta API-nyckeln och en för att hämta planetdata med nyckeln.*/
 
export const getApiKey = async () => {
    const url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys";
  
    const options = {
      method: "POST",
    };
  
    try {
      const response = await fetch(url, options);
      const apiData = await response.json();
  
      console.log("This is your API-key:", apiData.key);
  
      return apiData.key
    } catch (error) {
      console.error("Error fetching the API-key:", error);
    }
  };
  export const getPlanet = async (key) => {
    const url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies";
  
    const options = {
      method: "GET",
      headers: {
        "x-zocom": key,
      },
    };
  
    try {
      const response = await fetch(url, options);
      const planetData = await response.json();
  
      console.log("Planets:", planetData);
  
      return planetData;
    } catch (error) {
      console.error("Error catching the planets:", error);
    }
  };