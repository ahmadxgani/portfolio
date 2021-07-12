import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="bg-transparent w-full p-5 z-10">
            <div className="flex justify-between items-center font-classic">
                <div className="flex justify-between w-32">
                    <NavLink to="/about" activeClassName="font-bold">About</NavLink>
                    <NavLink to="/project" activeClassName="font-bold">Project</NavLink>
                </div>
                <div className="flex justify-center flex-col text-center">
                    <NavLink exact to="/" className="font-title" activeClassName="font-bold">Ahmad Gani</NavLink>
                    <small><code>{"<Web Developer/>"}</code></small>
                </div>
                <div className="flex justify-center w-32">
                    <NavLink to="/connect" activeClassName="font-bold">Connect</NavLink>
                </div>
            </div>
        </div>
    )
}