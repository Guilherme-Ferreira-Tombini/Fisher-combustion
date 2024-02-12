export default function SymbolForCalculations(){
    return(
        <div className="rounded-full bg-[#A14C37] w-[50px] h-[50px] flex flex-col items-center justify-center mt-[-20px]">
            <div className="w-10 h-[50%] flex flex-col justify-center items-center text-4xl">
              <p className="w-full grid grid-cols-1 justify-items-center">
                + -
              </p>
              <p className="w-full grid grid-cols-1 justify-items-center mt-[-25px]">
                x /
              </p>
            </div>
        </div>
    );
}