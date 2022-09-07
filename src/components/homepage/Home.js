import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useRef } from "react";

export default function Home() {
  const ref = useRef();
  return (
    <Parallax pages={3} ref={ref}>
      <ParallaxLayer offset={0} speed={2.5}>
        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 bg-screen h-screen justify-center items-center flex">
          <h1 className="text-7xl italic font-bold text-white">Definitely a Real Business</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1}>
        <div className="bg-gradient-to-br from-blue-500 to-indigo-500 bg-screen h-screen justify-center items-center flex">
          <h1 className="text-7xl italic font-bold text-white">Look at all our real employees</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={2}>
        <div className="bg-gradient-to-br from-indigo-500 to-violet-500 bg-screen h-screen justify-center items-center flex">
          <h1 className="text-7xl italic font-bold text-white">And our very real motto</h1>
        </div>
      </ParallaxLayer>
    </Parallax>

  )
}