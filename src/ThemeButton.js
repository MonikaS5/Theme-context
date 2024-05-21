import React from "react";
import { useTheme } from "./ThemeContext";

 const ThemeButton=()=>{
    const{theme, toggleTheme}= useTheme();

    return(
        <>
        <div>
        <button onClick={() => toggleTheme()}  style={{background:theme==='light'? 'white': 'black',
                                color:theme=== 'light'? 'black': 'white',
                                width: '100px', height: '50px'
                                }}> Toggle Theme</button>
        </div>
        
        </>
    )

}

export default ThemeButton