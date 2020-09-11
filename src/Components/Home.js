import React from "react";
import "./Home.css";

import Carousel from "react-bootstrap/Carousel";   
import "../netflix-image.JPG";

function Home() {
  const Redirect = () =>
    window.location.replace("https://netflix-clone-5966a.web.app");
  const RedirectToPrime = () =>
    window.location.replace(
      "https://www.primevideo.com/?ref_=dvm_pds_cpb_in_as_s_b_d132E|m_b2670bMZc_c"
    );

  return (
    <div className="home">
   
<Carousel>
        <Carousel.Item>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG"
            alt=""
            className="home__image"
            onClick={RedirectToPrime}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
            alt=""
            className="home__image"
            onClick={RedirectToPrime}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://th.bing.com/th/id/OIP.-H_0yUUhGKONtjheB9woIQHaD4?w=307&h=180&c=7&o=5&pid=1.7"
            alt=""
            className="home__image"
            onClick={Redirect}
          />
        </Carousel.Item>
      </Carousel>
      {/* product id, title, rating, image */}
      <div className="home__row">
        <Product
          id="13241432"
          title="automate the boring stuff with python"
          price={680}
          rating={5}
          image="http://ebook3000.com/upimg/allimg/150502/0038040.jpg"
        />
        <Product
          id="13241432"
          title="LG OLED DISPLAY TV- 5400MAH, COMES WITH WIFI"
          price={68000}
          rating={5}
          image="https://cdn.shopclues.com/images1/thumbnails/109040/320/320/150532220-109040098-1596883456.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="13241432"
          title="LG QHD (2560 x 1440) 32 Inch IPS Display 3 Side Borderless - HDR 10, sRGB 99%, AMD Free sync - Dual HDMI, Display Port - 32QN600"
          price={280000}
          rating={5}
          image="https://m.media-amazon.com/images/I/71lKil3VGCL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="13241432"
          title="iPhone 11 64GB MEMORY A13 bionic chip"
          price={64999}
          rating={5}
          image="https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UY218_.jpg"
        />
        <Product
          id="13241432"
          title="Dell Inspiron 3493 14-inch HD Laptop (10th Gen i3-1005G1/4GB/1TB HDD/Win 10 + MS Office/Intel HD Graphics/Silver) D560193WIN9SE"
          price={28000}
          rating={3}
          image="https://m.media-amazon.com/images/I/5151M4yQlML._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
