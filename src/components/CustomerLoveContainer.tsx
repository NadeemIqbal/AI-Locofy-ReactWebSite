import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";

export type CustomerLoveContainerType = {
  className?: string;
};

const CustomerLoveContainer: FunctionComponent<CustomerLoveContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1440px] bg-Base-Colors-tag-base-white flex flex-col items-start justify-start !pt-Spacing-3xl !pb-0 !pl-Spacing-3xl !pr-Spacing-3xl box-border gap-Spacing-xl max-w-full text-left text-Typography-Font-Sizes-h5 text-Text-color font-Typography-Font-Family-Primary ${className}`}
    >
      <Typography
        className="self-stretch relative"
        variant="inherit"
        variantMapping={{ inherit: "b" }}
        sx={{ lineHeight: "18px", fontWeight: "700" }}
      >
        Why Our Customers Love Us
      </Typography>
      <Box className="self-stretch flex flex-row items-center justify-start flex-wrap content-center relative gap-Spacing-l max-w-full text-Typography-Font-Sizes-h2 text-Texts-Colors-text-light">
        <Box className="h-[421px] w-[329px] rounded-Border-Radius-2xl [background:linear-gradient(180deg,_#7f19a0,_#c82d8c)] flex flex-col items-start justify-start !pt-[83px] !pb-[83px] !pl-[39px] !pr-5 box-border relative gap-2 max-w-full z-[0]">
          <img
            className="w-full h-full absolute !!m-[0 important] top-[0px] left-[0px] object-cover z-[0]"
            loading="lazy"
            alt=""
            src="/rectangle@2x.png"
          />
          <Typography
            className="!m-0 relative z-[1] mq450:text-[19px] mq450:leading-[23px] mq800:text-[26px] mq800:leading-[31px]"
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "700", lineHeight: "39px" }}
          >
            <Typography className="!m-0" variant="inherit">
              Spreading love
            </Typography>
            <Typography className="!m-0" variant="inherit">
              Across
            </Typography>
          </Typography>
        </Box>
        <Box className="self-stretch flex-1 rounded-Border-Radius-2xl bg-Base-Colors-base-grey overflow-hidden flex flex-row items-center justify-start !p-Spacing-xl box-border gap-4 min-w-[660px] z-[1] mq450:!pt-5 mq450:!pb-5 mq450:box-border mq450:grid-cols-[minmax(196px,_1fr)] mq800:min-w-full mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(196px,_341px))] mq1350:flex-wrap">
          <img
            className="h-[373px] w-[262px] rounded-Border-Radius-2xl overflow-hidden shrink-0 object-cover mq450:w-full"
            loading="lazy"
            alt=""
            src="/ugc-video@2x.png"
          />
          <img
            className="w-[262px] rounded-Border-Radius-2xl max-h-full overflow-hidden shrink-0 object-cover mq450:w-full"
            loading="lazy"
            alt=""
            src="/ugc-video-1@2x.png"
          />
          <img
            className="w-[262px] rounded-Border-Radius-2xl max-h-full overflow-hidden shrink-0 object-cover mq450:w-full"
            loading="lazy"
            alt=""
            src="/ugc-video-2@2x.png"
          />
          <img
            className="w-[262px] rounded-Border-Radius-2xl max-h-full overflow-hidden shrink-0 object-cover mq450:w-full"
            alt=""
            src="/ugc-video-3@2x.png"
          />
        </Box>
        <img
          className="h-[42px] w-[42px] absolute !!m-[0 important] top-[calc(50%_-_21px)] left-[1339px] rounded-[22px] z-[2]"
          loading="lazy"
          alt=""
          src="/categories-arrow-button.svg"
        />
      </Box>
    </section>
  );
};

export default CustomerLoveContainer;
