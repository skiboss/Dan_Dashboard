import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../featuredinfo/Featuredinfo";
import "./home.css";
import { UserData } from "../../dummyData";
export default function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={UserData} title="User Analytics" grid datakey="AU" />
      <div className="homeWidgets"></div>
    </div>
  );
}
