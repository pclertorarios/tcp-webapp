import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder15: "rounded-radius155",
  RoundedBorder20: "rounded-radius20",
  icbRoundedBorder10: "rounded-radius10",
  icbRoundedBorder20: "rounded-radius20",
};
const variants = {
  FillIndigo400: "bg-indigo_400",
  OutlineIndigo400: "border-bw3 border-indigo_400 border-solid text-indigo_400",
  FillGray50: "bg-gray_50 text-indigo_400",
  icbFillIndigo400: "bg-indigo_400",
  icbFillWhiteA7005b: "bg-white_A700_5b",
};
const sizes = {
  sm: "3xl:p-[10px] lg:p-[6px] xl:p-[8px] p-[9px]",
  md: "lg:p-[10px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  lg: "lg:p-[13px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  xl: "lg:pb-[12px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pt-[15px] xl:pt-[19px] pt-[22px] 3xl:pt-[26px] lg:px-[12px] xl:px-[16px] px-[18px] 3xl:px-[21px]",
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
    "RoundedBorder15",
    "RoundedBorder20",
    "icbRoundedBorder10",
    "icbRoundedBorder20",
  ]),
  variant: PropTypes.oneOf([
    "FillIndigo400",
    "OutlineIndigo400",
    "FillGray50",
    "icbFillIndigo400",
    "icbFillWhiteA7005b",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "icbRoundedBorder10",
  variant: "icbFillIndigo400",
  size: "sm",
};

export { Button };
