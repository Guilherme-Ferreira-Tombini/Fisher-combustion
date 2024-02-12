import SymbolForCalculations from "./SymbolForCalculations"

export default function Calculate(){
    return(
        <div className="grid grid-cols-1 justify-items-center mt-10 bg-[#C35A40] w-[83%] p-6 rounded-2xl">
            <h1 className="flex flex-col justify-center items-center leading-none text-[113px]">
                Calculos
            </h1>
            <SymbolForCalculations/>
            <div className="w-[70%] p-5 mt-3 font-abel">
               <input 
                 className="rounded-lg w-full text-center text-xl placeholder-[#4C4C4C] text-black p-1" 
                 type="text" id="QuilometroPorLitro" 
                 placeholder="Quantos KM seu veiculo anda com 1 litro de combustivel?"/>
                 <input 
                 className="rounded-lg w-full text-center text-xl placeholder-[#4C4C4C] text-black p-1 mt-5" 
                 type="text" id="TanqueTotal" 
                 placeholder="Quantos litros o tanque de combustivel suporta de combustivel?"/>
            </div>
            <div className="w-[250px] flex flex-row justify-between items-center mt-4 font-abel">
                <input
                  className="bg-[#8F4330] rounded-lg pr-3 pl-3 pt-3 pb-2  w-[110px] text-2xl" 
                  type="button" 
                  value="Calcular" />
                <input
                  className="bg-[#920707] rounded-lg pr-3 pl-3 pt-3 pb-2  w-[110px] text-2xl" 
                  type="button"
                  value="Limpar" />
            </div>
        </div>
    );
}