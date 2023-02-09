


export const postUserByEmail= async (userData) => {      //POST  //RETURN USER
    const url = "http://localhost:4000/users/create";
  
    try {
     // const token = await getAccessTokenSilently();
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      const data = await res.json();
      return data.data;
    } catch (error) {
    //  toast.error("Something went wrong");
    }
  };
  