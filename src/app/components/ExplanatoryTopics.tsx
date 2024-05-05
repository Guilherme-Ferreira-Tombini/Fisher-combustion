import Topics from "./Topics";

export default function ExplanatoryTopics(){
    return(
        <div className="w-[90%] grid grid-cols-3 mt-5 mobile:grid-cols-1 mobile:gap-1">
            <Topics 
              image={"/img/cronometro 1.png"} 
              text={"As informações geradas podem ajudar no planejamento de alguma viagem, saber os possiveis custos."}/>
            <Topics 
              image={"/img/analise-de-dados 1.png"} 
              text={"Geração do relatório em formato PDF.\nOBS: O relatório com os dados não fica salvo no site."}/>
            <Topics 
              image={"/img/posto-de-gasolina 1.png"} 
              text={"Saiba de algumas coisas relacionadas ao consumo de seu veiculo e a quantidade de CO2 que libera no ambiente."}/>
        </div>
    )
}