"use client"
import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import DataReport from "./DataReport";

export default function Calculate(){
    const [quilometroPorLitro, setQuilometroPorLitro] = useState("");
    const [tanqueTotal, setTanqueTotal] = useState("");
    const [combustivel, setCombustivel] = useState("");
    const [KM_percorre, setKM_percorre] = useState<number>(0.0);
    const [gasto_tanque_total, setGasto_tanque_total] = useState<number>(0.0);
    const [vezes_abastecido, setVezes_abastecido] = useState<number>(0);

    function calculate() {
        let campKMLValue = parseFloat(quilometroPorLitro);
        let campTTValue = parseFloat(tanqueTotal);
        let campTCValue = parseFloat(combustivel);

        if (isNaN(campKMLValue) || isNaN(campTTValue) ||  isNaN(campTCValue)) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: 'warning',
            background: '#b1533c',
            html: '<div class="font-k2d text-[14px]">Ensira os dados nos campos</div>',
            customClass:{
                popup: 'custom-popup-toast',
                title: 'custom-title-toast',
            },
            color: 'white',
          });
            return;
        }else{
          setKM_percorre(Math.round(campTTValue * campKMLValue));
          let gasto = campTCValue * campTTValue;
          setGasto_tanque_total(Math.floor(gasto));

          let conta = 1000 / campKMLValue;
          let vezesAbastecido = conta/campTTValue;
          setVezes_abastecido(Math.ceil(vezesAbastecido));

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: 'success',
            background: '#b1533c',
            html: '<div class="font-k2d text-[14px]">Relatório gerado com sucesso!!</div>',
            customClass:{
                popup: 'custom-popup-toast',
                title: 'custom-title-toast',
                
            },
            color: 'white',
          });
            return;
        }
    }


    function clear(){
       setQuilometroPorLitro("");
       setTanqueTotal("");
       setCombustivel("");
       setVezes_abastecido(0);
       setKM_percorre(0);
       setGasto_tanque_total(0);
       
       const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: 'success',
        background: '#b1533c',
        html: '<div class="font-k2d text-[14px]">Campos limpos com sucesso</div>',
        customClass:{
            popup: 'custom-popup-toast',
            title: 'custom-title-toast'
        },
        color: 'white',
      });
      return;
    }

    return(
      <>
        <div className="grid grid-cols-1 justify-items-center mt-10 bg-[#C35A40] w-[83%] p-6 rounded-2xl">
            <h1 className="flex flex-col justify-center items-center leading-none text-[95px] mb-1">
                CALCULOS
            </h1>
            <Image 
              src={"/img/Symbol.png"} 
              alt={"Symbol"}
              width={56}
              height={56}
              quality={100}
            />
            <div className="w-[70%] p-5 font-k2d grid grid-cols-1 justify-items-center text-[17px]">
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

            </div>
            <div className="w-[250px] flex flex-row justify-between items-center mt-4 font-abel">
                <input
                  className="bg-[#8F4330] rounded-lg pr-3 pl-3 pt-3 pb-2  w-[110px] text-2xl" 
                  id="hoverButton"
                  type="button" 
                  value="Calcular" 
                  onClick={calculate}/>

                <input
                  className="bg-[#920707] rounded-lg pr-3 pl-3 pt-3 pb-2  w-[110px] text-2xl" 
                  id="hoverButton"
                  type="button"
                  value="Limpar" 
                  onClick={clear}/>
            </div>
        </div>
        <DataReport KMLValue={KM_percorre} VezesAbastecido={vezes_abastecido} Gasto_tanque={gasto_tanque_total}/>
    </>
    );
}