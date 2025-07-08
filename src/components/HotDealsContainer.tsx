import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import ExtraSmallButton from "./ExtraSmallButton";
import ProductCardHome from "./ProductCardHome";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export type HotDealsContainerType = {
  className?: string;
};

const HotDealsContainer: FunctionComponent<HotDealsContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-Base-Colors-base-grey flex flex-col items-start justify-start !p-Spacing-3xl relative mq450:!pt-[26px] mq450:!pb-[26px] mq450:box-border ${className}`}
    >
      <section className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-Spacing-xl z-[0] text-left text-Typography-Font-Sizes-h5 text-Texts-Colors-text-dark font-Typography-Font-Family-Primary">
        <Box className="self-stretch flex flex-row items-center justify-between gap-0 mq450:flex-wrap">
          <Box className="flex flex-row items-center justify-start gap-Spacing-3xs">
            <Typography
              className="relative"
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "18px", fontWeight: "700" }}
            >
              Hot Deals
            </Typography>
            <Box className="flex flex-row items-center justify-start gap-Spacing-2xs">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src={`${import.meta.env.BASE_URL}hotdealicon.svg`}
              />
              <Typography
                className="relative text-transparent !bg-clip-text [background:linear-gradient(180deg,_#7f19a0,_#c82d8c)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ lineHeight: "18px", fontWeight: "700" }}
              >
                22:33:08
              </Typography>
            </Box>
          </Box>
          <ExtraSmallButton />
        </Box>
        <Box className="self-stretch relative">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
              1536: { slidesPerView: 5 },
            }}
            className="w-full hotdeals-swiper"
            modules={[Navigation]}
            navigation={{
              nextEl: '.hotdeals-next',
              prevEl: '.hotdeals-prev'
            }}
          >
            <SwiperSlide>
              <ProductCardHome
                property1="Default"
                property11="Default"
                property12="Default"
                text="Image Placeholder"
                label
                icon={false}
                lines
                colorSelectorProperty1="Default"
                colorSelectorProperty11="Default"
                colorSelectorProperty12="Default"
                colorSelectorProperty13="Default"
                colorSelectorProperty14="Default"
                colorSelectorRectangleBoxBackground1="#3b667f"
                colorSelectorRectangleBoxBackground2="#f6c3cc"
                colorSelectorRectangleBoxBackground3="#121212"
                colorSelectorRectangleBoxBackground4="#eddec9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardHome
                property1="Default"
                productCardHomeFlex="1"
                productCardHomeWidth="unset"
                property11="Default"
                property12="Default"
                text="Image Placeholder"
                label
                icon={false}
                lines
                imagePlaceholderWidth="212px"
                imagePlaceholderHeight="146px"
                imagePlaceholderBorder="1px solid #000"
                imagePlaceholderBorderRadius="unset"
                imagePlaceholderBackground="unset"
                colorSelectorProperty1="Default"
                colorSelectorProperty11="Default"
                colorSelectorProperty12="Default"
                colorSelectorProperty13="Default"
                colorSelectorProperty14="Default"
                colorSelectorRectangleBoxBackground="#a72627"
                colorSelectorRectangleBoxBackground1="#3b667f"
                colorSelectorRectangleBoxBackground2="#f6c3cc"
                colorSelectorRectangleBoxBackground3="#121212"
                colorSelectorRectangleBoxBackground4="#eddec9"
              >
                <img
                  src={[
                    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946',
                    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-family-hero',
                    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1617135051000',
                    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-og-201909?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1567021766023',
                    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-og-202203?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1644987933612'
                  ][Math.floor(Math.random() * 5)]}
                  alt="iPhone"
                  style={{ width: '212px', height: '146px', border: '1px solid #000', borderRadius: 'unset', background: 'unset' }}
                />
              </ProductCardHome>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardHome
                property1="Default"
                productCardHomeFlex="1"
                productCardHomeWidth="unset"
                property11="Default"
                property12="Default"
                text="Image Placeholder"
                label
                icon={false}
                lines
                imagePlaceholderWidth="212px"
                imagePlaceholderHeight="146px"
                imagePlaceholderBorder="1px solid #000"
                imagePlaceholderBorderRadius="unset"
                imagePlaceholderBackground="unset"
                colorSelectorProperty1="Default"
                colorSelectorProperty11="Default"
                colorSelectorProperty12="Default"
                colorSelectorProperty13="Default"
                colorSelectorProperty14="Default"
                colorSelectorRectangleBoxBackground="#a72627"
                colorSelectorRectangleBoxBackground1="#3b667f"
                colorSelectorRectangleBoxBackground2="#f6c3cc"
                colorSelectorRectangleBoxBackground3="#121212"
                colorSelectorRectangleBoxBackground4="#eddec9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardHome
                property1="Default"
                productCardHomeFlex="1"
                productCardHomeWidth="unset"
                property11="Default"
                property12="Default"
                text="Image Placeholder"
                label
                icon={false}
                lines
                imagePlaceholderWidth="212px"
                imagePlaceholderHeight="146px"
                imagePlaceholderBorder="1px solid #000"
                imagePlaceholderBorderRadius="unset"
                imagePlaceholderBackground="unset"
                colorSelectorProperty1="Default"
                colorSelectorProperty11="Default"
                colorSelectorProperty12="Default"
                colorSelectorProperty13="Default"
                colorSelectorProperty14="Default"
                colorSelectorRectangleBoxBackground="#a72627"
                colorSelectorRectangleBoxBackground1="#3b667f"
                colorSelectorRectangleBoxBackground2="#f6c3cc"
                colorSelectorRectangleBoxBackground3="#121212"
                colorSelectorRectangleBoxBackground4="#eddec9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardHome
                property1="Default"
                productCardHomeFlex="1"
                productCardHomeWidth="unset"
                property11="Default"
                property12="Default"
                text="Image Placeholder"
                label
                icon={false}
                lines
                imagePlaceholderWidth="212px"
                imagePlaceholderHeight="146px"
                imagePlaceholderBorder="1px solid #000"
                imagePlaceholderBorderRadius="unset"
                imagePlaceholderBackground="unset"
                colorSelectorProperty1="Default"
                colorSelectorProperty11="Default"
                colorSelectorProperty12="Default"
                colorSelectorProperty13="Default"
                colorSelectorProperty14="Default"
                colorSelectorRectangleBoxBackground="#a72627"
                colorSelectorRectangleBoxBackground1="#3b667f"
                colorSelectorRectangleBoxBackground2="#f6c3cc"
                colorSelectorRectangleBoxBackground3="#121212"
                colorSelectorRectangleBoxBackground4="#eddec9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardHome
                property1="Default"
                productCardHomeFlex="1"
                productCardHomeWidth="unset"
                property11="Default"
                property12="Default"
                text="Image Placeholder"
                label
                icon={false}
                lines
                imagePlaceholderWidth="212px"
                imagePlaceholderHeight="146px"
                imagePlaceholderBorder="1px solid #000"
                imagePlaceholderBorderRadius="unset"
                imagePlaceholderBackground="unset"
                colorSelectorProperty1="Default"
                colorSelectorProperty11="Default"
                colorSelectorProperty12="Default"
                colorSelectorProperty13="Default"
                colorSelectorProperty14="Default"
                colorSelectorRectangleBoxBackground="#a72627"
                colorSelectorRectangleBoxBackground1="#3b667f"
                colorSelectorRectangleBoxBackground2="#f6c3cc"
                colorSelectorRectangleBoxBackground3="#121212"
                colorSelectorRectangleBoxBackground4="#eddec9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardHome
                property1="Default"
                productCardHomeFlex="1"
                productCardHomeWidth="unset"
                property11="Default"
                property12="Default"
                text="Image Placeholder"
                label
                icon={false}
                lines
                imagePlaceholderWidth="212px"
                imagePlaceholderHeight="146px"
                imagePlaceholderBorder="1px solid #000"
                imagePlaceholderBorderRadius="unset"
                imagePlaceholderBackground="unset"
                colorSelectorProperty1="Default"
                colorSelectorProperty11="Default"
                colorSelectorProperty12="Default"
                colorSelectorProperty13="Default"
                colorSelectorProperty14="Default"
                colorSelectorRectangleBoxBackground="#a72627"
                colorSelectorRectangleBoxBackground1="#3b667f"
                colorSelectorRectangleBoxBackground2="#f6c3cc"
                colorSelectorRectangleBoxBackground3="#121212"
                colorSelectorRectangleBoxBackground4="#eddec9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardHome
                property1="Default"
                productCardHomeFlex="1"
                productCardHomeWidth="unset"
                property11="Default"
                property12="Default"
                text="Image Placeholder"
                label
                icon={false}
                lines
                imagePlaceholderWidth="212px"
                imagePlaceholderHeight="146px"
                imagePlaceholderBorder="1px solid #000"
                imagePlaceholderBorderRadius="unset"
                imagePlaceholderBackground="unset"
                colorSelectorProperty1="Default"
                colorSelectorProperty11="Default"
                colorSelectorProperty12="Default"
                colorSelectorProperty13="Default"
                colorSelectorProperty14="Default"
                colorSelectorRectangleBoxBackground="#a72627"
                colorSelectorRectangleBoxBackground1="#3b667f"
                colorSelectorRectangleBoxBackground2="#f6c3cc"
                colorSelectorRectangleBoxBackground3="#121212"
                colorSelectorRectangleBoxBackground4="#eddec9"
              />
            </SwiperSlide>
          </Swiper>
          <button
            className="hotdeals-prev custom-swiper-nav swiper-button-prev absolute top-1/2 left-7 -translate-y-1/2 z-[2] w-10 h-10 flex items-center justify-center bg-transparent border-none p-0"
            aria-label="Previous"
            type="button"
            style={{ background: 'transparent', border: 'none', padding: 0 }}
          >
            <img src={`${import.meta.env.BASE_URL}categories-arrow-button.svg`} alt="Previous" className="w-10 h-10 rotate-180" />
          </button>
          <button
            className="hotdeals-next custom-swiper-nav swiper-button-next absolute top-1/2 right-7 -translate-y-1/2 z-[2] w-10 h-10 flex items-center justify-center bg-transparent border-none p-0"
            aria-label="Next"
            type="button"
            style={{ background: 'transparent', border: 'none', padding: 0 }}
          >
            <img src={`${import.meta.env.BASE_URL}categories-arrow-button.svg`} alt="Next" className="w-10 h-10" />
          </button>
        </Box>
      </section>
    </section>
  );
};

export default HotDealsContainer;
