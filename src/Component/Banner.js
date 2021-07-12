// main bg-color #4137ff
// main bg-color-2 #06d6a0
// main color black
import { useEffect } from "react";
import { ReactComponent as Freelancer } from "../Assets/freelancer.svg"

export default function Banner() {
    useEffect(() => document.body.style.overflow = "hidden", [])
    useEffect(() => () => document.body.style.overflow = "auto", [])
    return (
        <div className="flex justify-center pt-6 px-10">
            <div>
                <div className="relative -left-5 font-classic text-2xl top-36">
                    <h1>Hello guys!<br/>I'm Gani, Young Developer from ID<br/>I've been learning <small><code>{"<code/>"}</code></small> for 11 months</h1>
                    <a href="mailto:ahmadxgani01@gmail.com" className="p-1 top-14 relative bg-primary rounded text-white">Hire me</a>
                </div>
            </div>
            <div>
                <Freelancer />
            </div>
        </div>
    );
}
