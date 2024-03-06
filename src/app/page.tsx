import Calculate from "./components/Calculate";
import DataReport from "./components/DataReport";
import ExplanatoryTopics from "./components/ExplanatoryTopics";
import Header from "./components/Header";
import TopOfPage from "./components/TopOfPage";

export default function Home() {
  return (
    <div className="bg-[#683529] w-[100%] grid grid-col-1 justify-items-center">
      <Header/>
      <TopOfPage/>
      <ExplanatoryTopics/>
      <Calculate/>
    </div>
  );
}
