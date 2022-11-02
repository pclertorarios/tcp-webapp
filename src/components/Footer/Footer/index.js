import React from "react";

import { Column, Row, Img, Text, Stack } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="justify-start w-[100%]">
          <Row className="items-start w-[94%]">
            <Img
              src="images/img_d01bb442c0777d9.png"
              className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[10%]"
              alt="d01bb442c0777dNine"
            />
            <Text
              className="font-bold font-montserrat lg:ml-[254px] xl:ml-[318px] 2xl:ml-[358px] 3xl:ml-[429px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-gray_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Secciones
            </Text>
            <Text
              className="font-bold font-montserrat xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-gray_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Redes sociales
            </Text>
            <Text
              className="font-bold font-montserrat xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-gray_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Contacto
            </Text>
          </Row>
          <Row className="items-center justify-end ml-[auto] mt-[1px] w-[56%]">
            <Text className="mb-[1px] rowinicio" as="h3" variant="h3">
              Inicio
            </Text>
            <Text
              className="lg:ml-[130px] xl:ml-[162px] 2xl:ml-[183px] 3xl:ml-[219px] mt-[1px] rowinicio"
              as="h3"
              variant="h3"
            >
              TPC_oficial_fb
            </Text>
            <Text
              className="lg:ml-[102px] xl:ml-[128px] 2xl:ml-[144px] 3xl:ml-[172px] my-[1px] rowinicio"
              as="h3"
              variant="h3"
            >
              999 999 999
            </Text>
          </Row>
          <Row className="items-start justify-between 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
            <Text
              className="font-montserrat font-semibold leading-[normal] mt-[1px] text-gray_400 w-[31%]"
              as="h3"
              variant="h3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              ullamcorper consectetur arcu odio elit.{" "}
            </Text>
            <Column className="justify-start w-[60%]">
              <Row className="items-start justify-between w-[100%]">
                <Text className="mb-[1px] rowinicio" as="h3" variant="h3">
                  Nosotros
                </Text>
                <Stack className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] w-[21%]">
                  <Text className="absolute rowinicio" as="h3" variant="h3">
                    TPC_oficial_ig
                  </Text>
                  <Text className="absolute rowinicio" as="h3" variant="h3">
                    TPC_oficial_ig
                  </Text>
                </Stack>
                <Text className="mt-[1px] rowinicio" as="h3" variant="h3">
                  tpc@gmail.com
                </Text>
              </Row>
              <Text
                className="lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rowinicio"
                as="h3"
                variant="h3"
              >
                Nuestra App
              </Text>
              <Text
                className="lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rowinicio"
                as="h3"
                variant="h3"
              >
                Contáctanos
              </Text>
            </Column>
          </Row>
        </Column>
      </footer>
    </>
  );
};

export default Footer;
