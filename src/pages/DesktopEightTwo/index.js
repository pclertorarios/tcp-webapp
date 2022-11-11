import React from "react";

import { Column, Row, Img, Text, Button, List, Line, Stack } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const DesktopEightTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate12() {
    navigate("/desktopfortynine");
  }
  function handleNavigate13() {
    navigate("/desktopfiftyone");
  }
  function handleNavigate14() {
    navigate("/desktopthirteenone");
  }
  function handleNavigate17() {
    navigate("/desktopfortynine");
  }
  function handleNavigate18() {
    navigate("/desktopthirteenone");
  }
  function handleNavigate36() {
    navigate("/desktopfiftyone");
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
            <Column className="items-center justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
              <Text className="columnu201910362upc1">
                u201910362@upc.edu.pe
              </Text>
              <Button
                className="2xl:mt-[66px] 3xl:mt-[79px] flex items-center justify-center lg:mt-[46px] text-center w-[100%] xl:mt-[58px]"
                leftIcon={
                  <Img
                    src="images/img_menu.svg"
                    className="text-center lg:w-[14px] lg:h-[15px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:mr-[16px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[18px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[21px]"
                    alt="menu"
                  />
                }
                shape="RoundedBorder20"
                size="lg"
                variant="FillGray50"
              >
                <div className="bg-transparent font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Inicio
                </div>
              </Button>
              <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[71%]">
                <Img
                  src="images/img_teacher.png"
                  className="Teacher"
                  alt="Teacher"
                />
                <Button
                  className="common-pointer bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[72%]"
                  onClick={handleNavigate12}
                >
                  Mis tutorías
                </Button>
              </Row>
              <Row className="items-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[66%]">
                <div className="mb-[1px] Teacher"></div>
                <Text className="rowakaricons1" variant="body1">
                  Calendario
                </Text>
              </Row>
              <Row className="items-center lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[76%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark"
                />
                <Text
                  className="common-pointer rowcheckmark"
                  variant="body1"
                  onClick={handleNavigate13}
                >
                  Rendimiento
                </Text>
              </Row>
              <Row className="items-center lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[69%]">
                <Img
                  src="images/img_group1461.png"
                  className="Teacher"
                  alt="VideoConferenc"
                />
                <Text
                  className="common-pointer rowmap"
                  variant="body1"
                  onClick={handleNavigate14}
                >
                  Mis talleres
                </Text>
              </Row>
              <Row className="items-center justify-end ml-[auto] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[87%]">
                <Img src="images/img_map.svg" className="map2" alt="map" />
                <Text className="rowmap" variant="body1">
                  Guía de usuario
                </Text>
              </Row>
              <Row className="items-center lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[38%]">
                <Img
                  src="images/img_computer_20X20.svg"
                  className="Teacher"
                  alt="computer"
                />
                <Text className="rowmap" variant="body1">
                  FAQ
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_50 items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[84%]">
            <Row className="items-start lg:mb-[30px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[51px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Column className="justify-start mt-[4px] w-[67%]">
                <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                  ¡Hola, Dana!
                </Text>
                <Text
                  className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_402 w-[auto]"
                  variant="body1"
                >
                  Sábado 4 de junio, 2022
                </Text>
                <List
                  className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[27px] grid grid-cols-4 min-h-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]"
                  orientation="horizontal"
                >
                  <Column
                    className="common-pointer bg-gradient1  items-center justify-center mb-[1px] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius20 w-[100%]"
                    onClick={handleNavigate17}
                  >
                    <Button
                      className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center mt-[4px] lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                      shape="icbRoundedBorder20"
                      size="xlIcn"
                      variant="icbFillWhiteA7005b"
                    >
                      <Img
                        src="images/img_group1463.png"
                        className="flex items-center justify-center lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px]"
                        alt="Group1529"
                      />
                    </Button>
                    <Text className="columngroup1463" variant="body1">
                      Ver mis tutorías
                    </Text>
                  </Column>
                  <Column
                    className="common-pointer listcomputer"
                    onClick={handleNavigate18}
                  >
                    <Button
                      className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillWhiteA7005b"
                    >
                      <Img
                        src="images/img_computer.svg"
                        className="flex items-center justify-center"
                        alt="computer One"
                      />
                    </Button>
                    <Text className="columncomputer" variant="body1">
                      Ver mis talleres
                    </Text>
                  </Column>
                  <Column
                    className="common-pointer bg-gradient2  items-center justify-center mb-[1px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius20 w-[100%]"
                    onClick={handleNavigate36}
                  >
                    <Button
                      className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillWhiteA7005b"
                    >
                      <Img
                        src="images/img_group1461.png"
                        className="flex items-center justify-center lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px]"
                        alt="Group1527"
                      />
                    </Button>
                    <Text className="columngroup1461" variant="body1">
                      Ver mi rendimiento
                    </Text>
                  </Column>
                  <Column className="bg-gradient3  items-center justify-center mb-[1px] lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
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
                    <Text className="columncalendar" variant="body1">
                      Ver mis horarios
                    </Text>
                  </Column>
                </List>
                <Text
                  className="font-bold lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] text-black_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Rendimiento de la semana
                </Text>
                <Row className="font-inter items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                  <Column className="bg-white_A700 items-center lg:py-[32px] xl:py-[40px] 2xl:py-[45px] 3xl:py-[54px] rounded-radius20 w-[48%]">
                    <Column className="items-center justify-start lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] w-[100%]">
                      <Column className="justify-start w-[81%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Nivel de aprobación
                          </Text>
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
                            shape="icbRoundedBorder10"
                            size="smIcn"
                            variant="icbFillIndigo400"
                          >
                            <Img
                              src="images/img_group2016.svg"
                              className="flex items-center justify-center"
                              alt="Group2016"
                            />
                          </Button>
                        </Row>
                        <Text className="columnprimarytext" variant="body3">
                          En general
                        </Text>
                      </Column>
                      <Line className="bg-gray_200 h-[2px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                      <Stack className="font-montserrat lg:h-[157px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:w-[156px] xl:w-[195px] 2xl:w-[220px] 3xl:w-[264px]">
                        <CircularProgressbar
                          className="absolute lg:h-[157px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] overflow-visible w-[100%]"
                          value="24"
                          counterClockwise
                          name="Group1555"
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
                          name="Group1556"
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
                          as="h5"
                          variant="h5"
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
                          <Row className="items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-black_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Aprobación talleres
                            </Text>
                            <Button
                              className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
                              shape="icbRoundedBorder10"
                              size="smIcn"
                              variant="icbFillIndigo400"
                            >
                              <Img
                                src="images/img_group2016.svg"
                                className="flex items-center justify-center"
                                alt="Group2019"
                              />
                            </Button>
                          </Row>
                          <Text className="columnprimarytext" variant="body3">
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
                            backgroundImage: "url('images/img_group1543.svg')",
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
                    <Row className="items-center lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[69%]">
                      <div className="bg-teal_200 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] rounded-radius50 3xl:w-[10px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"></div>
                      <Text className="rowellipsetwentyone" variant="body3">
                        Programación 1
                      </Text>
                      <div className="bg-amber_300 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] rounded-radius50 3xl:w-[10px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"></div>
                      <Text className="rowellipsetwentyone" variant="body3">
                        Programación 2
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Line className="bg-blue_100 3xl:h-[1028px] lg:h-[609px] xl:h-[762px] 2xl:h-[857px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] w-[3px]" />
              <Column className="justify-start lg:ml-[27px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] mt-[4px] w-[25%]">
                <Row className="items-center justify-between ml-[1px] w-[97%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Calendario
                  </Text>
                  <Button
                    className="flex lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] items-center justify-center lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
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
                </Row>
                <Text
                  className="font-bold lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] text-gray_500 w-[auto]"
                  variant="body1"
                >
                  Jun 16, 2022{" "}
                </Text>
                <Row className="bg-white_A700 items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius20 w-[100%]">
                  <Text className="time" as="h5" variant="h5">
                    12:00
                  </Text>
                  <Text className="programaciónCounter_Two" variant="body1">
                    Programación 1
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius20 w-[100%]">
                  <Text className="time_One" as="h5" variant="h5">
                    05:00
                  </Text>
                  <Text
                    className="font-bold leading-[normal] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] text-black_900 w-[55%]"
                    variant="body1"
                  >
                    Matemática Básica
                  </Text>
                </Row>
                <Button className="bg-transparent font-bold lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[37%]">
                  Jun 17, 2022{" "}
                </Button>
                <Row className="bg-white_A700 items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius20 w-[100%]">
                  <Text className="time" as="h5" variant="h5">
                    12:00
                  </Text>
                  <Text className="programaciónCounter_Two" variant="body1">
                    Programación 1
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius20 w-[100%]">
                  <Text className="time_One" as="h5" variant="h5">
                    05:00
                  </Text>
                  <Text
                    className="font-bold leading-[normal] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] text-black_900 w-[55%]"
                    variant="body1"
                  >
                    Matemática Básica
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius20 w-[100%]">
                  <Text className="time" as="h5" variant="h5">
                    05:00
                  </Text>
                  <Text
                    className="font-bold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] text-black_900 w-[auto]"
                    variant="body1"
                  >
                    Algoritmos
                  </Text>
                </Row>
                <Text
                  className="font-bold lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] text-gray_500 w-[auto]"
                  variant="body1"
                >
                  Jun 18, 2022{" "}
                </Text>
                <Row className="bg-white_A700 items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius20 w-[100%]">
                  <Text className="time" as="h5" variant="h5">
                    12:00
                  </Text>
                  <Text className="programaciónCounter_Two" variant="body1">
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

export default DesktopEightTwoPage;
