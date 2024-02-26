import Topics from "./Topics";

export default function ExplanatoryTopics(){
    return(
        <div className="w-[90%] grid grid-cols-3 mt-5">
            <Topics 
              image={"/img/cronometro 1.png"} 
              text={"Os calculos de consumo dos automoveis, muitas vezes, precisam do tempo que o carro percorreu.\n\nPorém, no caso do site, só é necessário saber quantos quilometros com 1 litro de combustivel seu veiculo realiza, o total de litros que ele suporta e o preço do combustivel utilizado."}/>
            <Topics 
              image={"/img/analise-de-dados 1.png"} 
              text={'Com os resultados dos calculos, pode-se fazer relatórios.\nEsse relatório tem a opção de salvar em PDF, podendo depois consultar no seu proprio dispositivo o arquivo.\n\nOBS: Os relatórios seram salvos apenas em arquivo PDF não ficaram salvos no site.'}/>
            <Topics 
              image={"/img/posto-de-gasolina 1.png"} 
              text={"Neste site calculamos o consumo:\n\n• Quantas vezes será abastecido o automovel para uma viagem;\n• Gasto total para encher o tanque;\n• Gasto para encher meio tanque;\n• Total de quilometros que pode percorrer com o tanque cheio."}/>
        </div>
    )
}