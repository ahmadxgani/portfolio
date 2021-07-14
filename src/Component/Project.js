// import { ReactComponent as Computer } from "../Assets/computer.svg"

import { useEffect } from "react";

export default function Project() {
    useEffect(() => document.title = "My projects", [])

    return (
        <div className="absolute w-full h-full flex">
            <p className="m-auto">Project</p>
        </div>
    );
}
