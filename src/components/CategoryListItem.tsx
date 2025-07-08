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
  'Hot Deals': 'https://cdn-icons-png.flaticon.com/512/616/616490.png',
  'iPhone': 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
  'Samsung': 'https://cdn-icons-png.flaticon.com/512/882/882704.png',
  'Macbooks': 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
  'Laptops': 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
  'iPads': 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
  'Apple Watches': 'https://cdn-icons-png.flaticon.com/512/3103/3103446.png',
  'Accessories': 'https://cdn-icons-png.flaticon.com/512/1042/1042330.png',
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
