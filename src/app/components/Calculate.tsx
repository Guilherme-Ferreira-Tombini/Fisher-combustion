"use client"
import React, { useState } from "react";
import Image from "next/image";
import DataReport from "./DataReport";
import ToastMessage from "./ToastMessage";

export default function Calculate(){
    const [quilometroPorLitro, setQuilometroPorLitro] = useState("");
    const [tanqueTotal, setTanqueTotal] = useState("");
    const [combustivel, setCombustivel] = useState("");
    const [distancia, setDistancia] = useState("");
    const [distCerto, setDistCerto] = useState<number>(0.0);
    const [combustivelUsado, setCombustivelUsado] = useState("");

    const [KM_percorre, setKM_percorre] = useState<number>(0.0);
    const [gasto_tanque_total, setGasto_tanque_total] = useState<number>(0.0);
    const [vezes_abastecido, setVezes_abastecido] = useState<number>(0);
    const [resultCO2, setresultCO2] = useState<number>(0);

    function func_CO2(combustivelUsado: string, campKMLValue: number, vezes_abastecido:number, campTTValue:number){
        const fatoresEmissao:{ [key: string]: number } = {
          "Gasolina": 2.3,
          "Diesel": 3.2,
          "Etanol": 1.45
        };
    
        if(combustivelUsado in fatoresEmissao) {
            const resultado = (campTTValue * vezes_abastecido) * fatoresEmissao[combustivelUsado];
            setresultCO2(Math.ceil(resultado));
        }
    }

    function calculate() {
        let campKMLValue = parseFloat(quilometroPorLitro);
        let campTTValue = parseFloat(tanqueTotal);
        let campTCValue = parseFloat(combustivel);
        let distancia_percorrer = parseFloat(distancia);

        if (isNaN(campKMLValue) || isNaN(campTTValue) ||  isNaN(campTCValue) || isNaN(distancia_percorrer) || combustivelUsado == "") {
            ToastMessage({ 
              icone: 'warning', 
              text: 'Insira os dados nos campos!' 
            });
            return;
        }else{
            setKM_percorre(Math.round(campTTValue * campKMLValue));
            let gasto = campTCValue * campTTValue;
            setGasto_tanque_total(Math.floor(gasto));

            let conta = distancia_percorrer / campKMLValue;
            let vezesAbastecido = conta/campTTValue;
            setVezes_abastecido(Math.ceil(vezesAbastecido));

            func_CO2(combustivelUsado, campKMLValue, vezesAbastecido, campTTValue);
            setDistCerto(distancia_percorrer);

            ToastMessage({ 
              icone: 'success', 
              text: 'Calculos realizados com sucesso!' 
            });
            return;
        }
    }

    function clear(){
       setQuilometroPorLitro("");
       setTanqueTotal("");
       setCombustivel("");
       setDistancia("");
       setDistCerto(0);
       setCombustivelUsado("");

       setVezes_abastecido(0);
       setKM_percorre(0);
       setGasto_tanque_total(0);
       setresultCO2(0);
       
       ToastMessage({ 
         icone: 'success', 
         text: 'Campos limpos com sucesso!' 
       });
       return;
    }

    return(
      <>
        <div className="grid grid-cols-1 justify-items-center mt-10 bg-[#C35A40] w-[83%] p-6 rounded-2xl principal">
            <h1 className="flex flex-col justify-center items-center leading-none text-[90px] mb-1 mobile:text-[75px]">
                CALCULOS
            </h1>
            <Image 
              src={"/img/Symbol.png"} 
              alt={"Symbol"}
              width={56}
              height={56}
              quality={100}
            />
            <div className="w-[70%] p-5 font-k2d grid grid-cols-1 justify-items-center text-[17px] mobile:w-[100%] mobile:text-[13px]">
               <input 
                 className="rounded-lg w-full text-center placeholder-[#4C4C4C] text-black p-1" 
                 type="text" value={quilometroPorLitro}
                 placeholder="Quantos KM seu veiculo anda com 1 litro de combustivel?"
                 onChange={(e) => setQuilometroPorLitro(e.target.value)}/>

               <input 
                 className="rounded-lg w-full text-center placeholder-[#4C4C4C] text-black p-1 mt-5" 
                 type="text" value={tanqueTotal} 
                 placeholder="Quantos litros o tanque de combustivel suporta de combustivel?"
                 onChange={(e) => setTanqueTotal(e.target.value)}/>

               <input 
                 className="rounded-lg w-full text-center placeholder-[#4C4C4C] text-black p-1 mt-5" 
                 type="text" value={combustivel} 
                 placeholder="Insira o preço do combusivel"
                 onChange={(e) => setCombustivel(e.target.value)}/>

               <input 
                 className="rounded-lg w-full text-center placeholder-[#4C4C4C] text-black p-1 mt-5" 
                 type="text" value={distancia} 
                 placeholder="Distancia a percorrer com o veiculo (KM)"
                 onChange={(e) => {
                  const inputValor = e.target.value;
                  if (/^\d*$/.test(inputValor)) { // Verifica se o valor é composto apenas de dígitos
                      setDistancia(inputValor);
                  }
                 }}/>

                <select
                    className="rounded-lg w-[50%] text-center  text-[#4C4C4C] p-1 mt-5 mobile:w-[65%]"
                    value={combustivelUsado}
                    onChange={(e) => setCombustivelUsado(e.target.value)}>
                    <option value="">Selecione o tipo de combustível</option>
                    <option value="Gasolina">Gasolina</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Etanol">Etanol</option>
                </select>

            </div>
            <div className="w-[250px] flex flex-row justify-between items-center mt-4 font-abel">
                <input
                  className="bg-[#8F4330] rounded-lg pr-3 pl-3 pt-3 pb-2  w-[110px] text-xl hoverButton" 
                  type="button" 
                  value="Calcular" 
                  onClick={calculate}/>

                <input
                  className="bg-[#920707] rounded-lg pr-3 pl-3 pt-3 pb-2  w-[110px] text-xl" 
                  id="hoverButton"
                  type="button"
                  value="Limpar" 
                  onClick={clear}/>
            </div>
        </div>

        <DataReport 
            KMLValue={KM_percorre} 
            Distancia={distCerto} 
            VezesAbastecido={vezes_abastecido} 
            Gasto_tanque={gasto_tanque_total}
            CO2={resultCO2}/>
    </>
    );
}