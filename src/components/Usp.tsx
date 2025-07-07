import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";

export type UspType = {
  className?: string;
  monthWarranty?: string;
  monthsWarranty?: string;
};

const Usp: FunctionComponent<UspType> = ({
  className = "",
  monthWarranty,
  monthsWarranty,
}) => {
  return (
    <Box
      className={`flex flex-row items-center justify-start gap-Spacing-s text-left text-Typography-Font-Sizes-p text-Texts-Colors-text-dark font-Typography-Font-Family-Primary ${className}`}
    >
      <img
        className="h-[42px] w-[42px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={monthWarranty}
      />
      <Typography
        className="relative"
        variant="inherit"
        variantMapping={{ inherit: "b" }}
        sx={{ lineHeight: "18px", fontWeight: "700" }}
      >
        {monthsWarranty}
      </Typography>
    </Box>
  );
};

export default Usp;
