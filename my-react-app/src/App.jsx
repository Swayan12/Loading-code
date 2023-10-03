import React, { useEffect, useState } from 'react';
import RingLoader from "react-spinners/RingLoader";

const App = () => {
  
  const [load,setload]=useState(false);
  useEffect(()=>{
    setload(true)
    setTimeout(()=>{
      setload(false)
    },10000)
  },[])
   return (
    <div className='spin'>
  {load ? (<RingLoader
            size={50}
            color='blue'
            loading={load}
            />
            ):(<h1>Done!</h1>)
  
  }
   </div>
  );
};

export default App;