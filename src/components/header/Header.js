import { HiFingerPrint } from "react-icons/hi"
export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between bg-blue-500 text-white font-bold">
      <div className="flex gap-4 pl-5 py-3 items-center">
        <HiFingerPrint />
        <h1>Definitely Real Business</h1>
      </div>
      <div className="flex gap-4 pr-5 py-3">
        <p>Random Fact</p>
        <p>Excuse Generator</p>
        <p>Login</p>
      </div>
    </div>
  )
}