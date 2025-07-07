import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type DiscoutnTagType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const DiscoutnTag: FunctionComponent<DiscoutnTagType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <Box
      className={`rounded-Border-Radius-m [background:linear-gradient(270deg,_#7e19a0,_#c82d8c)] flex flex-row items-center justify-center !p-Spacing-2xs text-center text-Typography-Font-Sizes-p text-Texts-Colors-text-light font-Typography-Font-Family-Primary ${className}`}
      data-property1={property1}
    >
      <div className="relative leading-Typography-Line-Height-p font-medium">
        -60% vs new
      </div>
    </Box>
  );
};

export default DiscoutnTag;
