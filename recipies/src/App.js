import React,{useEffect,useState} from 'react'
import './App.css'
import Recipies from './Recipies'
const App =()=>{
  /*App key and Id */
  const APP_ID="39a5e8b0"
  const APP_KEY="adc161c0e5e95d29000eee518d45ce92"

  const [recipies,setRecipies]=useState([])
  const [search,setSearch]=useState("")
  const [query,setQuery]=useState('chicken')
  useEffect( ()=>{
getRecipies()
  },[query] )

  const getRecipies=async() =>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data=await response.json()
    setRecipies(data.hits)
  }
const updateSearch=e=>{
  setSearch(e.target.value)
}

const getSearch=e=>{
e.preventDefault()
setQuery(search)
}
return(
  <div className="App">
    <h1>Hello</h1>
    <form className="search-form" onSubmit={getSearch}>
      <input type="text" className="search-form" value={search} onChange={updateSearch}/>
      <button className="search-button">Search</button>
    </form>
    <div className="recipe">
      {recipies.map( recipe => <Recipies
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      ingredients={recipe.recipe.ingredients}
      image={recipe.recipe.image}
      /> )}
    </div>
  </div>
)
}
export default App