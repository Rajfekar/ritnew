"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
type Props = {}

const page = (props: Props) => {
  const images: string[] = [
    "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    " https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
  ]
  const componentRef: any = useRef(null)
  const [lastScrollValue, setLastScrollValue] = useState(0)

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = componentRef.current
    if (scrollLeft === scrollWidth - clientWidth) {
      setLastScrollValue(scrollLeft)
      componentRef.current.scrollTo({ left: 0 })
    } else {
      setLastScrollValue(scrollLeft)
    }
    // console.log(lastScrollValue)
  }
  return (
    <div>
      <div className="h-screen w-screen">
        <div className="slider-container w-screen h-[50rem]">
          <div
            ref={componentRef}
            onScroll={handleScroll}
            className="flex overflow-y-scroll m-1 scrollbar-hide mt-12"
          >
            {images.map((image: string, i: number) => (
              <>
                <Image
                  key={i}
                  width={1000}
                  height={1000}
                  className="cursor-pointer m-2 p-2 w-96 h-72  border-4 border-cyan-500 hover:shadow-custom hover:w-[25rem] hover:h-[19rem]"
                  src={image}
                  alt={`${i}`}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
