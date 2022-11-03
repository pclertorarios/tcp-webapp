import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder20: "rounded-radius20",
  icbRoundedBorder11: "rounded-radius11615",
  icbRoundedBorder20: "rounded-radius20",
};
const variants = {
  FillIndigo400: "bg-indigo_400 text-gray_51",
  icbFillIndigo400: "bg-indigo_400",
  icbFillWhiteA7005b: "bg-white_A700_5b",
};
const sizes = {
  sm: "lg:pb-[12px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pt-[15px] xl:pt-[19px] pt-[22px] 3xl:pt-[26px] lg:px-[12px] xl:px-[16px] px-[18px] 3xl:px-[21px]",
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
    "icbRoundedBorder11",
    "icbRoundedBorder20",
  ]),
  variant: PropTypes.oneOf([
    "FillIndigo400",
    "icbFillIndigo400",
    "icbFillWhiteA7005b",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn", "mdIcn", "lgIcn", "xlIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbRoundedBorder11",
  variant: "icbFillIndigo400",
  size: "smIcn",
};

export { Button };
