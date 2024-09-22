import { Button } from "antd";
import "./banner.scss";
import BannerImg from "../../../assets/banner.png"



const Banner = () => {
  return (
    <div className="banner-main border-b py-2">
  <div className="banner-content">
    <div className="banner-left">
      <div className="p-4">
        <h2>High-Performance</h2>
        <h1>Gaming Computers</h1>
        <p className="text-sm font-normal text-justify hidden md:block">
          Experience next-level gaming with our powerful rigs designed for ultimate performance. Whether you're playing GTA V, Far Cry, or Forza, these gaming computers are built to handle it all. Enjoy smooth gameplay, stunning graphics, and fast processing speeds.
          Don't miss out on our exclusive deals – elevate your gaming experience now!
        </p>
        <Button>Shop Now</Button>
        <Button type="link">www.nabeel.com.pk</Button>
      </div>
    </div>
    <div className="banner-right flex-1 flex items-center">
      <img src={BannerImg} className="w-full h-full" alt="Gaming Computer Banner" />
    </div>
  </div>
</div>

  )
}
export default Banner;