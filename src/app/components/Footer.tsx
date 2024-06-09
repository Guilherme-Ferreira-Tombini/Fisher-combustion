"use client"
import Image from "next/image"

export default function Footer(){
    return(
        <div className="w-[100%] p-10 grid grid-cols-1 justify-items-center bg-[#8E4837] mt-[200px]" id="footer">
            <div className="rounded-full bg-[#C35A40] w-[70px] h-[70px] flex flex-col justify-center items-center hoverButton" id="seta">
                <a href="#container">
                    <Image 
                        src={"/img/Arrow 1.png"} 
                        alt={"seta"} 
                        width={30} 
                        height={30}/>
                </a>
            </div>
        </div>
    )
}