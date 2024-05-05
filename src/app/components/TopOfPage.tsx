import Image from "next/image";
import FamilyCar from "../../../public/img/FamilyCar.png"

export default function TopOfPage() {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap">  
     <div className="w-[50%] grid grid-col-1 order-2 justify-items-center p-5 mobile:order-1 mobile:w-[75%]">
        <Image 
          src={FamilyCar} 
          width={430} 
          height={430} 
          quality={100}
          alt={"FamilyCar"}/>
      </div>    

      <div className=" w-[50%] p-1 flex flex-col justify-center items-center mobile:w-[100%] mobile:p-3 mobile:order-2">
        <div className="grid grid-rows-1 justify-items-center w-[100%] ml-9 mobile:ml-0 mobile:order-2">
          <h1 className=" text-[86.4px] text-justify leading-none w-[100%] mb-8 mobile:text-[70px] mobile:text-center">
              Duvidas sobre os gastos de consumo do seu veiculo?
          </h1>
          <h5 className="w-[100%] text-justify leading-none text-[35px] mobile:text-[33px] mobile:w-[90%] font-k2d">
              Neste site você pode calcular os valores do consumo do seu veiculo, podendo 
              também gerar um relatório do consumo e dos valores de gasto. 
          </h5>
        </div>
      </div>
     
    </div>
  );
}
