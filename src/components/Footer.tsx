import { FunctionComponent } from "react";
import { Typography, Button, Box } from "@mui/material";
import Logo from "./Logo";
import FooterLinks from "./FooterLinks";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`w-full bg-Texts-Colors-text-dark flex flex-col items-center justify-center px-4 md:px-12 pt-Spacing-3xl pb-Spacing-3xl box-border text-left text-Typography-Font-Sizes-p text-Base-Colors-tag-base-white font-Typography-Font-Family-Primary ${className}`}
    >
      <Box className="self-stretch bg-Base-Colors-base-dark border-Border-or-seperators-Colors-common-seperator-dark border-solid border-b-[1px] box-border flex flex-col items-start justify-start !pt-Spacing-3xl !pb-[38px] !pl-Spacing-3xl !pr-Spacing-3xl gap-Spacing-2xl max-w-full mq450:!pt-[26px] mq450:!pb-[25px] mq450:box-border mq800:gap-4">
        <section className="self-stretch flex flex-row items-start justify-start gap-[147px] text-left text-Typography-Font-Sizes-p text-Texts-Colors-text-light font-Typography-Font-Family-Primary mq450:gap-[18px] mq800:gap-[37px] mq1350:gap-[73px] mq1350:flex-wrap">
          <Box className="w-[233px] flex flex-col items-start justify-start gap-[31px]">
            <Logo property1="Variant2" union="/union-1.svg" />
            <div className="self-stretch relative leading-Typography-Line-Height-p">
              <Typography className="!m-0" variant="inherit">
                Revibe Technology FZ-LLC is
              </Typography>
              <Typography className="!m-0" variant="inherit">
                a registered company, licensed
              </Typography>
              <Typography className="!m-0" variant="inherit">
                by Dubai Development Authority
              </Typography>
            </div>
            <Button
              className="!pt-Spacing-m !pb-Spacing-m !pl-Spacing-xl !pr-Spacing-xl"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "linear-gradient(180deg, #7e19a0, #c82d8c)",
                borderRadius: "6px",
                "&:hover": {
                  background: "linear-gradient(180deg, #7e19a0, #c82d8c)",
                },
              }}
            >
              Sell your Device
            </Button>
          </Box>
          <FooterLinks
            aboutUs="About Us"
            aboutRevibe="About Revibe"
            shop="Shop"
            ourBlog="Our Blog"
            becomeASeller="Become A Seller"
          />
          <Box className="w-[228.3px] flex flex-col items-start justify-start gap-[39px]">
            <FooterLinks
              linksColumnWidth="unset"
              aboutUs="Information"
              aboutUsAlignSelf="unset"
              aboutRevibe="Contact"
              aboutRevibeAlignSelf="unset"
              shop={`Term & Condition`}
              shopAlignSelf="unset"
              ourBlog="Legal policy"
              ourBlogAlignSelf="unset"
              becomeASeller="Legal policy"
            />
            <img
              className="self-stretch max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/payment-wrapper@2x.png"
            />
          </Box>
          <FooterLinks
            linksColumnWidth="unset"
            aboutUs="Help"
            aboutUsAlignSelf="unset"
            aboutRevibe={`Help Center & FAQ`}
            aboutRevibeAlignSelf="unset"
            shop="Claims"
            shopAlignSelf="unset"
            ourBlog={`Refund & Return Policy`}
            ourBlogAlignSelf="unset"
            becomeASeller="Track your order"
          />
        </section>
        <Box className="flex flex-row items-start justify-start gap-[103px] max-w-full mq450:gap-[26px] mq1125:gap-[51px] mq1125:flex-wrap">
          <div className="w-[290px] relative leading-Typography-Line-Height-p inline-block shrink-0">
            King Salman Bin Abdulaziz Al Saud Street, Dubai Internet City -
            Dubai - United Arab Emirates
          </div>
          <Box className="flex flex-row items-start justify-start gap-[11px] max-w-full mq800:flex-wrap">
            <Box className="w-[157px] flex flex-col items-start justify-start gap-Spacing-l">
              <div className="relative leading-Typography-Line-Height-p">
                contact@revibe.me
              </div>
              <div className="relative leading-Typography-Line-Height-p">
                +971 4 517 7338
              </div>
            </Box>
            <Box className="w-[298px] flex flex-col items-start justify-start gap-Spacing-l text-Texts-Colors-text-grey-3">
              <div className="self-stretch relative leading-Typography-Line-Height-p">
                (Reply within 1 business day)
              </div>
              <div className="self-stretch relative leading-Typography-Line-Height-p">
                (Monday to Friday from 9:30am to 5:30pm)
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
      <section className="self-stretch bg-Base-Colors-base-dark flex flex-row items-center justify-between !pt-Spacing-l !pb-Spacing-l !pl-Spacing-3xl !pr-Spacing-3xl gap-0 text-left text-Typography-Font-Sizes-p text-Border-or-seperators-Colors-button-stroke-grey font-Typography-Font-Family-Primary mq450:flex-wrap">
        <div className="relative leading-Typography-Line-Height-p">
          © 2024 Revibe All Rights Reserved
        </div>
        <Box className="flex flex-row items-center justify-start gap-Spacing-m">
          <img
            className="w-12 rounded-[40px] max-h-full"
            loading="lazy"
            alt=""
            src="/facebook-icon.svg"
          />
          <img
            className="w-12 rounded-[40px] max-h-full"
            loading="lazy"
            alt=""
            src="/instagram-icon.svg"
          />
        </Box>
      </section>
    </footer>
  );
};

export default Footer;
