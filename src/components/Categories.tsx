import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import CategoryListItem from "./CategoryListItem";

export type CategoriesType = {
  className?: string;
};

const Categories: FunctionComponent<CategoriesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-Base-Colors-base-light overflow-hidden flex flex-col items-start justify-center !p-Spacing-3xl relative gap-Spacing-xl text-left text-Typography-Font-Sizes-h5 text-Texts-Colors-text-dark font-Typography-Font-Family-Primary ${className}`}
    >
      <Typography
        className="relative z-[0]"
        variant="inherit"
        variantMapping={{ inherit: "b" }}
        sx={{ lineHeight: "18px", fontWeight: "700" }}
      >
        Shop by Categories
      </Typography>
      <Box className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-Spacing-l z-[1] mq1350:flex-wrap mq1350:justify-center">
        <CategoryListItem
          hotDeals="Hot Deals"
          text="136 × 116"
          label
          icon={false}
          lines
          imagePlaceholderWidth="136px"
          imagePlaceholderHeight="116px"
          imagePlaceholderBorder="unset"
          imagePlaceholderBorderRadius="1px"
          imagePlaceholderBackground="#eee"
        />
        <CategoryListItem
          hotDeals="iPhone"
          text="136 × 116"
          label
          icon={false}
          lines
          imagePlaceholderWidth="136px"
          imagePlaceholderHeight="116px"
          imagePlaceholderBorder="unset"
          imagePlaceholderBorderRadius="1px"
          imagePlaceholderBackground="#eee"
        />
        <CategoryListItem
          hotDeals="Samsung"
          text="136 × 116"
          label
          icon={false}
          lines
          imagePlaceholderWidth="136px"
          imagePlaceholderHeight="116px"
          imagePlaceholderBorder="unset"
          imagePlaceholderBorderRadius="1px"
          imagePlaceholderBackground="#eee"
        />
        <CategoryListItem
          hotDeals="Macbooks"
          text="136 × 116"
          label
          icon={false}
          lines
          imagePlaceholderWidth="136px"
          imagePlaceholderHeight="116px"
          imagePlaceholderBorder="unset"
          imagePlaceholderBorderRadius="1px"
          imagePlaceholderBackground="#eee"
        />
        <CategoryListItem
          hotDeals="Gaming"
          text="136 × 116"
          label
          icon={false}
          lines
          imagePlaceholderWidth="136px"
          imagePlaceholderHeight="116px"
          imagePlaceholderBorder="unset"
          imagePlaceholderBorderRadius="1px"
          imagePlaceholderBackground="#eee"
        />
        <CategoryListItem
          hotDeals="Laptops"
          text="136 × 116"
          label
          icon={false}
          lines
          imagePlaceholderWidth="136px"
          imagePlaceholderHeight="116px"
          imagePlaceholderBorder="unset"
          imagePlaceholderBorderRadius="1px"
          imagePlaceholderBackground="#eee"
        />
        <CategoryListItem
          hotDeals="iPads"
          text="136 × 116"
          label
          icon={false}
          lines
          imagePlaceholderWidth="136px"
          imagePlaceholderHeight="116px"
          imagePlaceholderBorder="unset"
          imagePlaceholderBorderRadius="1px"
          imagePlaceholderBackground="#eee"
        />
        <CategoryListItem
          hotDeals="Apple Watches"
          text="136 × 116"
          label
          icon={false}
          lines
          imagePlaceholderWidth="136px"
          imagePlaceholderHeight="116px"
          imagePlaceholderBorder="unset"
          imagePlaceholderBorderRadius="1px"
          imagePlaceholderBackground="#eee"
        />
        <CategoryListItem
          hotDeals="Accessories"
          text="136 × 116"
          label
          icon={false}
          lines
          imagePlaceholderWidth="136px"
          imagePlaceholderHeight="116px"
          imagePlaceholderBorder="unset"
          imagePlaceholderBorderRadius="1px"
          imagePlaceholderBackground="#eee"
        />
      </Box>
      <img
        className="w-[42px] h-[42px] absolute !!m-[0 important] top-[calc(50%_-_0px)] right-[19px] rounded-[22px] z-[2]"
        alt=""
        src="/categories-arrow-button.svg"
      />
    </section>
  );
};

export default Categories;
