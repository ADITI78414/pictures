import axios from 'axios' 

const searchImage = async(term)=> {
    const url = 'htpps://api.unsplash.com/search/photos/?client_id=LseRoDICX1UwB3R8STLPdyrmLCFsAhoNwyGU_TP9vaE'
    const response = await axios.get(url,{
        params:{
            query: term
        }
    })
    console.log(term)
    console.log(response.data.results)
    //console.log(response)
    
    return response.data.results
}

export default searchImage