import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = { FillWhiteA700: "bg-white_A700" };
const shapes = { RoundedBorder20: "rounded-radius20" };
const sizes = { sm: "lg:p-[14px] xl:p-[17px] p-[20px] 3xl:p-[24px]" };

const FloatingInput = React.forwardRef(
  (
    {
      wrapClassName = "",
      className,
      name,
      labelClasses,
      wrapperClasses,
      labelText,
      defaultText,
      focusedClasses,
      errors = [],
      onChange,
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...rest
    },
    ref
  ) => {
    const [value, setValue] = React.useState(defaultText || "");

    function handleChange(e) {
      setValue(e.target.value);
      onChange?.(e.target.value);
    }

    return (
      <div
        className={`${wrapClassName} ${shapes[shape] || ""} ${
          variants[variant] || ""
        } ${sizes[size] || ""}`}
      >
        {!!prefix && prefix}
        <div className={`input-container group ${wrapperClasses}`}>
          <input
            ref={ref}
            name={name}
            onChange={handleChange}
            className={`${className}`}
            placeholder=" "
            value={value}
            {...rest}
          />
          <label
            className={`transform group-focus-within:translate-y-[4px] group-focus-within:scale-[0.8] ${labelClasses} ${
              value ? "translate-y-[4px] scale-[0.8]" : focusedClasses
            } `}
          >
            {labelText}
          </label>
        </div>
        {!!suffix && suffix}
        {!!errors && <ErrorMessage errors={errors} />}
      </div>
    );
  }
);

FloatingInput.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  labelClasses: PropTypes.string,
  wrapperClasses: PropTypes.string,
  labelText: PropTypes.string,
  defaultText: PropTypes.string,
  focusedClasses: PropTypes.string,
  onChange: PropTypes.func,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder20"]),
  variant: PropTypes.oneOf(["FillWhiteA700"]),
  size: PropTypes.oneOf(["sm"]),
};
FloatingInput.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  labelClasses: "",
  wrapperClasses: "",
  labelText: "",
  defaultText: "",
  focusedClasses: "",
  prefix: null,
  suffix: null,
  shape: "RoundedBorder20",
  variant: "FillWhiteA700",
  size: "sm",
};

export { FloatingInput };
