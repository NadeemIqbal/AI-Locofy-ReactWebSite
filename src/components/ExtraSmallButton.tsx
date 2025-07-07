import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type ExtraSmallButtonType = {
  className?: string;
};

const ExtraSmallButton: FunctionComponent<ExtraSmallButtonType> = ({
  className = "",
}) => {
  return (
    <Box
      className={`rounded-Border-Radius-4xl bg-Base-Colors-button-base-white border-Border-or-seperators-Colors-button-stroke-grey border-solid border-[1px] flex flex-row items-center justify-center !pt-Spacing-xs !pb-Spacing-xs !pl-Spacing-s !pr-Spacing-s text-center text-Typography-Font-Sizes-p text-Border-or-seperators-Colors-button-stroke-grey font-Typography-Font-Family-Primary ${className}`}
    >
      <div className="relative leading-Typography-Line-Height-p font-medium">
        See All
      </div>
    </Box>
  );
};

export default ExtraSmallButton;
