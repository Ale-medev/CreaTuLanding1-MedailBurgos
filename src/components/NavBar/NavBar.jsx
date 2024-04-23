
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo-pos.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <header className="fixed flex justify-between items-center w-full px-[var(--assets-axis-x)] py-8 backdrop-blur-sm bg-black/60 border-b-slate-900 border-b-0 z-10">
            <div className="flex-grow basis-0">
                <img src={logo} className="w-16" alt="Logo" />
            </div>

            <div>
                <nav>
                    <ul className="flex gap-10 text-sm font-medium text-white">
                        <li><Link className="hover:text-gray-600" to='/'>Todos</Link></li>
                        <li><Link className="hover:text-gray-600" to='/category/Paranormal'>Paranormal</Link></li>
                        <li><Link className="hover:text-gray-600" to='/category/Slasher'>Slasher</Link></li>
                        <li><Link className="hover:text-gray-600" to='/category/Sobrenatural'>Sobrenatural</Link></li>
                        <li><Link className="hover:text-gray-600" to='/category/Ciencia-ficcion'>Ciencia ficción</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="flex flex-grow basis-0 justify-end">
                <CartWidget />
            </div>
        </header>
    )
}