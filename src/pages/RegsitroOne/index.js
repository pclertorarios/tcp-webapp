import React from "react";

import { Stack, Img, Column, Row, Text, SelectBox, Input } from "components";
import { useNavigate } from "react-router-dom";

const RegsitroOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate26() {
    navigate("/desktopeighttwo");
  }

  return (
    <>
      <Stack className="bg-gray_50 font-montserrat xl:h-[1013px] 2xl:h-[1139px] 3xl:h-[1367px] lg:h-[810px] mx-[auto] pl-[1px] w-[100%]">
        <Img
          src="images/img_pattern.png"
          className="absolute xl:h-[1013px] 2xl:h-[1139px] 3xl:h-[1367px] lg:h-[810px] w-[100%]"
          alt="pattern"
        />
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
            className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[21%]"
            alt="d01bb442c0777dNine One"
          />
          <Text
            className="3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] text-gray_900 w-[auto]"
            as="h3"
            variant="h3"
          >
            Iniciar sesión
          </Text>
          <Text
            className="font-semibold lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-gray_400 w-[auto]"
            as="h6"
            variant="h6"
          >
            Inicia sesión con tu correo institucional
          </Text>
          <SelectBox
            className="font-medium lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_401 tracking-ls1 w-[100%]"
            placeholderClassName="text-gray_401"
            name="Group1503"
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
          <Input
            className="font-medium p-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-gray_401 text-gray_401 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[17px] 3xl:mt-[20px] lg:mt-[12px] w-[100%] xl:mt-[15px]"
            name="Group1502"
            placeholder="Correo"
            size="lg"
          ></Input>
          <Input
            className="font-medium p-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-gray_401 text-gray_401 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[17px] 3xl:mt-[20px] lg:mt-[12px] w-[100%] xl:mt-[15px]"
            name="Group1500"
            placeholder="Contraseña"
            size="lg"
          ></Input>
          <Text
            className="common-pointer bg-indigo_400 font-bold lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] lg:py-[12px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] rounded-radius20 text-gray_51 w-[537px]"
            as="h6"
            variant="h6"
            onClick={handleNavigate26}
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

export default RegsitroOnePage;
