import {useReducer, createContext} from "react"
import reducer from "./reducer"
import { DECREMENT, INCREMENT } from "./types";

const initstate = {count:0};
export const  CountContext = createContext(initstate)


export const CountContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initstate);
    const countIncrement = ()=> dispatch({type: INCREMENT});
    const countDecrement = ()=> dispatch({type: DECREMENT});
return <CountContext.Provider value={{count: state.count, countDecrement, countIncrement}} >
    {children}
</CountContext.Provider>
    
} 