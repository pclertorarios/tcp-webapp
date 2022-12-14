import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA700: "bg-white_A700",
  OutlineRed200: "bg-white_A700 border border-red_200 border-solid",
  FillGray50: "bg-gray_50",
};
const shapes = { RoundedBorder20: "rounded-radius20" };
const sizes = {
  sm: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  md: "lg:p-[14px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder20"]),
  variant: PropTypes.oneOf(["FillWhiteA700", "OutlineRed200", "FillGray50"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder20",
  variant: "FillWhiteA700",
  size: "md",
};

export { Input };
