import { createContext, useEffect, useState,useContext } from "react";
import axios from "axios";
const Context=createContext();
export const useUserContext=()=>(
    useContext(Context)
)
function UseContextProvider({children}){
    const [userdata,setuser]=useState(null)
    
    const getCurrentUser=async()=>{
        try {
              const result=await axios.post('http://localhost:3000/api/user/current_admin',{}, { withCredentials: true });
        setuser(result.data.user);
        console.log("result is",result.data)
        } catch (error) {
            setuser(null);
            console.log("error is in current user ",error)
        }
      


    }
    let value={userdata,setuser}
    useEffect(()=>{
        getCurrentUser()
    },[])
    return(<Context.Provider value={value}>
        {children}
    </Context.Provider>)
}
export default UseContextProvider