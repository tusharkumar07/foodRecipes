import React, { useEffect, useState } from "react";
import Mealitem from './Mealitem.jsx';
import Recipe from "./Recipe.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
const Meal=()=>{
    const [url,seturl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setitem]=useState();
    const [show,showitem]=useState(false);
    const [search,setSearch]=useState("");
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            // console.log(data);
            setitem(data.meals);
            showitem(true )
        })
    },[url]);

    const setIndex=(alpha)=>{
        seturl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe=(e)=>{
            seturl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);  
    }
    return(
        <>
        <div className="main">
            <div className="heading">
                <h1>Search for the Food Recipe</h1>
            </div>
            <div className="searchbox">
                <input type="search" className="search" onChange={(val)=>{setSearch(val.target.value)}} placeholder="Enter First Letter of Recipe"></input>
                <button onClick={searchRecipe} className="btn btn-danger">Search</button>
            </div>
            <div className="container">
                
                {
                    show ? <Mealitem data={item}/> :"No Data Found" 
                }
            </div>
            <div className="recipeindex">
                <Recipe alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
        </div>

        </>
    )
}
export default Meal;