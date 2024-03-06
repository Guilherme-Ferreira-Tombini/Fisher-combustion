"use client"
export default function DataReport(props:any){
    return(
        <div className="bg-[#C35A40] rounded-lg p-3 mt-16 w-[83%] grid grid-cols-1 justify-items-center">
            <h1 className="flex flex-col justify-center items-center leading-none text-[120px] mb-6">
                RELATÓRIO
            </h1>
            <div className="w-[90%] grid grid-cols-2">
                <div className="flex flex-col justify-items-start">
                    <span className="text-justify text-[45px] text-bold">
                        Com o tanque cheio o carro percorre:
                    </span>
                    <span className="text-[45px] mt-[-20px] text-normal">
                        {" "+props.KMLValue} KM
                    </span>

                    <span className="text-justify text-[45px] text-bold">

                    </span>
                    <span className="text-[45px] mt-[-20px] text-normal">
                        
                    </span>

                </div>

                <div className=" grid grid-cols-1 justify-items-center">
                    
                </div>
            </div>

        </div>
    )
}