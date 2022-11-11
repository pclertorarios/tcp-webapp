import React from "react";

import { Stack, Column, Img, Text, Row, Button } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <Stack className="bg-gray_50 font-montserrat 3xl:h-[1198px] lg:h-[709px] xl:h-[887px] 2xl:h-[998px] mx-[auto] w-[100%]">
        <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[4%] w-[81%]">
          <Img
            src="images/img_d01bb442c0777d9.png"
            className="d01bb442c0777dNine"
            alt="d01bb442c0777dNine"
          />
          <Text
            className="lg:ml-[131px] xl:ml-[164px] 2xl:ml-[185px] 3xl:ml-[222px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] text-gray_900 w-[auto]"
            as="h2"
            variant="h2"
          >
            TPC te da la bienvenida
          </Text>
          <Text
            className="font-semibold leading-[normal] lg:ml-[112px] xl:ml-[140px] 2xl:ml-[158px] 3xl:ml-[189px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] text-center text-gray_400 w-[72%]"
            as="h6"
            variant="h6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
            scelerisque morbi dictum sed. Enim commodo lorem suspendisse risus.
            Senectus integer duis accumsan quam. Mauris, egestas lorem nibh
            viverra id.{" "}
          </Text>
          <Column className="items-center justify-start lg:mt-[184px] xl:mt-[231px] 2xl:mt-[260px] 3xl:mt-[312px] w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-start w-[94%]">
                <Img
                  src="images/img_d01bb442c0777d9.png"
                  className="d01bb442c0777dNine"
                  alt="d01bb442c0777dNine One"
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
        </Column>
        <Stack className="absolute bottom-[0] xl:h-[1072px] 2xl:h-[1206px] 3xl:h-[1447px] lg:h-[857px] w-[100%]">
          <Img
            src="images/img_pattern.png"
            className="absolute 3xl:h-[1198px] lg:h-[709px] xl:h-[887px] 2xl:h-[998px] top-[0] w-[100%]"
            alt="pattern"
          />
          <Button
            className="absolute font-bold inset-x-[0] mx-[auto] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-gray_51 top-[40%] w-[17%]"
            shape="RoundedBorder20"
            size="lg"
            variant="FillIndigo400"
          >
            Continuar
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default DesktopOnePage;
