import React from "react";

import { Column, Row, Img, Text, Button, Stack, List } from "components";
import { useNavigate } from "react-router-dom";

const DesktopFortyEightOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate33() {
    navigate("/desktopthirtyseventwo");
  }

  return (
    <>
      <Column className="bg-white_A700 font-montserrat items-center justify-start mx-[auto] lg:pl-[34px] xl:pl-[43px] 2xl:pl-[49px] 3xl:pl-[58px] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <Column className="items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[14%]">
            <Img
              src="images/img_d01bb442c0777d9.png"
              className="d01bb442c0777dNine2"
              alt="d01bb442c0777dNine"
            />
            <Img
              src="images/img_ellipse1.png"
              className="2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[89px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rotate-[1deg] rounded-radius50 w-[53%]"
              alt="EllipseOne"
            />
            <Text className="columnd01bb442c0777dnine2" as="h6" variant="h6">
              Dana Vallejos
            </Text>
            <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
              <Text className="u201910362upc">u201910362@upc.edu.pe</Text>
              <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[43%]">
                <Img
                  src="images/img_computer_1.svg"
                  className="Teacher"
                  alt="computer"
                />
                <Button className="bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[55%]">
                  Inicio
                </Button>
              </Row>
              <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[71%]">
                <Img
                  src="images/img_teacher.png"
                  className="Teacher"
                  alt="Teacher"
                />
                <Button className="bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[72%]">
                  Mis tutorías
                </Button>
              </Row>
              <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[66%]">
                <div className="mb-[1px] Teacher"></div>
                <Text className="rowakaricons1" variant="body1">
                  Calendario
                </Text>
              </Row>
              <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[76%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark"
                />
                <Text className="rowcheckmark" variant="body1">
                  Rendimiento
                </Text>
              </Row>
              <Row className="bg-gray_50 items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
                <Img
                  src="images/img_group1461.png"
                  className="VideoConferenc3"
                  alt="VideoConferenc"
                />
                <Button className="bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-indigo_400 w-[60%]">
                  Mis talleres
                </Button>
              </Row>
              <Row className="items-center justify-end ml-[auto] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[87%]">
                <Img src="images/img_map.svg" className="map2" alt="map" />
                <Text className="rowmap" variant="body1">
                  Guía de usuario
                </Text>
              </Row>
              <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[38%]">
                <Img
                  src="images/img_computer_20X20.svg"
                  className="Teacher"
                  alt="computer One"
                />
                <Text className="rowmap" variant="body1">
                  FAQ
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_50 items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[84%]">
            <Column className="justify-start lg:mb-[296px] xl:mb-[370px] 2xl:mb-[417px] 3xl:mb-[500px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[97%]">
              <Row className="items-center justify-between w-[100%]">
                <Text className="text-black_900 w-[auto]" as="h4" variant="h4">
                  Asistencia
                </Text>
                <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] w-[6%]">
                  <Button
                    className="absolute bottom-[0] flex lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] items-center justify-center left-[0] lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                    shape="icbRoundedBorder10"
                    size="mdIcn"
                    variant="icbFillIndigo400"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className="flex items-center justify-center"
                      alt="notification"
                    />
                  </Button>
                  <div className="absolute bg-red_600 right-[0] rounded-radius50 top-[0] Teacher"></div>
                </Stack>
              </Row>
              <Text className="columnasistencia" as="h5" variant="h5">
                Alumnos
              </Text>
              <List
                className="gap-[0] min-h-[auto] ml-[1px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[93%]"
                orientation="vertical"
              >
                <Row className="Table1">
                  <Column className="items-center w-[12%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      María Septimus
                    </Text>
                  </Column>
                  <Column className="items-center 2xl:ml-[109px] 3xl:ml-[130px] lg:ml-[77px] xl:ml-[96px] w-[9%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      u201910382
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[166px] xl:ml-[208px] 2xl:ml-[234px] 3xl:ml-[280px] lg:mr-[41px] xl:mr-[52px] 2xl:mr-[59px] 3xl:mr-[70px] w-[26%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      13:00:50 (Entrada) - 14:45:2 (Salida)
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-gray_53 items-center justify-end my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                  <Column className="items-center w-[10%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      Nicole Arriola
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[104px] 2xl:ml-[118px] 3xl:ml-[141px] lg:ml-[83px] w-[9%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      u201956328
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[164px] xl:ml-[206px] 2xl:ml-[232px] 3xl:ml-[278px] lg:mr-[39px] xl:mr-[48px] 2xl:mr-[55px] 3xl:mr-[66px] w-[26%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      13:01:20 (Entrada) - 14:45:56 (Salida)
                    </Text>
                  </Column>
                </Row>
                <Row className="Table1">
                  <Column className="items-center w-[11%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      Jesús Romero
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[81px] w-[9%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      u201915624
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[166px] xl:ml-[208px] 2xl:ml-[234px] 3xl:ml-[280px] lg:mr-[25px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] w-[28%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      00:00:00 (Entrada) - 00:00:00 (Salida)
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-gray_53 items-center justify-end my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                  <Column className="items-center w-[13%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      Sebastián Torres
                    </Text>
                  </Column>
                  <Column className="items-center 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] w-[9%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      u201917885
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[166px] xl:ml-[208px] 2xl:ml-[234px] 3xl:ml-[280px] lg:mr-[39px] xl:mr-[48px] 2xl:mr-[55px] 3xl:mr-[66px] w-[26%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      13:04:12 (Entrada) - 14:10:00 (Salida)
                    </Text>
                  </Column>
                </Row>
              </List>
              <Row className="items-center justify-end ml-[auto] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[36%]">
                <Button
                  className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_51 w-[47%]"
                  shape="RoundedBorder20"
                  size="md"
                  variant="FillIndigo400"
                >
                  Exportar
                </Button>
                <Button
                  className="common-pointer font-bold lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[47%]"
                  onClick={handleNavigate33}
                  shape="RoundedBorder20"
                  size="md"
                  variant="OutlineIndigo400_1"
                >
                  Volver
                </Button>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DesktopFortyEightOnePage;
