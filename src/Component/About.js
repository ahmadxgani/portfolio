import { ReactComponent as Me } from "../Assets/me.svg"
import { ReactComponent as Js } from "../Assets/react.svg"

export default function About() {
    return (
        <div className="flex flex-col p-3 pt-0">
            <div className="flex justify-between pl-7">
                <div className="flex flex-col justify-center font-classic text-xl">
                    <p className="mt-4">
                        I’m a web developer with 15 y.o and 11 months of experience<br/>
                        starting in August 2020, at that time I was interested in seeing<br/>
                        my brother create a website, that's where I became interested in<br/>
                        becoming a web developer
                    </p>
                    <p className="mt-4">
                        and after a few months, I found a friend who I consider<br/>
                        to be a rival his name is arya, he makes me motivated and<br/>
                        enthusiastic in learning to be a web developer
                    </p>
                </div>
                <Me/>
            </div>

            <div className="flex justify-between">
                <Js/>
                <div className="flex flex-col justify-center font-classic text-xl pr-11">
                    <p className="mt-4">
                        also the programming language that I like right now is<br/>
                        javascript, because it's easy to understand unlike<br/>
                        women ^_^
                    </p>
                    <p className="mt-4">
                        I'm currently working on a project called fuchsinia,<br/>
                        this project contains an online store built by the nestjs<br/>
                        framework as the backend application and the reactjs<br/>
                        library as the frontend application
                    </p>
                    <p className="mt-4">I'm working on this project together with my friend, arya</p>
                    <a href="mailto:ahmadxgani01@gmail.com" className="text-center bg-primary text-gray-200 mt-10 p-1">Contact Me</a>
                </div>
            </div>
        </div>
    );
}
