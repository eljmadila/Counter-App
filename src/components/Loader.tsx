import { Loader2 } from "lucide-react"

function Loader({ text = "Loading Quiz..." }: { text?: string }) {
  return (
    <div className="loaderContainer">
      <Loader2 className="spinner" size={40} />
      <p className="loaderText">{text}</p>
    </div>
  )
}

export default Loader
