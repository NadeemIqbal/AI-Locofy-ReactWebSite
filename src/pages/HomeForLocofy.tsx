import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import HotDealsContainer from "../components/HotDealsContainer";
import PopularIPhoneContainer from "../components/PopularIPhoneContainer";
import DevicesVerifiedContainer from "../components/DevicesVerifiedContainer";
import CustomerLoveContainer from "../components/CustomerLoveContainer";
import Usp from "../components/Usp";
import Footer from "../components/Footer";

const HomeForLocofy: FunctionComponent = () => {
  return (
    <Box className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-[14px] text-Texts-Colors-text-dark font-[Montserrat]">
      <Header />
      <Hero />
      <Categories />
      <HotDealsContainer />
      <PopularIPhoneContainer />
      <DevicesVerifiedContainer />
      <CustomerLoveContainer />
      <Box className="w-[1440px] bg-Base-Colors-base-grey flex flex-row items-center justify-between !pt-0 !pb-0 !pl-Spacing-3xl !pr-Spacing-3xl box-border gap-0">
        <Box className="flex flex-row items-center justify-start gap-Spacing-3xl mq800:gap-5 mq800:flex-wrap">
          <Usp
            monthWarranty="/12-month-warranty.svg"
            monthsWarranty="12 Months Warranty"
          />
          <Usp
            monthWarranty="/free-deliveryg.svg"
            monthsWarranty="Free Delivery"
          />
          <Usp
            monthWarranty="/10-days-return.svg"
            monthsWarranty="10 Days  To Return"
          />
        </Box>
        <Box className="flex flex-row items-center justify-start gap-Spacing-s">
          <div className="w-[141px] relative font-semibold flex items-center shrink-0">
            Buy Now, Pay Later
          </div>
          <Box className="h-[17px] w-[118.5px] relative">
            <Box className="absolute h-full w-[48.52%] top-[0%] right-[51.48%] bottom-[0%] left-[0%] mix-blend-luminosity">
              <img
                className="absolute h-[94.12%] w-full top-[0%] right-[0%] bottom-[5.88%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
              <img
                className="absolute h-full w-[69.57%] top-[0%] right-[14.78%] bottom-[0%] left-[15.65%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/buy-now-pay-later-logo@2x.png"
              />
            </Box>
            <img
              className="absolute h-[94.12%] w-[45.99%] top-[0%] right-[0%] bottom-[5.88%] left-[54.01%] max-w-full overflow-hidden max-h-full object-cover mix-blend-luminosity"
              loading="lazy"
              alt=""
              src="/logo-badge2-1@2x.png"
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomeForLocofy;
