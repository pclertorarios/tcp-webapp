import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  List,
  Button,
  Line,
  Stack,
} from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();

  function handleNavigateInicio() {
    navigate("/inicio");
  }
  function handleNavigateMisTutorias() {
    navigate("/mistutorias");
  }
  function handleNavigateCalendar() {
    navigate("/calendario");
  }

  function handleNavigateRendimiento() {
    navigate("/rendimiento");
  }
  function handleNavigateMisTalleres() {
    navigate("/mistalleres");
  }

  return (
    <>
      <Column className="bg-white_A700 font-montserrat items-center justify-start mx-[auto] lg:pl-[34px] xl:pl-[43px] 2xl:pl-[49px] 3xl:pl-[58px] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
        <Column className="items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[14%]">
            <Img
              src="images/img_d01bb442c0777d9.png"
              className="d01bb442c0777dNine"
              alt="d01bb442c0777dNine"
            />
            <Img
              src="images/img_ellipse1.png"
              className="2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[89px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rotate-[1deg] rounded-radius50 w-[53%]"
              alt="EllipseOne"
            />
            <Text className="columnd01bb442c0777dnine" as="h5" variant="h5">
              Dana Vallejos
            </Text>
            <Column className="items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
              <Text className="columnu201910362upc1">
                u201910362@upc.edu.pe
              </Text>
              <Row className="bg-gray_50 items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
              <Img
                  src="images/img_computer.svg"
                  className="computer"
                  alt="computer"
                />
                <Text className="common-pointer rowakaricons" as="h6" variant="h6"onClick={handleNavigateInicio}>
                  Inicio
                </Text>
              </Row>
              <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
                <Img
                  src="images/img_teacher.png"
                  className="computer"
                  alt="Teacher"
                />
                <Text
                  className="common-pointer rowcomputer"
                  as="h6"
                  variant="h6"
                  onClick={handleNavigateMisTutorias}
                >
                  Mis tutorías
                </Text>
              </Row>
              <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
                <div className="computer"></div>
                <Text
                  className="common-pointer rowakaricons1"
                  as="h6"
                  variant="h6"
                  onClick={handleNavigateCalendar}
                >
                  Calendario
                </Text>
              </Row>
              <Row className=" items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark"
                />
                <Text
                  className="common-pointer rowcheckmark"
                  as="h6"
                  variant="h6"
                  onClick={handleNavigateRendimiento}
                >
                  Rendimiento
                </Text>
              </Row>
              <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
                <Img
                  src="images/img_videoconferenc.png"
                  className="computer"
                  alt="VideoConferenc"
                />
                <Text
                  className="common-pointer rowcomputer"
                  as="h6"
                  variant="h6"
                  onClick={handleNavigateMisTalleres}
                >
                  Mis talleres
                </Text>
              </Row>
              <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
                <Img src="images/img_map.svg" className="map" alt="map" />
                <Text className="common-pointer rowcomputer" as="h6" variant="h6">
                  Guía de usuario
                </Text>
              </Row>
              <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
                <Img
                  src="images/img_computer_20X20.svg"
                  className="computer_One"
                  alt="computer"
                />
                <Text className="rowcomputer_one" as="h6" variant="h6">
                  FAQ
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_50 items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[84%]">
            <Row className="items-center lg:mb-[30px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[51px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Column className="w-[67%]">
                <Text className="text-black_900 w-[auto]" as="h4" variant="h4">
                  ¡Hola, Dana!
                </Text>
                <Text
                  className="font-semibold 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-gray_402 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Sábado 4 de junio, 2022
                </Text>
                <List
                  className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[27px] grid grid-cols-4 min-h-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="bg-gradient  items-center justify-start mb-[1px] lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                      shape="icbRoundedBorder20"
                      size="xlIcn"
                      variant="icbFillWhiteA7005b"
                    >
                      <Img
                        src="images/img_group341.png"
                        className="flex items-center justify-center lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px]"
                        alt="Group341"
                      />
                    </Button>
                    <Text
                      className="font-bold leading-[normal] mb-[3px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-center text-gray_54 w-[74%]"
                      as="h6"
                      variant="h6"
                    >
                      Ver mis tutorías
                    </Text>
                  </Column>
                  <Column className="bg-gradient1  items-center justify-start mt-[1px] lg:p-[24px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillWhiteA7005b"
                    >
                      <Img
                        src="images/img_computer_82X82.svg"
                        className="flex items-center justify-center"
                        alt="computer One"
                      />
                    </Button>
                    <Text
                      className="font-bold leading-[normal] lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-center text-gray_54 w-[69%]"
                      as="h6"
                      variant="h6"
                    >
                      Ver mis talleres
                    </Text>
                  </Column>
                  <Column className="common-pointer bg-gradient2  items-center justify-center mb-[1px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillWhiteA7005b"
                    >
                      <Img
                        src="images/img_videoconferenc.png"
                        className="flex items-center justify-center lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px]"
                        alt="Group339"
                      />
                    </Button>
                    <Text
                      className="font-bold leading-[normal] lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-center text-gray_54 w-[96%]"
                      as="h6"
                      variant="h6"
                    >
                      Ver mi rendimiento
                    </Text>
                  </Column>
                  <Column className="bg-gradient3  items-center justify-start mb-[1px] lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                      shape="icbRoundedBorder20"
                      size="xlIcn"
                      variant="icbFillWhiteA7005b"
                    >
                      <Img
                        src="images/img_calendar.svg"
                        className="flex items-center justify-center"
                        alt="calendar"
                      />
                    </Button>
                    <Text
                      className="font-bold leading-[normal] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-center text-gray_54 w-[75%]"
                      as="h6"
                      variant="h6"
                    >
                      Ver mis horarios
                    </Text>
                  </Column>
                </List>
                <Text
                  className="font-bold lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Rendimiento de la semana
                </Text>
                <Row className="font-inter items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                  <Column className="bg-white_A700 items-center lg:py-[32px] xl:py-[40px] 2xl:py-[45px] 3xl:py-[54px] rounded-radius20 w-[48%]">
                    <Column className="items-center justify-start lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] w-[100%]">
                      <Column className="justify-start w-[81%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="rowprimarytext" as="h5" variant="h5">
                            Nivel de aprobación
                          </Text>
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] items-center justify-center mb-[1px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
                            size="smIcn"
                          >
                            <Img
                              src="images/img_group2016.svg"
                              className="flex items-center justify-center"
                              alt="Group2016"
                            />
                          </Button>
                        </Row>
                        <Text className="columnprimarytext" variant="body2">
                          En general
                        </Text>
                      </Column>
                      <Line className="bg-gray_200 h-[2px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                      <Stack className="font-montserrat lg:h-[157px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:w-[156px] xl:w-[195px] 2xl:w-[220px] 3xl:w-[264px]">
                        <CircularProgressbar
                          className="absolute lg:h-[157px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] overflow-visible w-[100%]"
                          value="24"
                          counterClockwise
                          name="Group369"
                          strokeWidth={21}
                          styles={{
                            trail: { strokeWidth: 21, stroke: "#e1e1e1" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              "transform-origin": "center",
                              transform: "rotate(270deg)",
                              stroke: "#5f75da",
                            },
                          }}
                        ></CircularProgressbar>
                        <CircularProgressbar
                          className="absolute lg:h-[157px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] overflow-visible w-[100%]"
                          value="49"
                          counterClockwise
                          name="Group370"
                          strokeWidth={21}
                          styles={{
                            trail: { strokeWidth: 21, stroke: "#5f75da" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              "transform-origin": "center",
                              transform: "rotate(0deg)",
                              stroke: "#e1e1e1",
                            },
                          }}
                        ></CircularProgressbar>
                        <Text
                          className="SevenHundredFifty"
                          as="h4"
                          variant="h4"
                        >
                          75.0%
                        </Text>
                      </Stack>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 items-center lg:py-[32px] xl:py-[40px] 2xl:py-[45px] 3xl:py-[54px] rounded-radius20 w-[48%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Column className="justify-start w-[81%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Text
                              className="rowprimarytext"
                              as="h5"
                              variant="h5"
                            >
                              Aprobación talleres
                            </Text>
                            <Button
                              className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] items-center justify-center mb-[1px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
                              size="smIcn"
                            >
                              <Img
                                src="images/img_group2016.svg"
                                className="flex items-center justify-center"
                                alt="Group2019"
                              />
                            </Button>
                          </Row>
                          <Text
                            className="columnprimarytext_one"
                            variant="body2"
                          >
                            Los más populares
                          </Text>
                        </Column>
                        <Line className="bg-gray_200 h-[2px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                      </Column>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[79%]">
                      <Row className="items-end justify-evenly w-[100%]">
                        <Column className="justify-start w-[2%]">
                          <Text className="Five" as="h1" variant="h1">
                            5
                          </Text>
                          <Text className="Four" as="h1" variant="h1">
                            4
                          </Text>
                          <Text className="Three" as="h1" variant="h1">
                            3
                          </Text>
                          <Text className="Four" as="h1" variant="h1">
                            2
                          </Text>
                          <Text className="One" as="h1" variant="h1">
                            1
                          </Text>
                          <Text className="Zero" as="h1" variant="h1">
                            0
                          </Text>
                        </Column>
                        <Stack
                          className="bg-cover bg-repeat lg:h-[101px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] mb-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] pr-[1px] w-[96%]"
                          style={{
                            backgroundImage: "url('images/img_group355.svg')",
                          }}
                        >
                          <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                            <Row className="items-end justify-between w-[100%]">
                              <Img
                                src="images/img_vector389.svg"
                                className="3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] w-[47%]"
                                alt="Vector385"
                              />
                              <Img
                                src="images/img_vector387.svg"
                                className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[41px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] w-[29%]"
                                alt="Vector387"
                              />
                            </Row>
                          </Column>
                          <Img
                            src="images/img_vector390.svg"
                            className="Vector390"
                            alt="Vector388"
                          />
                        </Stack>
                      </Row>
                    </Column>
                    <Row className="items-center lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[70%]">
                      <div className="bg-teal_200 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] rounded-radius50 3xl:w-[10px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"></div>
                      <Text className="rowellipsetwentyone" variant="body2">
                        Programación 1
                      </Text>
                      <div className="bg-amber_300 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] rounded-radius50 3xl:w-[10px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"></div>
                      <Text className="rowellipsetwentyone" variant="body2">
                        Programación 2
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Line className="bg-blue_101 3xl:h-[1028px] lg:h-[609px] xl:h-[762px] 2xl:h-[857px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] w-[3px]" />
              <Column className="lg:ml-[27px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] w-[25%]">
                <Row className="items-center justify-between ml-[1px] w-[97%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Calendario
                  </Text>
                  <Button
                    className="flex lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] items-center justify-center lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                    size="mdIcn"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className="flex items-center justify-center"
                      alt="notification"
                    />
                  </Button>
                </Row>
                <Text
                  className="font-bold lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] text-gray_500 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Jun 16, 2022{" "}
                </Text>
                <Row className="bg-white_A700 items-center lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius20 w-[100%]">
                  <Text
                    className="my-[1px] text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    12:00
                  </Text>
                  <Text
                    className="programaciónCounter_Two"
                    as="h6"
                    variant="h6"
                  >
                    Programación 1
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius20 w-[100%]">
                  <Text
                    className="ml-[3px] text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    05:00
                  </Text>
                  <Text
                    className="font-bold leading-[normal] mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] text-black_900 w-[43%]"
                    as="h6"
                    variant="h6"
                  >
                    Matemática Básica
                  </Text>
                </Row>
                <Text
                  className="font-bold lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-gray_500 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Jun 17, 2022{" "}
                </Text>
                <Row className="bg-white_A700 items-center lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius20 w-[100%]">
                  <Text
                    className="my-[1px] text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    12:00
                  </Text>
                  <Text
                    className="programaciónCounter_Two"
                    as="h6"
                    variant="h6"
                  >
                    Programación 1
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius20 w-[100%]">
                  <Text
                    className="ml-[3px] text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    05:00
                  </Text>
                  <Text
                    className="font-bold leading-[normal] mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] text-black_900 w-[43%]"
                    as="h6"
                    variant="h6"
                  >
                    Matemática Básica
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius20 w-[100%]">
                  <Text
                    className="my-[1px] text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    05:00
                  </Text>
                  <Text
                    className="font-bold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Algoritmos
                  </Text>
                </Row>
                <Text
                  className="font-bold lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-gray_500 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Jun 18, 2022{" "}
                </Text>
                <Row className="bg-white_A700 items-center lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius20 w-[100%]">
                  <Text
                    className="my-[1px] text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    12:00
                  </Text>
                  <Text
                    className="programaciónCounter_Two"
                    as="h6"
                    variant="h6"
                  >
                    Programación 1
                  </Text>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default Inicio;
