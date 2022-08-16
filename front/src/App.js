import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-gray-100 w-full h-screen">
      <Navbar />
      <div className="flex justify-center bg-orange-400 items-center h-96 min-h-90 shadow-md mt-4 mb-4">
        <h1 className="text-6xl text-center font-bold text-white uppercase"> Design your habits, create your future</h1>
      </div >
      <div className="grid grid-cols-5 gap-2">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
