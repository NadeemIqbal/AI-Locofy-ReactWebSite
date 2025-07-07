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
