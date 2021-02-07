
import React from "react"
import {ReactComponent as PolandIcon} from "../images/poland.svg"
import {ReactComponent as UKIcon} from "../images/united-kingdom.svg"

const Header = () => {
    return (
        <div className="w-10/12 py-8 m-auto flex flex-row justify-between items-center">
            <div className="flex">
                <p className="tracking-wide text-xl text-white font-bold">Hi!</p>
                {/* <img src="#" alt="Hi"/> */}
            </div>
            {/* <PolandIcon /> */}
            <UKIcon />
        </div>
    )
}

export default Header
