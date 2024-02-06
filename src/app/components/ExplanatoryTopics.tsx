import Topics from "./Topics";

export default function ExplanatoryTopics(){
    return(
        <div className="w-[90%] grid grid-cols-3 mt-3">
            <Topics 
              image={"/img/cronometro 1.png"} 
              text={"Os calculos de consumo dos automoveis, muitas vezes, precisam do tempo que o carro percorreu.\n\nMas, no caso do site, só é necessário saber quantos quilometros com 1 litro de combustivel seu veiculo realiza e a quantidade de litros que ele suporta."}/>
            <Topics 
              image={"/img/analise-de-dados 1.png"} 
              text={"Com os resultados dos calculos e valores pode-se fazer relatórios.\n\nPodendo ter a opção de gerar um PDF do relatório gerado. Podendo ter a opção de gerar um PDF do relatório gerado."}/>
            <Topics 
              image={"/img/posto-de-gasolina 1.png"} 
              text={"Neste site calculamos o consumo:\n\n• Quantas vezes será abastecido o automovel para sua viagem;\n• Gasto total para encher o tanque.\n• Total de quilometros que pode percorrer com o tanque cheio."}/>
        </div>
    )
}