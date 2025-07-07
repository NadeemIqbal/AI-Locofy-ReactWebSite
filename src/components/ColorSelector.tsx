import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";

export type ColorSelectorType = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  rectangleBoxBackgroundColor?: CSSProperties["backgroundColor"];
};

const ColorSelector: FunctionComponent<ColorSelectorType> = ({
  className = "",
  property1 = "Default",
  rectangleBoxBackgroundColor,
}) => {
  const rectangleBoxStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleBoxBackgroundColor,
    };
  }, [rectangleBoxBackgroundColor]);

  return (
    <Box
      className={`w-[26px] relative rounded-[20px] border-Border-or-seperators-Colors-button-stroke-grey-3 border-solid border-[1px] box-border h-[26px] ${className}`}
      data-property1={property1}
    >
      <Box
        className="absolute top-[calc(50%_-_10.8px)] left-[calc(50%_-_10.9px)] rounded-[45px] bg-brown w-[21.7px] h-[21.7px]"
        style={rectangleBoxStyle}
      />
    </Box>
  );
};

export default ColorSelector;
