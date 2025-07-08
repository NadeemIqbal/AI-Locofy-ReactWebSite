import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import CategoryListItem from "./CategoryListItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export type CategoriesType = {
  className?: string;
};

const Categories: FunctionComponent<CategoriesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-Base-Colors-base-light overflow-hidden flex flex-col items-start justify-center !p-Spacing-3xl relative gap-Spacing-xl text-left text-Typography-Font-Sizes-h5 text-Texts-Colors-text-dark font-Typography-Font-Family-Primary ${className}`}
    >
      <Typography
        className="relative z-[0]"
        variant="inherit"
        variantMapping={{ inherit: "b" }}
        sx={{ lineHeight: "18px", fontWeight: "700" }}
      >
        Shop by Categories
      </Typography>
      {/* Swipable Categories Row with flex-aligned arrows */}
      <div className="w-full flex flex-row items-center justify-center relative">
        <button
          className="categories-prev custom-swiper-nav swiper-button-prev mr-2 w-10 h-10 flex items-center justify-center bg-transparent border-none p-0"
          aria-label="Previous"
          type="button"
          style={{ background: 'transparent', border: 'none', padding: 0 }}
        >
          <img src={`${import.meta.env.BASE_URL}categories-arrow-button.svg`} alt="Previous" className="w-10 h-10 rotate-180" />
        </button>
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView="auto"
            centeredSlides={false}
            centerInsufficientSlides={false}
            className="categories-swiper"
            modules={[Navigation]}
            navigation={{
              nextEl: '.categories-next',
              prevEl: '.categories-prev'
            }}
          >
            <SwiperSlide style={{ width: 180 }}>
              <CategoryListItem
                hotDeals="Hot Deals"
                text="136 × 116"
                label
                icon={false}
                lines
                imagePlaceholderWidth="136px"
                imagePlaceholderHeight="116px"
                imagePlaceholderBorder="unset"
                imagePlaceholderBorderRadius="1px"
                imagePlaceholderBackground="#eee"
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: 180 }}>
              <CategoryListItem
                hotDeals="iPhone"
                text="136 × 116"
                label
                icon={false}
                lines
                imagePlaceholderWidth="136px"
                imagePlaceholderHeight="116px"
                imagePlaceholderBorder="unset"
                imagePlaceholderBorderRadius="1px"
                imagePlaceholderBackground="#eee"
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: 180 }}>
              <CategoryListItem
                hotDeals="Samsung"
                text="136 × 116"
                label
                icon={false}
                lines
                imagePlaceholderWidth="136px"
                imagePlaceholderHeight="116px"
                imagePlaceholderBorder="unset"
                imagePlaceholderBorderRadius="1px"
                imagePlaceholderBackground="#eee"
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: 180 }}>
              <CategoryListItem
                hotDeals="Macbooks"
                text="136 × 116"
                label
                icon={false}
                lines
                imagePlaceholderWidth="136px"
                imagePlaceholderHeight="116px"
                imagePlaceholderBorder="unset"
                imagePlaceholderBorderRadius="1px"
                imagePlaceholderBackground="#eee"
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: 180 }}>
              <CategoryListItem
                hotDeals="Gaming"
                text="136 × 116"
                label
                icon={false}
                lines
                imagePlaceholderWidth="136px"
                imagePlaceholderHeight="116px"
                imagePlaceholderBorder="unset"
                imagePlaceholderBorderRadius="1px"
                imagePlaceholderBackground="#eee"
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: 180 }}>
              <CategoryListItem
                hotDeals="Laptops"
                text="136 × 116"
                label
                icon={false}
                lines
                imagePlaceholderWidth="136px"
                imagePlaceholderHeight="116px"
                imagePlaceholderBorder="unset"
                imagePlaceholderBorderRadius="1px"
                imagePlaceholderBackground="#eee"
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: 180 }}>
              <CategoryListItem
                hotDeals="iPads"
                text="136 × 116"
                label
                icon={false}
                lines
                imagePlaceholderWidth="136px"
                imagePlaceholderHeight="116px"
                imagePlaceholderBorder="unset"
                imagePlaceholderBorderRadius="1px"
                imagePlaceholderBackground="#eee"
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: 180 }}>
              <CategoryListItem
                hotDeals="Apple Watches"
                text="136 × 116"
                label
                icon={false}
                lines
                imagePlaceholderWidth="136px"
                imagePlaceholderHeight="116px"
                imagePlaceholderBorder="unset"
                imagePlaceholderBorderRadius="1px"
                imagePlaceholderBackground="#eee"
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: 180 }}>
              <CategoryListItem
                hotDeals="Accessories"
                text="136 × 116"
                label
                icon={false}
                lines
                imagePlaceholderWidth="136px"
                imagePlaceholderHeight="116px"
                imagePlaceholderBorder="unset"
                imagePlaceholderBorderRadius="1px"
                imagePlaceholderBackground="#eee"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <button
          className="categories-next custom-swiper-nav swiper-button-next ml-2 w-10 h-10 flex items-center justify-center bg-transparent border-none p-0"
          aria-label="Next"
          type="button"
          style={{ background: 'transparent', border: 'none', padding: 0 }}
        >
          <img src={`${import.meta.env.BASE_URL}categories-arrow-button.svg`} alt="Next" className="w-10 h-10" />
        </button>
      </div>
    </section>
  );
};

export default Categories;
