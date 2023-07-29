import React from "react";
const Recipe=({ alphaIndex})=>{
    const array=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","Y","Z"];
    var num=0;
    return(
        <>
        {array.map(item=>{
            return(
                <div className="numBox" key={num++} onClick={()=> alphaIndex(item)}>
                    <h2>{item}</h2>
                </div>
            )
        })}
        </>
    )
}
export default Recipe;