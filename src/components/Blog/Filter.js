import "./Blog.css";
import { useState } from 'react';
import { useEffect } from "react";

function Filter(props) {

    const [filterClass, setFilterClass] = useState("filter-item");
  
    const setColor = () => {
     setFilterClass("active-filter--click");
  }

   useEffect(() => { 
    if(props.filterName === "All") {
      setFilterClass("active-filter--click");
   }
  });

  return (
    <>
        <span onClick={setColor} className={filterClass}>{props.filterName}</span>
    </>
  )
}

export default Filter