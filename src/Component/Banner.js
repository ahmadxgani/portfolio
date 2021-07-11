// main bg-color #4137ff
// main bg-color-2 #06d6a0
// main color black
import { ReactComponent as Freelancer } from "../Assets/freelancer.svg"

export default function Banner() {
    return (
        <div className="flex justify-between pt-24">
            <div>
                <div className="relative left-16 font-classic text-3xl top-36">
                    <h1>Hello guys!<br/>I'm Gani, Young Web Dev from ID<br/>I've been learning <small><code>{"<code/>"}</code></small> for 11 months</h1>
                </div>
            </div>
            <div>
                <Freelancer />
            </div>
        </div>
    );
}
