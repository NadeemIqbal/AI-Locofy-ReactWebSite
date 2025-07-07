import { FunctionComponent } from "react";
import { Typography, Button, Box } from "@mui/material";
import Usp from "./Usp";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-col items-start justify-start text-center text-Typography-Font-Sizes-h3 text-Texts-Colors-text-light font-Typography-Font-Family-Primary ${className}`}
    >
      <Box className="w-[1440px] h-[360px] flex flex-col items-start justify-start !pt-[101px] !pb-[101px] !pl-[526px] !pr-[526px] box-border bg-[url('/public/hero-banner-container@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:!pt-[66px] mq450:!pb-[66px] mq450:!pl-5 mq450:!pr-5 mq450:box-border mq800:!pl-[263px] mq800:!pr-[263px] mq800:box-border">
        <Box className="w-[388px] flex flex-col items-center justify-start gap-Spacing-xl">
          <Typography
            className="!m-0 self-stretch relative mq450:text-[22px] mq450:leading-[27px]"
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "700", lineHeight: "34px" }}
          >
            Revibed Electronics
          </Typography>
          <Typography
            className="!m-0 w-[396.7px] relative inline-block mq450:text-[22px] mq450:leading-[27px]"
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ lineHeight: "34px" }}
          >
            <Typography variant="inherit" variantMapping={{ inherit: "span" }}>
              Like
            </Typography>
            <Typography
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >{` New, `}</Typography>
            <Typography variant="inherit" variantMapping={{ inherit: "span" }}>
              but way
            </Typography>
            <Typography variant="inherit" variantMapping={{ inherit: "span" }}>
              {" "}
              Cheaper
            </Typography>
          </Typography>
          <Button
            className="!pt-Spacing-m !pb-Spacing-m !pl-Spacing-xl !pr-Spacing-xl"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "linear-gradient(180deg, #7e19a0, #c82d8c)",
              fontSize: "18",
              background: "#fff",
              borderRadius: "40px",
              "&:hover": { background: "#fff" },
            }}
          >
            Shop Deals
          </Button>
        </Box>
      </Box>
      <Box className="w-[1440px] bg-Base-Colors-base-grey flex flex-row items-center justify-between !pt-0 !pb-0 !pl-Spacing-3xl !pr-Spacing-3xl box-border gap-0 text-left text-Typography-Font-Sizes-p text-Texts-Colors-text-dark">
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
                alt=""
                src="/buy-now-pay-later-logo@2x.png"
              />
            </Box>
            <img
              className="cursor-pointer [border:none] !p-0 bg-[transparent] absolute h-[94.12%] w-[45.99%] top-[0%] right-[0%] bottom-[5.88%] left-[54.01%] max-w-full overflow-hidden max-h-full object-cover mix-blend-luminosity"
              alt=""
              src="/logo-badge2-1@2x.png"
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Hero;
