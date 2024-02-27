"use client"
export default function DataReport(props:any){
    return(
        <div className="bg-[#C35A40] rounded-lg p-3 mt-16 w-[83%] grid grid-cols-1 justify-items-center">
            <h1 className="flex flex-col justify-center items-center leading-none text-[120px] mb-9">
                RELATÓRIO
            </h1>
            <div className="w-[90%] grid grid-cols-2">
                <div className="h-16">
                    <span className=" text-justify text-[45px] text-bold">
                        Com o tanque cheio o carro percorre:
                    </span>
                    <span>
                        {}
                    </span>

                </div>

                <div className="h-16 grid grid-cols-1 justify-items-center">
                    
                </div>
            </div>

        </div>
    )
}