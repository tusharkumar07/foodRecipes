import './App.css';
import React, { useEffect } from 'react';

function Header() {

    const getData=async ()=>{
        try{
            const data=await fetch('https://data.covid19india.org');
            console.log(data);
        }catch(err){
            console.log(err);
        }  
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <>
    <h3>Live Tracker</h3>
    <h1>Covid-19 Corona Virus Tracker</h1>
    </>
  );
}

export default Header;
