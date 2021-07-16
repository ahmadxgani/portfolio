import { NavLink } from "react-router-dom"

export default function Navigation() {
  return (
    <div className="bg-transparent w-full p-6 z-10">
      <div className="flex justify-between items-center font-classic text-lg">
        <div className="flex justify-between w-36">
          <NavLink to="/about" activeClassName="font-semibold">
            About
          </NavLink>
          <NavLink to="/project" activeClassName="font-semibold">
            Project
          </NavLink>
        </div>
        <div className="flex justify-center flex-col text-center leading-none">
          <NavLink exact to="/" className="font-title" activeClassName="font-semibold">
            Ahmad Gani
          </NavLink>
          <small>
            <code>{"<Web Developer/>"}</code>
          </small>
        </div>
        <div>
          <NavLink to="/connect" activeClassName="font-semibold">
            Connect with me
          </NavLink>
        </div>
      </div>
    </div>
  )
}
