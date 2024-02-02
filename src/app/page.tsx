import ExplanatoryTopics from "./components/ExplanatoryTopics";
import Header from "./components/Header";
import TopOfPage from "./components/TopOfPage";

export default function Home() {
  return (
    <div className="bg-[#683529] w-[100%]">
      <Header/>
      <TopOfPage/>
      <ExplanatoryTopics/>
    </div>
  );
}
