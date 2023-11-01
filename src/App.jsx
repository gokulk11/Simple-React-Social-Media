import Header from "./components/Header";
import Hero from "./components/Hero";
import BottomNav from "./components/BottomNav";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center mt-40">
      <div className=" w-[300px] h-[600px] rounded-[25px] bg-gradient-to-b from-sky-700 to-white to-90%">
        <Header/>
        <Hero/>
        <BottomNav/>
      </div>
    </div>
  );
}

export default App;
