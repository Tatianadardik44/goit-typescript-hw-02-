import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos"
export const fetchFoto = async (searchQuery, page) => {
    const {data} = await axios.get("?client_id=Po6fqCExOLsJ5ZjyMwsZPzLIFjFYvTlCkoi56V_M-Rw",
        {
            params: {
          query: searchQuery,
            per_page: 21,
            page: page 
        }}
    )
  
    return data.results; 
}