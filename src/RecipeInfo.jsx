import React, { useState } from "react";
import { useParams } from "react-router-dom";
var Vid;
const RecipeInfo=()=>{
    const [item,setitem]=useState();
    const {MealId}=useParams();
    if(MealId!=""){
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`).then(res=>res.json()).then((data)=>{
            setitem(data.meals[0])
        })
    }
    if(item){
        const url=item.strYoutube;
        const str=url.split("=")
        Vid=str[str.length-1];
    }
    return(
        <>
            {
                (!item)?"":(<>
                    <div className="content">
                        <img src={item.strMealThumb} />
                        <div className="innerContent">
                            <h3>{item.strMeal}</h3>
                            <h4>{item.strArea}</h4>
                            <h4>Category :{item.strCategory}</h4>
                        </div>
                    </div>
                    <div className="impContent">
                        <div className="integrents">
                            <h2>Integrents</h2>
                            <h4>{item.strIngredient1} {item.strMeasure1}</h4>
                            <h4>{item.strIngredient2} {item.strMeasure2}</h4>
                            <h4>{item.strIngredient3} {item.strMeasure3}</h4>
                            <h4>{item.strIngredient4} {item.strMeasure4}</h4>
                            <h4>{item.strIngredient5} {item.strMeasure5}</h4>
                            <h4>{item.strIngredient6} {item.strMeasure6}</h4>
                            <h4>{item.strIngredient7} {item.strMeasure7}</h4>
                            <h4>{item.strIngredient8} {item.strMeasure8}</h4>
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2>
                            <h4>{item.strInstructions}</h4>
                        </div>
                    </div>
                    <div className="video">
                            <iframe src={`https:/www.youtube.com/embed/${Vid}`}></iframe>
                    </div>
                </>)
            }
        </>
    )
}
export default RecipeInfo;