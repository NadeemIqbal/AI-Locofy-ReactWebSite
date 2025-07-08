import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";

export type DevicesVerifiedItemContentType = {
  className?: string;
  devicesVerifiedItemIcon?: string;
  devicesVerifiedItemTitle?: string;

  /** Style props */
  devicesVerifiedItemContentWidth?: CSSProperties["width"];
  devicesVerifiedItemContentAlignSelf?: CSSProperties["alignSelf"];
};

const DevicesVerifiedItemContent: FunctionComponent<
  DevicesVerifiedItemContentType
> = ({
  className = "",
  devicesVerifiedItemContentWidth,
  devicesVerifiedItemContentAlignSelf,
  devicesVerifiedItemIcon,
  devicesVerifiedItemTitle,
}) => {
  const devicesVerifiedItemContentStyle: CSSProperties = useMemo(() => {
    return {
      width: devicesVerifiedItemContentWidth,
      alignSelf: devicesVerifiedItemContentAlignSelf,
    };
  }, [devicesVerifiedItemContentWidth, devicesVerifiedItemContentAlignSelf]);

  return (
    <Box
      className={`w-[258px] flex flex-col items-center justify-start gap-Spacing-l text-center text-Typography-Font-Sizes-h5 text-Text-color font-Typography-Font-Family-Primary ${className}`}
      style={devicesVerifiedItemContentStyle}
    >
      <img
        className="w-12 h-12 relative"
        loading="lazy"
        alt=""
        src={devicesVerifiedItemIcon?.startsWith('/') ? `${import.meta.env.BASE_URL}${devicesVerifiedItemIcon.slice(1)}` : devicesVerifiedItemIcon}
      />
      <Typography
        className="self-stretch relative"
        variant="inherit"
        variantMapping={{ inherit: "b" }}
        sx={{ lineHeight: "18px", fontWeight: "700" }}
      >
        {devicesVerifiedItemTitle}
      </Typography>
      <div className="self-stretch relative text-Typography-Font-Sizes-p leading-Typography-Line-Height-p">
        <Typography className="!m-0" variant="inherit">
          10 days to change your mind
        </Typography>
        <Typography
          className="!m-0"
          variant="inherit"
        >{`& 1 year warranty`}</Typography>
      </div>
    </Box>
  );
};

export default DevicesVerifiedItemContent;
