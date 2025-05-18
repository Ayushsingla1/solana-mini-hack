import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return <div className="flex w-screen justify-between text-white pt-5 items-center px-20">
        <div className="flex gap-x-20 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sender">Send</NavLink>
        </div>
        <div><WalletMultiButton/></div>
    </div>
}


export default Navbar;