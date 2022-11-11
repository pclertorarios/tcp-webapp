import React from "react";

import {
  Stack,
  Img,
  Column,
  Row,
  Text,
  SelectBox,
  FloatingInput,
  Button,
} from "components";

const RegsitroerrorPage = () => {
  return (
    <>
      <Stack className="bg-gray_50 font-montserrat xl:h-[1013px] 2xl:h-[1139px] 3xl:h-[1367px] lg:h-[810px] mx-[auto] pl-[1px] w-[100%]">
        <Img src="images/img_pattern.png" className="pattern" alt="pattern" />
        <Column className="absolute bottom-[11%] inset-x-[0] items-center justify-start mx-[auto] w-[81%]">
          <Column className="justify-start w-[100%]">
            <Row className="items-start w-[94%]">
              <Img
                src="images/img_d01bb442c0777d9.png"
                className="d01bb442c0777dNine"
                alt="d01bb442c0777dNine"
              />
              <Text className="Secciones" as="h6" variant="h6">
                Secciones
              </Text>
              <Text className="Redessociales" as="h6" variant="h6">
                Redes sociales
              </Text>
              <Text className="Redessociales" as="h6" variant="h6">
                Contacto
              </Text>
            </Row>
            <Row className="items-center justify-end ml-[auto] w-[56%]">
              <Text
                className="font-semibold text-gray_400 w-[auto]"
                as="h6"
                variant="h6"
              >
                Inicio
              </Text>
              <Text className="TPCoficialfb" as="h6" variant="h6">
                TPC_oficial_fb
              </Text>
              <Text className="test_999999999" as="h6" variant="h6">
                999 999 999
              </Text>
            </Row>
            <Row className="items-start justify-between 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
              <Text className="rowlanguage" as="h6" variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                ullamcorper consectetur arcu odio elit.{" "}
              </Text>
              <Column className="justify-start w-[60%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Nosotros
                  </Text>
                  <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[21%]">
                    <Text className="TPCoficialig" as="h6" variant="h6">
                      TPC_oficial_ig
                    </Text>
                    <Text className="TPCoficialig" as="h6" variant="h6">
                      TPC_oficial_ig
                    </Text>
                  </Stack>
                  <Text
                    className="font-semibold text-gray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    tpc@gmail.com
                  </Text>
                </Row>
                <Text className="columnnosotros" as="h6" variant="h6">
                  Nuestra App
                </Text>
                <Text className="columnnosotros" as="h6" variant="h6">
                  Contáctanos
                </Text>
              </Column>
            </Row>
          </Column>
        </Column>
        <Column className="absolute justify-start left-[10%] top-[4%] w-[37%]">
          <Img
            src="images/img_d01bb442c0777d9.png"
            className="d01bb442c0777dNine_One"
            alt="d01bb442c0777dNine One"
          />
          <Text
            className="font-montserrat 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] text-gray_900 w-[auto]"
            as="h3"
            variant="h3"
          >
            Iniciar sesión
          </Text>
          <Text
            className="font-montserrat font-semibold lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-gray_400 w-[auto]"
            as="h6"
            variant="h6"
          >
            Inicia sesión con tu correo institucional
          </Text>
          <SelectBox
            className="font-medium font-montserrat lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_401 tracking-ls1 w-[100%]"
            placeholderClassName="text-gray_401"
            name="Group1355"
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
            size="md"
          ></SelectBox>
          <FloatingInput
            className="bg-transparent placeholder:bg-white_A700 border-0 font-medium font-montserrat placeholder:left-[35px] text-[20px] placeholder:text-gray_401 text-gray_401 placeholder:top-[0] top-[0] tracking-ls02 w-[100%]"
            name="Group1358"
            labelClasses="bg-white_A700 left-[35px] top-[0] text-gray_401"
            focusedClasses="translate-y-[20px] scale-[1]"
            wrapperClasses="w-[100%] mt-[17px] top-[0]"
            labelText="Correo"
            defaultText=""
            variant="OutlineRed200"
          ></FloatingInput>
          <Text
            className="font-medium font-roboto lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] mt-[4px] text-red_500 tracking-ls1 w-[auto]"
            variant="body1"
          >
            Correo inválido
          </Text>
          <FloatingInput
            className="bg-transparent placeholder:bg-white_A700 border-0 font-medium font-montserrat placeholder:left-[35px] text-[20px] placeholder:text-gray_401 text-gray_401 placeholder:top-[0] top-[0] tracking-ls02 w-[100%]"
            name="Group1356"
            labelClasses="bg-white_A700 left-[35px] top-[0] text-gray_401"
            focusedClasses="translate-y-[20px] scale-[1]"
            wrapperClasses="w-[100%] mt-[17px] top-[0]"
            labelText="Contraseña"
            defaultText=""
          ></FloatingInput>
          <Button
            className="font-bold font-montserrat lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-gray_51 w-[100%]"
            shape="RoundedBorder20"
            size="lg"
            variant="FillIndigo400"
          >
            Regístrate
          </Button>
        </Column>
        <Img
          src="images/img_imagecoba4.png"
          className="ImagecobaFour"
          alt="ImagecobaFour"
        />
      </Stack>
    </>
  );
};

export default RegsitroerrorPage;
