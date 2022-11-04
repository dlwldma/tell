import axios from "axios";

const getData = async () =>{
    //DEVELOPMENT
    /* const response = await axios.get('http://localhost:4000/api'); */

    //DEPLOYMENT
    const response = await axios.get('https://tell-app.herokuapp.com/api');
    const data = await response.data;
    return data;
} 

export default getData;