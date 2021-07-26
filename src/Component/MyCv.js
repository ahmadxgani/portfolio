import { useEffect } from "react"

export default function Project() {
  useEffect(() => (document.title = "My portfolio | CV"), [])

  return (
    <div className="absolute w-full h-full flex">
      <p className="m-auto text-center">
        Halaman Belum jadi <br />{" "}
        <q>
          <small>mohon maaf bila website tidak responsive, karna masih dalam tahap pengembangan</small>
        </q>
      </p>
    </div>
  )
}
