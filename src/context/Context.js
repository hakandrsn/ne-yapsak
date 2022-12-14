import { createContext, useContext, useState } from "react";

const Context = createContext()
const ContextComp = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const value = {
        loading, setLoading
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
export default ContextComp
export function context() {
    return useContext(Context);
  }