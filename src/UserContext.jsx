import { createContext ,useState} from "react"; 

let UserContext = createContext()

export const UserProvider = ({children}) => {
    const [Username,setUsername] = useState("Kalangiam");
    return <UserContext.Provider value={{Username,setUsername}}>
        {children}
    </UserContext.Provider>
}

export default UserContext