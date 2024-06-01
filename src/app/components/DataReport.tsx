"use client"
import {jsPDF} from 'jspdf';


export default function DataReport(props:any){
    function GerarPDF() {
       let doc = new jsPDF();

       let pageWidth = doc.internal.pageSize.getWidth();
       let pageHeight = doc.internal.pageSize.getHeight();

       doc.setFillColor(69, 34, 26);
       doc.rect(0, 0, pageWidth, pageHeight, 'F');
       doc.setFontSize(16);
       doc.setTextColor(255, 255, 255);

       doc.text(`Com o tanque cheio o carro percorre:${" " + props.KMLValue} KM`, 10, 10);
       doc.text(`Em uma viagem de ${(props.Distancia)? props.Distancia: "0"}km, seu carro vai abastecer: ${(props.VezesAbastecido)? props.VezesAbastecido: "0"} vezes`,10,20);
       doc.text(`Gasto para encher o tanque do seu carro: ${"R$ " + props.Gasto_tanque}`, 10, 30);
       doc.text(`Seu veiculo está emitindo ${props.CO2}kg de CO2 no ambiente.`, 10, 40);
       doc.save('Relatório.pdf');
    }

    return(
        <div className="bg-[#C35A40] rounded-3xl p-3 mt-16 w-[83%] grid grid-cols-1 justify-items-center principal">
            <h1 className="flex flex-col justify-center items-center leading-none text-[89px] mb-6 mobile:text-[75px]">
                RELATÓRIO
            </h1>
            <div className="w-[90%] grid grid-cols-1 p-2">
                <div className="flex flex-col justify-items-start text-justify text-[21px] font-k2d mobile:text-base bg-[#C35A40] h-[180px] mobile:mb-[35px]" id="content">
                    <span className="mt-1">
                        Com o tanque cheio o carro percorre:{" " + props.KMLValue} KM
                    </span>

                    <span className="leading-none mt-5">
                        Em uma viagem de {props.Distancia}km, seu carro vai abastecer: {(props.VezesAbastecido)? props.VezesAbastecido: "0"} vezes
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
                        className="bg-[#8F4330] text-white p-3 rounded-xl text-lg hoverButton"
                        type="button" 
                        value="Gerar PDF" 
                        onClick={GerarPDF}/>
                </div>
            </div>

        </div>
    )
}