import { useEffect } from "react"
import { ReactComponent as Freelancer } from "../Assets/freelancer.svg"
import { ReactComponent as Me } from "../Assets/me.svg"
import { ReactComponent as Js } from "../Assets/react.svg"

export default function Home() {
  useEffect(() => {
    document.title = "My portfolio | Home page"
  }, [])

  return (
    <div className="flex flex-col p-10 gap-5">
      <Banner />
      <About />
    </div>
  )
}

function Banner() {
  return (
    <div className="flex lg:flex-row md:gap-0 gap-5 flex-col-reverse justify-between border-b pb-1">
      <div className="self-center">
        <div className="font-classic lg:text-2xl md:text-xl text-lg">
          <h1>
            Hello guys!
            <br />
            I'm Gani, Young Developer from ID
            <br />
            I've been learning{" "}
            <small>
              <code>{"<code/>"}</code>
            </small>{" "}
            for 11 months
          </h1>
          <a href="mailto:ahmadxgani01@gmail.com" className="lg:p-4 p-2 lg:mt-14 mt-5 inline-block bg-primary text-gray-100 rounded-3xl">
            Hire me
          </a>
        </div>
      </div>
      <div className="lg:self-auto self-center">
        <Freelancer className="w-56 h-46 lg:w-auto lg:h-auto" />
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="border-b pb-1">
      <div className="flex lg:border-b-0 lg:pb-0 border-b pb-1 lg:flex-row flex-col-reverse justify-between">
        <div className="flex flex-col justify-center font-classic lg:text-lg md:text-base text-sm gap-4">
          <div>
            <p className="md:block inline">I’m a web developer with 15 y.o and</p>
            <p className="md:block inline">11 months of experience starting in August</p>
            <p className="md:block inline">2020, at that time I was interested in seeing</p>
            <p className="md:block inline">my brother create a website, that's where I became</p>
            <p className="md:block inline">interested in becoming a web developer</p>
          </div>
          <div>
            <p className="md:block inline">and after a few months, I found a friend</p>
            <p className="md:block inline">who I consider to be a rival his name is arya,</p>
            <p className="md:block inline">he makes me motivated and enthusiastic in learning</p>
            <p className="md:block inline">to be a web developer</p>
          </div>
        </div>
        <Me className="lg:self-end self-center w-56 h-47 lg:w-auto lg:h-auto" />
      </div>

      <div className="flex lg:flex-row flex-col justify-between pt-14">
        <Js className="lg:self-start self-center w-56 h-47 lg:w-auto lg:h-auto" />
        <div className="flex flex-col justify-center font-classic lg:text-lg md:text-base text-sm pr-11 gap-4">
          <div>
            <p className="md:block inline">also the programming language that</p>
            <p className="md:block inline">I like right now is javascript, because it's easy</p>
            <p className="md:block inline">to understand unlike women ^_^</p>
          </div>
          <div>
            <p className="md:block inline">I'm currently working on a project</p>
            <p className="md:block inline">called fuchsinia, this project contains</p>
            <p className="md:block inline">an online store built by the nestjs framework</p>
            <p className="md:block inline">as the backend application and the reactjs library</p>
            <p className="md:block inline">as the frontend application</p>
          </div>
          <p className="md:block inline">I'm working on this project together with my friend, arya</p>
          <a href="mailto:ahmadxgani01@gmail.com" className="lg:p-4 p-2 bg-primary text-gray-100 rounded-3xl self-center my-1">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
