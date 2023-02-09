export const getMemes = async () => {
  //GET
  try {
    //
    const url = `http://localhost:4000/memes/`;

    const resp = await fetch(url);
    const apiData = await resp.json();
    console.log(apiData.data);
    return apiData.data;
  } catch (error) {
    console.log("Algo fallo en la api");
  }
};

export const searchMemes = async (query) => {
  //GET
  try {
    const url = `http://localhost:4000/memes/search?title=${query}`;

    const resp = await fetch(url);
    const apiData = await resp.json();
    console.log(apiData.data);
    return apiData.data;
  } catch (error) {
    console.log("Algo fallo en la api");
  }
};

export const getMemeById = async (id) => {
  //GET
  try {
    const url = `http://localhost:4000/memes/${id}`;

    const resp = await fetch(url);
    const apiData = await resp.json();
    console.log(apiData);
    return apiData.data;
  } catch (error) {
    console.log("Algo fallo en la api");
  }
};
