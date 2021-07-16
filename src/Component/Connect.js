import { useEffect } from "react"
import { ReactComponent as Blobs } from "../Assets/blobs.svg"
import { ReactComponent as Ig } from "../Assets/ig.svg"
import { ReactComponent as LinkedIn } from "../Assets/linkedin.svg"
import { ReactComponent as Kotakode } from "../Assets/kotakode.svg"
import { ReactComponent as Telegram } from "../Assets/telegram.svg"
import { ReactComponent as Dc } from "../Assets/dc.svg"
import { ReactComponent as Fb } from "../Assets/fb.svg"
import { ReactComponent as Twitter } from "../Assets/twitter.svg"
import { ReactComponent as Github } from "../Assets/github.svg"
import { ReactComponent as Gmail } from "../Assets/gmail.svg"

export default function Connect() {
  useEffect(() => (document.title = "Connect with me"), [])

  return (
    <div className="flex flex-wrap pt-6 text-lg font-classic w-11/12 mx-auto justify-center">
      <div className="flex">
        <Blobs />
        <div className="flex flex-col text-center items-center relative right-44 top-7">
          <Ig className="mt-1" />
          <a href="https://instagram.com/query.gani" className="p-3 bg-primary text-gray-100 rounded-2xl mt-11" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <div className="flex">
        <Blobs />
        <div className="flex flex-col text-center items-center relative right-40 top-7">
          <LinkedIn className="mt-1" />
          <a href="https://linkedin.com/in/ahmad-gani-70606b215/" className="p-3 bg-primary text-gray-100 rounded-2xl mt-11" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex">
        <Blobs />
        <div className="flex flex-col text-center items-center relative right-44 top-7">
          <Kotakode className="mt-1" />
          <a href="https://kotakode.com/users/1024/megumin" className="p-3 bg-primary text-gray-100 rounded-2xl mt-11" target="_blank" rel="noreferrer">
            Kotakode
          </a>
        </div>
      </div>
      <div className="flex mt-12">
        <Blobs />
        <div className="flex flex-col text-center items-center relative right-44 top-7">
          <Telegram className="mt-1" />
          <a href="https://t.me/shinigamID" className="p-3 bg-primary text-gray-100 rounded-2xl mt-11" target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </div>
      <div className="flex mt-12">
        <Blobs />
        <div className="flex flex-col text-center items-center relative right-40 top-7">
          <Dc className="mt-1" />
          <a href="https://discord.com/users/610465246561435668" className="p-3 bg-primary text-gray-100 rounded-2xl mt-11" target="_blank" rel="noreferrer">
            Discord
          </a>
        </div>
      </div>
      <div className="flex mt-12">
        <Blobs />
        <div className="flex flex-col text-center items-center relative right-44 top-7">
          <Fb className="mt-1" />
          <a href="https://facebook.com/gani.ahmad.35728" className="p-3 bg-primary text-gray-100 rounded-2xl mt-11" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>
      <div className="flex mt-12">
        <Blobs />
        <div className="flex flex-col text-center items-center relative right-40 top-7">
          <Twitter className="mt-1" />
          <a href="https://twitter.com/QueryGani" className="p-3 bg-primary text-gray-100 rounded-2xl mt-11" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </div>
      <div className="flex mt-12">
        <Blobs />
        <div className="flex flex-col text-center items-center relative right-40 top-7">
          <Github className="mt-1" />
          <a href="https://github.com/query-gani" className="p-3 bg-primary text-gray-100 rounded-2xl mt-11" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
      <div className="flex mt-12">
        <Blobs />
        <div className="flex flex-col text-center items-center relative right-40 top-7">
          <Gmail className="mt-1" />
          <a href="mailto:ahmadxgani01@gmail.com" className="p-3 bg-primary text-gray-100 rounded-2xl mt-11" target="_blank" rel="noreferrer">
            Gmail
          </a>
        </div>
      </div>
    </div>
  )
}
