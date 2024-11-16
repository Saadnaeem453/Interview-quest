import Navbar from "./components/navbar/Navbar";
import TopicsBar from "./components/TopicsBar";

export default function Home() {
  return (
    <div className="bg-slate-50 text-white dark:bg-gray-600 dark:text-gray-800">
      <Navbar />
      <TopicsBar />
    </div>
  );
}
