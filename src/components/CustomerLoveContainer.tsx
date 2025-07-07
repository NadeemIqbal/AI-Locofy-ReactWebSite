import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export type CustomerLoveContainerType = {
  className?: string;
};

const CustomerLoveContainer: FunctionComponent<CustomerLoveContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full bg-Base-Colors-tag-base-white flex flex-col items-start justify-start !pt-Spacing-3xl !pb-0 px-4 md:px-12 box-border gap-Spacing-xl max-w-full text-left text-Typography-Font-Sizes-h5 text-Text-color font-Typography-Font-Family-Primary ${className}`}
    >
      <Typography
        className="self-stretch relative"
        variant="inherit"
        variantMapping={{ inherit: "b" }}
        sx={{ lineHeight: "18px", fontWeight: "700" }}
      >
        Why Our Customers Love Us
      </Typography>
      <Box className="w-full">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          <SwiperSlide>
            <Box className="h-[421px] w-[350px] rounded-Border-Radius-2xl [background:linear-gradient(180deg,_#7f19a0,_#c82d8c)] flex flex-col items-start justify-start !pt-[83px] !pb-[83px] !pl-[39px] !pr-5 box-border relative gap-2 max-w-full z-[0]">
              <img
                className="w-full h-full absolute !!m-[0 important] top-[0px] left-[0px] object-cover z-[0]"
                loading="lazy"
                alt=""
                src="/rectangle@2x.png"
              />
              <Typography
                className="!m-0 relative z-[1] mq450:text-[19px] mq450:leading-[23px] mq800:text-[26px] mq800:leading-[31px]"
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{ fontWeight: "700", lineHeight: "39px" }}
              >
                <Typography className="!m-0" variant="inherit">
                  Spreading love
                </Typography>
                <Typography className="!m-0" variant="inherit">
                  Across
                </Typography>
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[421px] w-[262px] rounded-Border-Radius-2xl object-cover"
              loading="lazy"
              alt=""
              src="/ugc-video@2x.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[421px] w-[262px] rounded-Border-Radius-2xl object-cover"
              loading="lazy"
              alt=""
              src="/ugc-video-1@2x.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[421px] w-[262px] rounded-Border-Radius-2xl object-cover"
              loading="lazy"
              alt=""
              src="/ugc-video-2@2x.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[421px] w-[262px] rounded-Border-Radius-2xl object-cover"
              loading="lazy"
              alt=""
              src="/ugc-video-3@2x.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[421px] w-[262px] rounded-Border-Radius-2xl object-cover"
              loading="lazy"
              alt=""
              src="/ugc-video-1@2x.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[421px] w-[262px] rounded-Border-Radius-2xl object-cover"
              loading="lazy"
              alt=""
              src="/ugc-video-2@2x.png"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-[2]">
        <img
          className="h-[42px] w-[42px] rounded-[22px] cursor-pointer"
          loading="lazy"
          alt=""
          src="/categories-arrow-button.svg"
        />
      </div>
    </section>
  );
};

export default CustomerLoveContainer;
