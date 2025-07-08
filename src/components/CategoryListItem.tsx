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
  'Hot Deals': `${import.meta.env.BASE_URL}Hot deal icon-cat.svg`,
  'iPhone': `${import.meta.env.BASE_URL}iphone-cat.svg`,
  'Samsung': `${import.meta.env.BASE_URL}samsung-cat.svg`,
  'Macbooks': `${import.meta.env.BASE_URL}macbook-cat.svg`,
  'Laptops': `${import.meta.env.BASE_URL}laptops-cat.svg`,
  'iPads': `${import.meta.env.BASE_URL}ipads-cat.svg`,
  'Apple Watches': 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg',
  'Accessories': `${import.meta.env.BASE_URL}accessories-cat.svg`,
  'Gaming': `${import.meta.env.BASE_URL}gaming-cat.svg`,
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
