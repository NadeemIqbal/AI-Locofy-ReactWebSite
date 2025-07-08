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
  'iPhone': 'https://iplanet.one/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN.jpg?v=1691142210&width=1920',
  'Samsung': 'https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png',
  'Macbooks': 'https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.landing-big_2x.jpg',
  'Laptops': 'https://blog.techbazaar.pk/wp-content/uploads/2024/09/budget-laptop-2.webp',
  'iPads': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYhoEMalf2MG3C7UYYs_MrCa7Yow32Nj3yu-1Sl8d0dqykoOge-nYHHOhRkuyeHmL9mw&usqp=CAU',
  'Apple Watches': 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg',
  'Accessories': 'https://mate.net.in/public/uploads/all/UsReqZvujmEjMUb27qlTtRcCG8Pf18SyULO4HW7U.jpg',
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
