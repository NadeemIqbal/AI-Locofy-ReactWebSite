import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import DiscoutnTag from "./DiscoutnTag";
import ImagePlaceholder from "./ImagePlaceholder";
import ColorSelector from "./ColorSelector";

export type ProductCardHomeType = {
  className?: string;
  property11?: string;
  property12?: string;
  text?: string;
  label?: boolean;
  icon?: boolean;
  lines?: boolean;
  imagePlaceholderWidth?: string;
  imagePlaceholderHeight?: string;
  imagePlaceholderBorder?: string;
  imagePlaceholderBorderRadius?: string;
  imagePlaceholderBackground?: string;
  colorSelectorProperty1?: string;
  colorSelectorProperty11?: string;
  colorSelectorProperty12?: string;
  colorSelectorProperty13?: string;
  colorSelectorProperty14?: string;
  colorSelectorRectangleBoxBackground?: string;
  colorSelectorRectangleBoxBackground1?: string;
  colorSelectorRectangleBoxBackground2?: string;
  colorSelectorRectangleBoxBackground3?: string;
  colorSelectorRectangleBoxBackground4?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  productCardHomeFlex?: CSSProperties["flex"];
  productCardHomeWidth?: CSSProperties["width"];
};

const ProductCardHome: FunctionComponent<ProductCardHomeType> = ({
  className = "",
  property1 = "Default",
  productCardHomeFlex,
  productCardHomeWidth,
  property11,
  property12,
  text,
  label,
  icon,
  lines,
  imagePlaceholderWidth,
  imagePlaceholderHeight,
  imagePlaceholderBorder,
  imagePlaceholderBorderRadius,
  imagePlaceholderBackground,
  colorSelectorProperty1,
  colorSelectorProperty11,
  colorSelectorProperty12,
  colorSelectorProperty13,
  colorSelectorProperty14,
  colorSelectorRectangleBoxBackground,
  colorSelectorRectangleBoxBackground1,
  colorSelectorRectangleBoxBackground2,
  colorSelectorRectangleBoxBackground3,
  colorSelectorRectangleBoxBackground4,
}) => {
  const productCardHomeStyle: CSSProperties = useMemo(() => {
    return {
      flex: productCardHomeFlex,
      width: productCardHomeWidth,
    };
  }, [productCardHomeFlex, productCardHomeWidth]);

  return (
    <Box
      className={`flex-1 rounded-Border-Radius-l bg-Base-Colors-productcard-base-white border-Border-or-seperators-Colors-Productcard-stroke-grey border-solid border-[1px] flex flex-col items-start justify-start gap-Spacing-m text-left text-Typography-Font-Sizes-p text-Texts-Colors-text-dark font-Typography-Font-Family-Primary ${className}`}
      data-property1={property1}
      style={productCardHomeStyle}
    >
      <Box className="self-stretch flex flex-col items-center justify-start">
        <Box className="w-[260px] flex flex-col items-start justify-start !p-3 box-border">
          <DiscoutnTag property1={property11} />
        </Box>
        <img
          src={
            [
              'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946',
              'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-family-hero',
              'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1617135051000',
              'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-og-201909?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1567021766023',
              'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-og-202203?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1644987933612'
            ][(Math.floor(Math.random() * 5))]
          }
          alt="iPhone"
          style={{ width: imagePlaceholderWidth, height: imagePlaceholderHeight, border: imagePlaceholderBorder, borderRadius: imagePlaceholderBorderRadius, background: imagePlaceholderBackground }}
        />
      </Box>
      <Box className="self-stretch flex flex-col items-start justify-start !pt-0 !pb-Spacing-m !pl-Spacing-m !pr-Spacing-m gap-Spacing-xm">
        <Box className="self-stretch flex flex-col items-start justify-start gap-Spacing-xm">
          <Typography
            className="self-stretch relative overflow-hidden text-ellipsis whitespace-nowrap"
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "18px", fontWeight: "700" }}
          >
            iPhone 14 Pro Max
          </Typography>
          <Box className="self-stretch flex flex-row items-center justify-start gap-2">
            <div className="relative leading-Typography-Line-Height-p">
              From
            </div>
            <Typography
              className="w-[87.6px] relative inline-block"
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "18px", fontWeight: "700" }}
            >{`2,349 AED `}</Typography>
          </Box>
        </Box>
        <Box className="self-stretch flex flex-row items-center justify-start gap-Spacing-xs text-center text-Border-or-seperators-Colors-button-stroke-grey">
          <ColorSelector
            property1={colorSelectorProperty1}
            rectangleBoxBackgroundColor={colorSelectorRectangleBoxBackground}
          />
          <ColorSelector
            property1={colorSelectorProperty11}
            rectangleBoxBackgroundColor={colorSelectorRectangleBoxBackground1}
          />
          <ColorSelector
            property1={colorSelectorProperty12}
            rectangleBoxBackgroundColor={colorSelectorRectangleBoxBackground2}
          />
          <ColorSelector
            property1={colorSelectorProperty13}
            rectangleBoxBackgroundColor={colorSelectorRectangleBoxBackground3}
          />
          <ColorSelector
            property1={colorSelectorProperty14}
            rectangleBoxBackgroundColor={colorSelectorRectangleBoxBackground4}
          />
          <div className="relative leading-Typography-Line-Height-p font-semibold">
            +5
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCardHome;
