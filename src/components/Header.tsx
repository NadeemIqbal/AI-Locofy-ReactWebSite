import { FunctionComponent } from "react";
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Logo from "./Logo";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start text-left text-Typography-Font-Sizes-p text-Texts-Colors-text-light font-Typography-Font-Family-Primary ${className}`}
    >
      <Box className="self-stretch bg-Secondry-Secondry flex flex-col items-start justify-start !pt-0 !pb-0 !pl-Spacing-3xl !pr-Spacing-3xl">
        <Box className="self-stretch bg-Secondry-Secondry flex flex-row items-center justify-center !pt-Spacing-2xs !pb-Spacing-2xs !pl-[60px] !pr-[60px] gap-Spacing-xs mq800:!pl-[30px] mq800:!pr-[30px] mq800:box-border">
          <Typography
            className="relative"
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "18px", fontWeight: "700" }}
          >{`Exclusive Sale: Get 75 AED OFF! Use Code `}</Typography>
          <Box className="rounded-Border-Radius-2xl bg-Base-Colors-tag-base-white flex flex-row items-center justify-center !pt-Spacing-3xs !pb-Spacing-3xs !pl-Spacing-xs !pr-Spacing-xs text-Texts-Colors-text-dark">
            <Typography
              className="relative"
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "18px", fontWeight: "700" }}
            >
              CARD75
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="self-stretch bg-Texts-Colors-text-light flex flex-col items-start justify-start !pt-0 !pb-0 !pl-Spacing-3xl !pr-Spacing-3xl text-Texts-Colors-text-dark">
        <Box className="self-stretch h-20 flex flex-row items-center justify-between !pt-4 !pb-4 !pl-0 !pr-0 box-border gap-0">
          <Logo property1="Default" union="/union.svg" />
          <TextField
            className="[border:none] bg-[transparent] w-[720px] font-[Montserrat] text-[14px] text-Texts-Colors-text-dark"
            placeholder="Search..."
            variant="outlined"
            slotProps={{
              input: {
                endAdornment: (
                  <img width="24px" height="24px" src="/search.svg" />
                ),
              },
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "46px",
                backgroundColor: "#f1ecf9",
                paddingRight: "12px",
                borderRadius: "12px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "#121212" },
              width: "720px",
            }}
          />
          <Box className="flex flex-row items-center justify-end gap-Spacing-xm">
            <FormControl
              className="font-[Cairo] font-medium text-[14px] text-Texts-Colors-text-dark"
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "54px",
                height: "26px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "26px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "26px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "26px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "26px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#121212",
                  fontSize: 14,
                  fontWeight: "Medium",
                  fontFamily: "Cairo",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img width="12px" height="12px" src="/arrow.svg" style={{}} />
                )}
              >
                <MenuItem>العربية</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <Box className="flex flex-row items-center justify-start gap-Spacing-2xs">
              <Box className="flex flex-row items-center justify-start gap-1">
                <img
                  className="w-7 relative h-[26px] overflow-hidden shrink-0"
                  alt=""
                  src="/flag.svg"
                />
                <div className="relative leading-Typography-Line-Height-p font-medium">
                  UAE
                </div>
              </Box>
              <img className="h-3 w-3 relative" alt="" src="/arrow-1.svg" />
            </Box>
            <img
              className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
              alt=""
              src="/bag.svg"
            />
          </Box>
        </Box>
      </Box>
      <Box className="self-stretch bg-Texts-Colors-text-light flex flex-col items-start justify-start !pt-0 !pb-0 !pl-Spacing-3xl !pr-Spacing-3xl">
        <nav className="!m-0 self-stretch bg-Texts-Colors-text-light border-gainsboro-100 border-solid border-t-[1px] flex flex-row items-center justify-start !pt-1.5 !pb-Spacing-s !pl-0 !pr-0 gap-Spacing-4xl text-left text-Typography-Font-Sizes-p text-Texts-Colors-text-dark font-Typography-Font-Family-Primary mq800:gap-6">
          <Box className="flex flex-row items-center justify-start">
            <div className="w-[77.7px] relative leading-Typography-Line-Height-p font-medium inline-block shrink-0">
              Hot Deals
            </div>
            <img
              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/hotdealicon.svg"
            />
          </Box>
          <div className="w-[56.6px] relative leading-Typography-Line-Height-p font-medium inline-block shrink-0">
            Iphone
          </div>
          <div className="w-[75.5px] relative leading-Typography-Line-Height-p font-medium inline-block shrink-0">
            Samsung
          </div>
          <div className="w-[89.9px] relative leading-Typography-Line-Height-p font-medium inline-block shrink-0">
            Mackbooks
          </div>
          <div className="w-[64.4px] relative leading-Typography-Line-Height-p font-medium inline-block shrink-0">
            Laptops
          </div>
          <div className="w-[43.3px] relative leading-Typography-Line-Height-p font-medium inline-block shrink-0">
            Ipads
          </div>
          <div className="w-[92.1px] relative leading-Typography-Line-Height-p font-medium inline-block shrink-0">
            Accessiores
          </div>
          <div className="w-[64.4px] relative leading-Typography-Line-Height-p font-medium inline-block shrink-0">
            Gaming
          </div>
          <div className="relative leading-Typography-Line-Height-p font-medium">
            For Businesses
          </div>
          <div className="w-[37.7px] relative leading-Typography-Line-Height-p font-medium inline-block shrink-0">
            Help
          </div>
          <div className="relative leading-Typography-Line-Height-p font-medium">
            Sell your Device
          </div>
        </nav>
      </Box>
    </header>
  );
};

export default Header;
