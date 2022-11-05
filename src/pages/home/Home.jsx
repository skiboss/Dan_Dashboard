import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../featuredinfo/Featuredinfo";
import "./home.css";
import { UserData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetS/WidgetSm";
export default function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={UserData} title="User Analytics" grid datakey="AU" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
