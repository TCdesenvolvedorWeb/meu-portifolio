import { createContext , useState} from "react";

const IconContext = createContext()

const IconProvider = (props) => {
    const [currentIcon, setCurrentIcon] = useState("darck");

    return(
        <IconContext.Provider value={{currentIcon , setCurrentIcon}}>
            {props.children}
        </IconContext.Provider>
    )
}

export { IconContext , IconProvider }