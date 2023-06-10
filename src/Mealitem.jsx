import React from "react";
import { useNavigate } from "react-router-dom";
const Mealitem=({data})=>{
    var Navigate=useNavigate();
    return(
    <>
        {
        (!data)?"Not found" : data.map(item=>{
            return(
                <div className="card" key={item.idMeal} onClick={()=>Navigate(`/${item.idMeal}`)}>
                    <img src={item.strMealThumb} />
                    <h3>{item.strMeal}</h3>
                </div>
            )
            
        })
        }
            
     </>
    )
}
export default Mealitem;