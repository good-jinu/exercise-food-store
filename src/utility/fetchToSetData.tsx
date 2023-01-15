function fetchToSetData<T>(baseURL: string, setData: (data: T)=>void) {
  fetch(baseURL)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(baseURL);
    }
  })
  .then(data => {
    setData(data as T);
  })
  .catch(error => {
    console.error(error);
  });
}

export default fetchToSetData;