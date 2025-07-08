import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import ImagePlaceholder from "./ImagePlaceholder";

export type CategoryListItemType = {
  className?: string;
  hotDeals?: string;
  text?: string;
  label?: boolean;
  icon?: boolean;
  lines?: boolean;
  imagePlaceholderWidth?: string;
  imagePlaceholderHeight?: string;
  imagePlaceholderBorder?: string;
  imagePlaceholderBorderRadius?: string;
  imagePlaceholderBackground?: string;
};

const categoryImages: Record<string, string> = {
  'Hot Deals': 'https://cdn-icons-png.flaticon.com/512/833/833472.png',
  'iPhone': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1617135051000',
  'Samsung': 'https://images.samsung.com/is/image/samsung/p6pim/levant/galaxy-s23/gallery/levant-galaxy-s23-s911-sm-s911bzadegy-thumb-535678237',
  'Macbooks': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16touch-silver-select-202110_GEO_EMEA_LANG_EN?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788574000',
  'Laptops': 'https://cdn-icons-png.flaticon.com/512/1792/1792864.png',
  'iPads': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-og-202210?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1665004540312',
  'Apple Watches': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU93_VW_34FR+watch-44-alum-silver-nc-se_VW_34FR_WF_CO_GEO_EMEA_LANG_EN?wid=940&hei=1112&fmt=png-alpha&.v=1660778403946',
  'Accessories': 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png',
  'Gaming': 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
};

const CategoryListItem: FunctionComponent<CategoryListItemType> = ({
  className = "",
  hotDeals,
  text,
  label,
  icon,
  lines,
  imagePlaceholderWidth,
  imagePlaceholderHeight,
  imagePlaceholderBorder,
  imagePlaceholderBorderRadius,
  imagePlaceholderBackground,
}) => {
  return (
    <Box
      className={`h-[145px] rounded-Border-Radius-l bg-Base-Colors-base-grey border-Border-or-seperators-Colors-button-stroke-grey-2 border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-start !pt-0 !pb-Spacing-l !pl-Spacing-l !pr-Spacing-l text-center text-Typography-Font-Sizes-p text-Texts-Colors-text-dark font-Typography-Font-Family-Primary ${className}`}
    >
      {hotDeals && categoryImages[hotDeals] && (
        <img
          src={categoryImages[hotDeals]}
          alt={hotDeals}
          style={{ width: '48px', height: '48px', objectFit: 'contain', margin: '12px auto 8px' }}
        />
      )}
      <ImagePlaceholder
        text={text}
        label={label}
        icon={icon}
        lines={lines}
        imagePlaceholderWidth={imagePlaceholderWidth}
        imagePlaceholderHeight={imagePlaceholderHeight}
        imagePlaceholderBorder={imagePlaceholderBorder}
        imagePlaceholderBorderRadius={imagePlaceholderBorderRadius}
        imagePlaceholderBackgroundColor={imagePlaceholderBackground}
        lines1="/lines.svg"
      />
      <Typography
        className="relative"
        variant="inherit"
        variantMapping={{ inherit: "b" }}
        sx={{ lineHeight: "18px", fontWeight: "700" }}
      >
        {hotDeals}
      </Typography>
    </Box>
  );
};

export default CategoryListItem;
