import ChangeColor from "./ChangeColor";

export default function Header() {
  return (
    <div className="bg-[#8E4837] w-[100%] p-4 flex flex-row justify-between" id="container">
      <h1 className="text-4xl ml-5 ">
          FisherCombustion
      </h1>
      <ChangeColor/>
    </div>
  );
}
