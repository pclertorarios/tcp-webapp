import React from "react";

import { Stack, Img, Column, Text, SelectBox, Input } from "components";
import Footer from "components/Footer/Footer";

const RegsitroPage = () => {
  return (
    <>
      <Stack className="bg-gray_50 font-montserrat xl:h-[1013px] 2xl:h-[1139px] 3xl:h-[1367px] lg:h-[810px] mx-[auto] pl-[1px] w-[100%]">
        <Img
          src="images/img_pattern.png"
          className="absolute xl:h-[1013px] 2xl:h-[1139px] 3xl:h-[1367px] lg:h-[810px] w-[100%]"
          alt="pattern"
        />
        <Footer className="absolute bottom-[12%] inset-x-[0] mx-[auto] w-[81%]" />
        <Column className="absolute justify-start left-[10%] top-[4%] w-[37%]">
          <Img
            src="images/img_d01bb442c0777d9.png"
            className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[21%]"
            alt="d01bb442c0777dNine One"
          />
          <Text
            className="ml-[3px] 3xl:mt-[109px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[91px] text-gray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Iniciar sesión
          </Text>
          <Text
            className="font-semibold lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] text-gray_400 w-[auto]"
            as="h3"
            variant="h3"
          >
            Inicia sesión con tu correo institucional
          </Text>
          <SelectBox
            className="font-medium lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_401 tracking-ls1 w-[100%]"
            placeholderClassName="text-gray_401"
            name="GroupNine"
            placeholder="Institución educativa"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_arrowdown.svg"
                className="lg:w-[14px] lg:h-[10px] lg:mr-[17px] xl:w-[18px] xl:h-[12px] xl:mr-[22px] 2xl:w-[21px] 2xl:h-[14px] 2xl:mr-[25px] 3xl:w-[25px] 3xl:h-[16px] 3xl:mr-[30px]"
                alt="arrow_down"
              />
            }
          ></SelectBox>
          <Input
            className="font-medium p-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-gray_401 text-gray_401 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[17px] 3xl:mt-[20px] lg:mt-[12px] w-[100%] xl:mt-[15px]"
            name="GroupEight"
            placeholder="Correo"
          ></Input>
          <Input
            className="font-medium p-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-gray_401 text-gray_401 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[17px] 3xl:mt-[20px] lg:mt-[12px] w-[100%] xl:mt-[15px]"
            name="GroupSix"
            placeholder="Contraseña"
          ></Input>
          <Text
            className="bg-indigo_400 font-bold lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:pb-[12px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] lg:pt-[15px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] rounded-radius20 text-gray_51 w-[537px]"
            as="h3"
            variant="h3"
          >
            Regístrate
          </Text>
        </Column>
        <Img
          src="images/img_imagecoba4.png"
          className="absolute lg:h-[338px] xl:h-[423px] 2xl:h-[476px] 3xl:h-[571px] right-[0] top-[20%] w-[49%]"
          alt="ImagecobaFour"
        />
      </Stack>
    </>
  );
};

export default RegsitroPage;