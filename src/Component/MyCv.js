import { useEffect } from "react"

export default function Project() {
  useEffect(() => (document.title = "My projects"), [])

  return (
    <div className="absolute w-full h-full flex">
      <p className="m-auto">My CV Page</p>
    </div>
  )
}
