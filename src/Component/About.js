import { useEffect } from "react";
import { ReactComponent as Me } from "../Assets/me.svg"
import { ReactComponent as Js } from "../Assets/react.svg"

export default function About() {
    useEffect(() => document.title = "About me", [])

    return (
        <div className="flex flex-col px-12 pt-6 mb-24">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center font-classic text-lg">
                    <p className="mt-4">
                        I’m a web developer with 15 y.o and<br/>
                        11 months of experience starting in August<br/>
                        2020, at that time I was interested in seeing<br/>
                        my brother create a website, that's where I became<br/>
                        interested in becoming a web developer
                    </p>
                    <p className="mt-4">
                        and after a few months, I found a friend<br/>
                        who I consider to be a rival his name is arya,<br/>
                        he makes me motivated and enthusiastic in learning<br/>
                        to be a web developer
                    </p>
                </div>
                <Me className="self-end"/>
            </div>

            <div className="flex justify-between pt-14">
                <Js/>
                <div className="flex flex-col justify-center font-classic text-lg pr-11">
                    <p className="mt-4">
                        also the programming language that<br/>
                        I like right now is javascript, because it's easy<br/>
                        to understand unlike women ^_^
                    </p>
                    <p className="mt-4">
                        I'm currently working on a project<br/>
                        called fuchsinia, this project contains<br/>
                        an online store built by the nestjs framework<br/>
                        as the backend application and the reactjs library<br/>
                        as the frontend application
                    </p>
                    <p className="mt-4">I'm working on this project together with my friend, arya</p>
                    <a href="mailto:ahmadxgani01@gmail.com" className="p-4 top-14 relative bg-primary text-gray-100 rounded-3xl self-center">Contact Me</a>
                </div>
            </div>
        </div>
    );
}
