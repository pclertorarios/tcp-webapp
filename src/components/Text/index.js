import React from "react";
const variantClasses = {
  h1: "font-normal 3xl:text-[10px] lg:text-[6px] xl:text-[8px] text-[9px]",
  h2: "font-bold lg:text-[45px] xl:text-[56px] text-[64px] 3xl:text-[76px]",
  h3: "font-bold lg:text-[34px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h4: "font-bold lg:text-[25px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  h5: "font-bold lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h6: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body1: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body2: "font-medium xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body3: "xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
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
