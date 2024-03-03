
import "./Home.css";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import { CategoryBarData,CarouselData,BestOf } from "../../datas";
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
const Home = () => {
  return (
    <div className="Home">
<div className="Home-CategroryContainer">
  <div className="Home-CategoryBar">
{CategoryBarData.map((item,index)=>(
  <CategoryBar key={index} Imgsrc={item.imageSrc} CategoryName={item.category}/>
))}
  </div>
</div>

<div className="Home-Container">
  <div className="Home-Carousel">
    <BannerCarousel data={CarouselData}/>
  </div>

  <div className="Home_productCarousel">
  <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Best of Electronics"}
            Data={BestOf.Electronics}
          />
    <ProductCarousel  BgImg={"https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" } 
    Title="Best of Electronics" 
    Data={BestOf.Electronics}/>
    <ProductCarousel  BgImg={"https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" }
     Title="Best of Electronics"
      Data={BestOf.Electronics}/>
    <ProductCarousel  BgImg={"https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" } 
    Title="Best of Electronics" 
    Data={BestOf.Electronics}/>

    <ProductCarousel  BgImg={"https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" }
     Title="Best of Electronics"
      Data={BestOf.Electronics}/>

  
  </div>
</div>

    </div>
  )
}

export default Home