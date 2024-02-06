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
        <div className="flex flex-col justify-center p-4 items-center">
           <div className="bg-[#C35A40] rounded-3xl p-4 w-full h-full grid grid-cols-1 justify-items-center items-center">
              <Image 
                className="mt-5"
                src={image} 
                alt={"Image"} 
                width={90} height={90}/>

               <h5 className="text-center text-[31px] p-6">
                  {paragraph}
               </h5>
           </div>
        </div>
    );
  }
  