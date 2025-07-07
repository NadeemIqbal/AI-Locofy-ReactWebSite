import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type LogoType = {
  className?: string;
  union?: string;

  /** Variant props */
  property1?: "Default" | "Variant2";
};

const Logo: FunctionComponent<LogoType> = ({
  className = "",
  property1 = "Default",
  union,
}) => {
  return (
    <Box
      className={`w-[122px] flex flex-col items-start justify-start ${className}`}
      data-property1={property1}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src={union}
      />
    </Box>
  );
};

export default Logo;
