import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";

export type ImagePlaceholderType = {
  className?: string;
  text?: string;
  label?: boolean;
  icon?: boolean;
  lines?: boolean;
  icon1?: string;
  lines1?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  imagePlaceholderWidth?: CSSProperties["width"];
  imagePlaceholderHeight?: CSSProperties["height"];
  imagePlaceholderBorder?: CSSProperties["border"];
  imagePlaceholderBorderRadius?: CSSProperties["borderRadius"];
  imagePlaceholderBackgroundColor?: CSSProperties["backgroundColor"];
};

const ImagePlaceholder: FunctionComponent<ImagePlaceholderType> = ({
  className = "",
  property1 = "Default",
  text = "Image Placeholder",
  label = true,
  icon = false,
  lines = true,
  imagePlaceholderWidth,
  imagePlaceholderHeight,
  imagePlaceholderBorder,
  imagePlaceholderBorderRadius,
  imagePlaceholderBackgroundColor,
  icon1,
  lines1,
}) => {
  const imagePlaceholderStyle: CSSProperties = useMemo(() => {
    return {
      width: imagePlaceholderWidth,
      height: imagePlaceholderHeight,
      border: imagePlaceholderBorder,
      borderRadius: imagePlaceholderBorderRadius,
      backgroundColor: imagePlaceholderBackgroundColor,
    };
  }, [
    imagePlaceholderWidth,
    imagePlaceholderHeight,
    imagePlaceholderBorder,
    imagePlaceholderBorderRadius,
    imagePlaceholderBackgroundColor,
  ]);

  return (
    <Box
      className={`w-[212px] h-[146px] border-Text-color border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center relative text-center text-[12px] text-Text-color font-inter ${className}`}
      data-property1={property1}
      style={imagePlaceholderStyle}
    >
      {!!label && (
        <Box className="w-full h-full !!m-[0 important] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-center justify-center !p-2 box-border gap-2 z-[1]">
          <div className="relative font-medium inline-block min-h-[16px]">
            {text}
          </div>
          {!!icon && (
            <img className="w-4 h-4 object-cover" alt="" src={icon1} />
          )}
        </Box>
      )}
      {!!lines && (
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[0]"
          loading="lazy"
          alt=""
          src={lines1}
        />
      )}
    </Box>
  );
};

export default ImagePlaceholder;
