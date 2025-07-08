import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import DevicesVerifiedItemContent from "./DevicesVerifiedItemContent";

export type DevicesVerifiedContainerType = {
  className?: string;
};

const DevicesVerifiedContainer: FunctionComponent<
  DevicesVerifiedContainerType
> = ({ className = "" }) => {
  return (
    <main
      className={`w-full bg-Base-Colors-base-light flex flex-col items-start justify-start !pt-Spacing-3xl !pb-0 px-4 md:px-12 box-border shrink-0 max-w-full text-center text-Typography-Font-Sizes-h3 font-Typography-Font-Family-Primary ${className}`}
    >
      <Box className="self-stretch rounded-xl bg-Base-Colors-base-light-violet flex flex-col items-center justify-center !pt-Spacing-2xl !pb-Spacing-2xl px-4 md:px-16 box-border max-w-full mq800:!pt-[21px] mq800:!pb-[21px] mq800:box-border mq1350:px-7 mq1350:box-border">
        <Box className="self-stretch flex flex-col items-center justify-start gap-Spacing-2xl max-w-full mq800:gap-4">
          <Typography
            className="!m-0 self-stretch relative mq450:text-[22px] mq450:leading-[27px]"
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "700", lineHeight: "34px" }}
          >
            All Our Devices Are Original And Verified By Our{` `}Experts
          </Typography>
          <section className="self-stretch flex flex-row items-center justify-center gap-[69px] max-w-full text-center text-Typography-Font-Sizes-h5 text-Text-color font-Typography-Font-Family-Primary mq450:gap-[17px] mq800:gap-[34px] mq1350:flex-wrap">
            <Box className="w-[316px] flex flex-col items-center justify-start !pt-5 !pb-5 !pl-0 !pr-0 box-border gap-Spacing-4xl mq450:gap-6">
              <DevicesVerifiedItemContent
                devicesVerifiedItemIcon="/devices-verified-item-icon.svg"
                devicesVerifiedItemTitle="Risk Free"
              />
              <DevicesVerifiedItemContent
                devicesVerifiedItemContentWidth="unset"
                devicesVerifiedItemContentAlignSelf="stretch"
                devicesVerifiedItemIcon="/devices-verified-item-icon-1.svg"
                devicesVerifiedItemTitle="Verified Devices- One by One"
              />
            </Box>
            <img
              className="h-[361px] w-[420px] object-cover max-w-full"
              loading="lazy"
              alt=""
              src={`${import.meta.env.BASE_URL}image@2x.png`}
            />
            <Box className="w-[355px] flex flex-col items-center justify-start gap-Spacing-4xl max-w-full mq450:gap-6">
              <DevicesVerifiedItemContent
                devicesVerifiedItemContentWidth="unset"
                devicesVerifiedItemContentAlignSelf="stretch"
                devicesVerifiedItemIcon="/devices-verified-item-icon-2.svg"
                devicesVerifiedItemTitle="Only from the best"
              />
              <Box className="w-[316px] flex flex-col items-center justify-start gap-Spacing-l">
                <img
                  className="w-12 h-12 relative"
                  loading="lazy"
                  alt=""
                  src={`${import.meta.env.BASE_URL}devices-verified-item-icon-3.svg`}
                />
                <Typography
                  className="self-stretch relative"
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "18px", fontWeight: "700" }}
                >
                  Always here for you
                </Typography>
                <div className="self-stretch relative">
                  Proactive customer service to answer and solve any concern
                </div>
              </Box>
            </Box>
          </section>
        </Box>
      </Box>
    </main>
  );
};

export default DevicesVerifiedContainer;
