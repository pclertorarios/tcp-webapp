import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[34px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h2: "font-bold lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h3: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  h4: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  h5: "font-medium xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
