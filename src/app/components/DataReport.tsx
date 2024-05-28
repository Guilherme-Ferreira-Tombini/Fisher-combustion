"use client"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default function DataReport(props:any){
    function GerarPDF() {
        const content = document.getElementById("content");
        if (content) {
            html2canvas(content)
                .then(canvas => {
                    const pdf = new jsPDF();
                    const pageWidth = pdf.internal.pageSize.getWidth();
                    const pageHeight = pdf.internal.pageSize.getHeight();
                    const canvasWidth = canvas.width;
                    const canvasHeight = canvas.height;

                    // Calcula a nova altura da imagem para manter a proporção
                    const imgHeight = (canvasHeight * pageWidth) / canvasWidth;
                    const position = 0;

                    if (imgHeight > pageHeight) {
                        // Divida a imagem em várias páginas
                        let heightLeft = imgHeight;
                        let y = position;

                        while (heightLeft > 0) {
                            const currentPageHeight = Math.min(heightLeft, pageHeight);
                            const currentCanvas = document.createElement('canvas');
                            currentCanvas.width = canvasWidth;
                            currentCanvas.height = (canvasWidth * currentPageHeight) / pageWidth;

                            const ctx = currentCanvas.getContext('2d');
                            if (ctx) {
                                ctx.drawImage(
                                    canvas,
                                    0,
                                    canvas.height - heightLeft,
                                    canvasWidth,
                                    (canvasWidth * currentPageHeight) / pageWidth,
                                    0,
                                    0,
                                    canvasWidth,
                                    currentCanvas.height
                                );
                                
                                const imgData = currentCanvas.toDataURL('image/png');
                                pdf.addImage(imgData, 'PNG', 0, y, pageWidth, currentPageHeight);
                                heightLeft -= currentPageHeight;
                                if (heightLeft > 0) {
                                    pdf.addPage();
                                }
                            }
                        }
                    } else {
                        // Se a imagem couber em uma página
                        const imgData = canvas.toDataURL('image/png');
                        pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, imgHeight);
                    }

                    pdf.save('Relatorio.pdf');
                });
        }
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
                        className="bg-[#8F4330] text-white p-3 rounded-xl text-lg hoverButton"
                        type="button" 
                        value="Gerar PDF" 
                        onClick={GerarPDF}/>
                </div>
            </div>

        </div>
    )
}