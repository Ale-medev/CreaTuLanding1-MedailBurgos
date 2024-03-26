
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo-pos.svg";

export default function Navbar() {
    return(
        <header className="fixed flex justify-between items-center w-full px-[var(--assets-axis-x)] py-8">
            <div className="flex-grow basis-0">
                <img src={logo} className="w-16" alt="Logo" />
            </div>

            <div>
                <nav>
                    <ul className="flex gap-10 text-sm font-medium text-black">
                        <li><a className=" hover:text-gray-600" href="">Item 1</a></li>
                        <li><a className=" hover:text-gray-600" href="">Item 2</a></li>
                        <li><a className=" hover:text-gray-600" href="">Item 3</a></li>
                        <li><a className=" hover:text-gray-600" href="">Item 4</a></li>
                    </ul>
                </nav>
            </div>

            <div className="flex flex-grow basis-0 justify-end">
                <CartWidget />
            </div>
        </header>
    )
}