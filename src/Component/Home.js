import { useEffect } from "react"
import { ReactComponent as Freelancer } from "../Assets/freelancer.svg"
import { ReactComponent as Me } from "../Assets/me.svg"
import { ReactComponent as Js } from "../Assets/react.svg"

const start = new Date(1596254354021)
const now = new Date()
const experience = Math.round((now - start) / (1000 * 60 * 60 * 24 * 30 * 12))

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
            Hello guys! I'm Gani,
            <br className="md:block hidden" /> Young Developer from ID.
            <br className="md:block hidden" /> I've been learning{" "}
            <small>
              <code>{"<code/>"}</code>
            </small>{" "}
            for {experience} year.
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
            I’m a web developer with 15 y.o and
            <br className="md:block hidden" /> {experience} year of experience starting in August
            <br className="md:block hidden" /> 2020, at that time I was interested in seeing
            <br className="md:block hidden" /> my brother create a website, that's where I became
            <br className="md:block hidden" /> interested in becoming a web developer
          </div>
          <div>
            and after a few months, I found a friend
            <br className="md:block hidden" /> who I consider to be a rival his name is arya,
            <br className="md:block hidden" /> he makes me motivated and enthusiastic in learning
            <br className="md:block hidden" /> to be a web developer
          </div>
        </div>
        <Me className="lg:self-end self-center w-56 h-47 lg:w-auto lg:h-auto" />
      </div>

      <div className="flex lg:flex-row flex-col justify-between pt-14">
        <Js className="lg:self-start self-center w-56 h-47 lg:w-auto lg:h-auto" />
        <div className="flex flex-col justify-center font-classic lg:text-lg md:text-base text-sm pr-11 gap-4">
          <div>
            also the programming language that
            <br className="md:block hidden" /> I like right now is javascript, because it's easy
            <br className="md:block hidden" /> to be understood not like when understanding women ^_^
          </div>
          <div>
            I'm currently working on a project
            <br className="md:block hidden" /> called <q>writer</q>, this project provides a feature
            <br className="md:block hidden" /> to write articles for users, and also this project
            <br className="md:block hidden" /> is built with nestjs framework as the backend application
            <br className="md:block hidden" /> and the nextjs framework as the frontend application
          </div>
          <a href="mailto:ahmadxgani01@gmail.com" className="lg:p-4 p-2 bg-primary text-gray-100 rounded-3xl self-center my-1">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
