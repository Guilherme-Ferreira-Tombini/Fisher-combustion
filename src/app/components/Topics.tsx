import Image from "next/image";
import React from "react";

type TopicsProps = {
    image: string;
    text: string;
};

export default function Topics({image, text} : TopicsProps) {
    const paragraph = text.split('\n').map((word, index, array) => (
        <React.Fragment key={index}>
            {word}
            {index < array.length - 1 && <br />}
        </React.Fragment>
    ));
    return (
        <div className="flex flex-col justify-center p-4 items-center mobile:p-4 ">
           <div className="bg-[#C35A40] rounded-3xl p-4 w-full h-full grid grid-cols-1 justify-items-center">
              <Image 
                className="mt-5"
                src={image} 
                alt={"Image"} 
                width={90} height={90}/>

               <h5 className="text-center font-k2d text-[20px] m-5 mobile:text-[20px] mobile:p-3">
                  {paragraph}
               </h5>
           </div>
        </div>
    );
  }
  