import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";

export type FooterLinksType = {
  className?: string;
  aboutUs?: string;
  aboutRevibe?: string;
  shop?: string;
  ourBlog?: string;
  becomeASeller?: string;

  /** Style props */
  linksColumnWidth?: CSSProperties["width"];
  aboutUsAlignSelf?: CSSProperties["alignSelf"];
  aboutRevibeAlignSelf?: CSSProperties["alignSelf"];
  shopAlignSelf?: CSSProperties["alignSelf"];
  ourBlogAlignSelf?: CSSProperties["alignSelf"];
};

const FooterLinks: FunctionComponent<FooterLinksType> = ({
  className = "",
  linksColumnWidth,
  aboutUs,
  aboutUsAlignSelf,
  aboutRevibe,
  aboutRevibeAlignSelf,
  shop,
  shopAlignSelf,
  ourBlog,
  ourBlogAlignSelf,
  becomeASeller,
}) => {
  const linksColumnStyle: CSSProperties = useMemo(() => {
    return {
      width: linksColumnWidth,
    };
  }, [linksColumnWidth]);

  const aboutUsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: aboutUsAlignSelf,
    };
  }, [aboutUsAlignSelf]);

  const aboutRevibeStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: aboutRevibeAlignSelf,
    };
  }, [aboutRevibeAlignSelf]);

  const shopStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: shopAlignSelf,
    };
  }, [shopAlignSelf]);

  const ourBlogStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: ourBlogAlignSelf,
    };
  }, [ourBlogAlignSelf]);

  return (
    <Box
      className={`w-[118px] flex flex-col items-start justify-start gap-[13px] text-left text-Typography-Font-Sizes-h4 text-Texts-Colors-text-light font-Typography-Font-Family-Primary ${className}`}
      style={linksColumnStyle}
    >
      <Typography
        className="!m-0 self-stretch relative"
        variant="inherit"
        variantMapping={{ inherit: "h3" }}
        sx={{ fontWeight: "600", lineHeight: "29px" }}
        style={aboutUsStyle}
      >
        {aboutUs}
      </Typography>
      <Box className="self-stretch flex flex-col items-start justify-start gap-3.5 text-Typography-Font-Sizes-p">
        <div
          className="self-stretch relative leading-Typography-Line-Height-p"
          style={aboutRevibeStyle}
        >
          {aboutRevibe}
        </div>
        <div
          className="self-stretch relative leading-Typography-Line-Height-p"
          style={shopStyle}
        >
          {shop}
        </div>
        <div
          className="self-stretch relative leading-Typography-Line-Height-p"
          style={ourBlogStyle}
        >
          {ourBlog}
        </div>
        <div className="relative leading-Typography-Line-Height-p">
          {becomeASeller}
        </div>
      </Box>
    </Box>
  );
};

export default FooterLinks;
