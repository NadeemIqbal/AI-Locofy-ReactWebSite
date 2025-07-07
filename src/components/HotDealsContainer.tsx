import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import ExtraSmallButton from "./ExtraSmallButton";
import ProductCardHome from "./ProductCardHome";

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
                src="/hotdealicon.svg"
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
        <Box className="self-stretch flex flex-row items-center justify-center gap-[15px] mq1350:flex-wrap">
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
        </Box>
      </section>
      <img
        className="w-[42px] h-[42px] absolute !!m-[0 important] top-[calc(50%_+_6px)] right-[19px] rounded-[22px] z-[1]"
        loading="lazy"
        alt=""
        src="/categories-arrow-button.svg"
      />
    </section>
  );
};

export default HotDealsContainer;
