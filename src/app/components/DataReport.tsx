"use client"
import { useEffect } from 'react';
import jsPDF from 'jspdf';


export default function DataReport(props:any){
    function GerarPDF(){
              const gerarPDF = () => {
                const doc = new jsPDF();
                const content = document.getElementById('content');
                if(content){
                    doc.html(content, {
                    callback: function (pdf) {
                        pdf.save('Relatorio.pdf');
                    }
                    });
                }
              };
              gerarPDF();
    }

    return(
        <div className="bg-[#C35A40] rounded-3xl p-3 mt-16 w-[83%] grid grid-cols-1 justify-items-center" id="content">
            <h1 className="flex flex-col justify-center items-center leading-none text-[89px] mb-6 mobile:text-[75px]">
                RELATÓRIO
            </h1>
            <div className="w-[90%] grid grid-cols-1 p-2">
                <div className="flex flex-col justify-items-start text-justify text-[21px] font-k2d mobile:text-base">
                    <span className="mt-1">
                        Com o tanque cheio o carro percorre:{" " + props.KMLValue} KM
                    </span>

                    <span className="leading-none mt-5">
                        Em uma viagem de {(props.Distancia)? props.Distancia: "0"}km, seu carro vai abastecer: {(props.VezesAbastecido)? props.VezesAbastecido: "0"} vezes
                    </span>
                
                    <span className="mt-5">
                        Gasto para encher o tanque do seu carro: {"R$ " + props.Gasto_tanque}
                    </span>

                    <span className="mt-3">
                        Seu veiculo está emitindo {props.CO2}kg de CO2 no ambiente.
                    </span>
                </div>
                <div className="w-[100%] grid grid-cols-1 justify-items-center font-abel mt-9">
                    <input 
                        className="bg-[#8F4330] text-white p-3 rounded-xl text-lg"
                        id="hoverButton"
                        type="button" 
                        value="Gerar PDF" 
                        onClick={GerarPDF}/>
                </div>
            </div>

        </div>
    )
}