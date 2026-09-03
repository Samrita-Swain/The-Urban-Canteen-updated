"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import GallerySlider from "./GallerySlider";

const FoodSlider = () => {
  return (
    <section className="food-category-section fix section-padding dark-bg">
      <div className="tomato-shape">
        <img src="assets/img/shape/tomato-shape.png" alt="shape-img" />
      </div>
      <div className="burger-shape-2">
        <img src="assets/img/shape/burger-shape-2.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-9">
            <div className="section-title">
              <span className="wow fadeInUp home-about-subtitle ">Crispy, Every Bite a Taste</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Popular Food Items
              </h2>
            </div>
          </div>
          <div
            className="col-md-5 ps-0 col-3 text-end wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="array-button">
              <button className="array-prev">
                <i className="far fa-long-arrow-left" />
              </button>
              <button className="array-next">
                <i className="far fa-long-arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <GallerySlider />
      </div>
    </section>
  );
};
export default FoodSlider;
