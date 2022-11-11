import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder20: "rounded-radius20",
  RoundedBorder15: "rounded-radius155",
  icbRoundedBorder10: "rounded-radius10",
  icbRoundedBorder20: "rounded-radius20",
};
const variants = {
  FillIndigo400: "bg-indigo_400",
  FillGray50: "bg-gray_50 text-indigo_400",
  OutlineIndigo400:
    "bg-white_A700 border-bw3 border-indigo_400 border-solid text-indigo_400",
  FillGray800: "bg-gray_800",
  OutlineGray800: "border-bw3 border-gray_800 border-solid text-gray_800",
  OutlineIndigo4001_2:
    "border-bw3 border-indigo_400 border-solid text-indigo_400",
  icbFillIndigo400: "bg-indigo_400",
  icbFillWhiteA7005b: "bg-white_A700_5b",
  icbFillGray800: "bg-gray_800",
};
const sizes = {
  sm: "lg:p-[5px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  md: "xl:p-[12px] p-[14px] 3xl:p-[16px] lg:p-[9px]",
  lg: "lg:p-[12px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
  smIcn: "p-[3px]",
  mdIcn: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  lgIcn: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  xlIcn: "lg:p-[14px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder20",
    "RoundedBorder15",
    "icbRoundedBorder10",
    "icbRoundedBorder20",
  ]),
  variant: PropTypes.oneOf([
    "FillIndigo400",
    "FillGray50",
    "OutlineIndigo400",
    "FillGray800",
    "OutlineGray800",
    "OutlineIndigo4001_2",
    "icbFillIndigo400",
    "icbFillWhiteA7005b",
    "icbFillGray800",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn", "lgIcn", "xlIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
