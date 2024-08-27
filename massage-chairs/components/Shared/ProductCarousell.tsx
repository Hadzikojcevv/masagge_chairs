"use client";
import { massageChairs } from "@/data/Data";
import ProductCarousellCard from "@/design_theme_items/ProductCarousellCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const ProductCarousell = () => {
  return (
    <section className="carousellSection">
      <h3>Откријте ги моделите</h3>

      <Carousel
        className="carousell"
        sliderClass="carousellSlider"
        centerMode={false}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        partialVisbile={false}
        arrows
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        rtl={false}
      >
        {massageChairs.map((chair) => (
          <ProductCarousellCard key={chair.id} chair={chair} />
        ))}
      </Carousel>
    </section>
  );
};

export default ProductCarousell;
