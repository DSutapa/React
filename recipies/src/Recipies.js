import React from 'react'
import style from './recipe.module.css'
const Recipies =({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
    <p>{calories}</p>
    <ol>
        {ingredients.map(ingredient=> 
         <li>{ingredient.text}</li> 
         )}
    </ol>
            <img src={image} alt=""/>
            
        </div>
    )
}
export default Recipies