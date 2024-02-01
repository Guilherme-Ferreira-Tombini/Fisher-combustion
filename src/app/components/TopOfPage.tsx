import Image from "next/image";
import FamilyCar from "../../../public/img/FamilyCar.png"

export default function TopOfPage() {
  return (
    <div className="grid grid-cols-2">      
      <div className="w-full h-full p-1 flex flex-col justify-center items-center">
        <div className="w-2 rounded-md h-[55%] absolute left-[0px] bg-white ml-[20px] mt-5"></div>
        <div className="grid-rows-1  w-[88%]">
          <h1 className=" text-[85.2px] text-justify leading-none w-[100%] mb-6">
              Duvidas sobre os gastos de consumo do seu veiculo?
          </h1>
          <h5 className="w-[100%] text-justify text-4xl">
              Neste site você pode calcular os valores do consumo do seu veiculo, podendo 
              também gerar um relatório do consumo e dos valores de gasto. 
          </h5>
        </div>

      </div>
      <div className="w-full h-full flex justify-center items-center p-5">
        <Image 
          src={FamilyCar} 
          width={470} 
          height={470} 
          quality={100}
          alt={"FamilyCar"}/>

      </div>
    </div>
  );
}
