import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder20: "rounded-radius20",
  icbRoundedBorder10: "rounded-radius10",
  icbRoundedBorder20: "rounded-radius20",
};
const variants = {
  FillGray800: "bg-gray_800 text-white_A700",
  icbFillGray800: "bg-gray_800",
  icbFillWhiteA7005b: "bg-white_A700_5b",
};
const sizes = {
  sm: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  smIcn: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  mdIcn: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  lgIcn: "lg:p-[14px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
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
    "icbRoundedBorder10",
    "icbRoundedBorder20",
  ]),
  variant: PropTypes.oneOf([
    "FillGray800",
    "icbFillGray800",
    "icbFillWhiteA7005b",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
