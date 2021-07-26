import { NavLink } from "react-router-dom"

export default function Navigation() {
  return (
    <div className="bg-transparent w-full p-5 z-10 border-b">
      <div className="flex justify-between items-center text-lg font-title">
        <NavLink exact to="/" activeClassName="font-semibold">
          Homepage
        </NavLink>
        <div className="flex justify-between gap-5">
          <NavLink to="/cv" activeClassName="font-semibold">
            My CV
          </NavLink>
          <NavLink to="/contact" activeClassName="font-semibold">
            Contact me
          </NavLink>
        </div>
      </div>
    </div>
  )
}
