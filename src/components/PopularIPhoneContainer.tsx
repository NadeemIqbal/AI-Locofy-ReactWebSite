import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import ExtraSmallButton from "./ExtraSmallButton";
import ProductCardHome from "./ProductCardHome";

export type PopularIPhoneContainerType = {
  className?: string;
};

const PopularIPhoneContainer: FunctionComponent<PopularIPhoneContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-Base-Colors-base-light flex flex-col items-start justify-start !pt-Spacing-3xl !pb-0 !pl-Spacing-3xl !pr-Spacing-3xl box-border gap-Spacing-xl shrink-0 max-w-full text-left text-[18px] text-Texts-Colors-text-dark font-[Montserrat] ${className}`}
    >
      <Box className="self-stretch flex flex-row items-center justify-between gap-0 [row-gap:20px] mq450:flex-wrap">
        <Typography
          className="flex-1 relative inline-block min-w-[115px]"
          variant="inherit"
          variantMapping={{ inherit: "b" }}
          sx={{ lineHeight: "18px", fontWeight: "700" }}
        >
          Popular iPhone
        </Typography>
        <ExtraSmallButton />
      </Box>
      <Box className="self-stretch rounded-Border-Radius-2xl flex flex-row items-center justify-between relative gap-0 [row-gap:20px] max-w-full text-center text-Typography-Font-Sizes-h1 text-Texts-Colors-text-light mq1125:flex-wrap">
        <Box className="h-[386px] w-[480px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl overflow-hidden shrink-0 flex flex-row items-center justify-center !pt-[149px] !pb-[149px] !pl-5 !pr-5 box-border bg-[url('/public/popular-iphone-banner-container@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[0] mq450:!pt-[97px] mq450:!pb-[97px] mq450:box-border mq800:min-w-full mq1125:flex-1">
          <Typography
            className="!m-0 relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:text-[22px] mq450:leading-[26px] mq800:text-[29px] mq800:leading-[35px]"
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "600", lineHeight: "44px" }}
          >
            <Typography className="!m-0" variant="inherit">
              Up to 70% off
            </Typography>
            <Typography className="!m-0" variant="inherit">
              on iPhones
            </Typography>
          </Typography>
        </Box>
        <section className="self-stretch flex-1 rounded-tl-none rounded-tr-Border-Radius-2xl rounded-br-Border-Radius-2xl rounded-bl-none bg-Base-Colors-base-grey flex flex-row items-center justify-center !pt-Spacing-3xl !pb-Spacing-3xl !pl-Spacing-3xl !pr-7 box-border gap-4 min-w-[572px] z-[1] mq450:!pt-[26px] mq450:!pb-[26px] mq450:box-border mq450:grid-cols-[minmax(195px,_1fr)] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(195px,_338px))] mq800:min-w-full mq1125:flex-wrap">
          <ProductCardHome
            property1="Default"
            productCardHomeFlex="unset"
            productCardHomeWidth="260px"
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
          <ProductCardHome
            property1="Default"
            productCardHomeFlex="unset"
            productCardHomeWidth="260px"
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
          <ProductCardHome
            property1="Default"
            productCardHomeFlex="unset"
            productCardHomeWidth="260px"
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
        </section>
        <img
          className="h-[42px] w-[42px] absolute !!m-[0 important] top-[179px] left-[1339px] rounded-[22px] z-[2]"
          loading="lazy"
          alt=""
          src="/categories-arrow-button.svg"
        />
      </Box>
    </section>
  );
};

export default PopularIPhoneContainer;
