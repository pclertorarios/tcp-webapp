import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  SelectBox,
  List,
} from "components";
import { useNavigate } from "react-router-dom";

const Calendario = () => {
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
              <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
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
              <Row className="bg-gray_50 items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
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
              <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
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
          <Column className="bg-gray_50 items-center justify-end lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[84%]">
            <Column className="justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[97%]">
              <Row className="items-center justify-between w-[100%]">
                <Text className="text-black_900 w-[auto]" as="h3" variant="h3">
                  Calendario
                </Text>
                <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] w-[6%]">
                  <Button
                    className="absolute bottom-[0] flex lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] items-center justify-center left-[0] lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                    size="mdIcn"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className="flex items-center justify-center"
                      alt="notification"
                    />
                  </Button>
                  <div className="absolute bg-red_600 right-[0] rounded-radius50 top-[0] computer"></div>
                </Stack>
              </Row>
              <Row className="font-roboto items-start lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[46%]">
                <Text
                  className="mb-[1px] text-black_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Curso
                </Text>
                <Text
                  className="lg:ml-[190px] xl:ml-[238px] 2xl:ml-[268px] 3xl:ml-[321px] mt-[1px] text-black_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Tipo de clase
                </Text>
              </Row>
              <Row className="font-montserrat items-center lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[61%]">
                <SelectBox
                  className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[47%]"
                  placeholderClassName="text-gray_401"
                  name="Group314"
                  placeholder="Seleccione un curso"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="lg:w-[12px] lg:h-[8px] lg:mr-[16px] xl:w-[15px] xl:h-[9px] xl:mr-[20px] 2xl:w-[17px] 2xl:h-[11px] 2xl:mr-[23px] 3xl:w-[20px] 3xl:h-[13px] 3xl:mr-[27px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <SelectBox
                  className="font-medium lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[47%]"
                  placeholderClassName="text-gray_401"
                  name="Group315"
                  placeholder="Seleccione tipo de clase"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="lg:w-[12px] lg:h-[8px] lg:mr-[16px] xl:w-[15px] xl:h-[9px] xl:mr-[20px] 2xl:w-[17px] 2xl:h-[11px] 2xl:mr-[23px] 3xl:w-[20px] 3xl:h-[13px] 3xl:mr-[27px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </Row>
              <Row className="font-roboto items-center lg:ml-[230px] xl:ml-[288px] 2xl:ml-[324px] 3xl:ml-[389px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[30%]">
                <Button
                  className="flex lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] items-center justify-center lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                  size="lgIcn"
                >
                  <Img
                    src="images/img_arrowleft.svg"
                    className="flex items-center justify-center"
                    alt="arrowleft"
                  />
                </Button>
                <Text
                  className="lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] text-black_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Marzo 2022
                </Text>
                <Button
                  className="flex lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] items-center justify-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                  size="lgIcn"
                >
                  <Img
                    src="images/img_arrowright.svg"
                    className="flex items-center justify-center"
                    alt="arrowright"
                  />
                </Button>
              </Row>
              <Stack className="font-roboto lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[93%]">
                <Stack className="absolute lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] top-[0] w-[100%]">
                  <Stack className="absolute lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] right-[0] w-[86%]">
                    <Stack className="absolute lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] right-[0] w-[84%]">
                      <Stack className="absolute lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] right-[0] w-[81%]">
                        <Stack className="absolute lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] right-[0] w-[76%]">
                          <Stack className="absolute lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] right-[0] w-[69%]">
                            <Column className="absolute items-center justify-start right-[0] w-[55%]">
                              <Column className="bg-white_A700 items-end justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[100%]">
                                <Text className="DayOfTheWeek" variant="body2">
                                  Sun
                                </Text>
                              </Column>
                            </Column>
                            <Column className="absolute items-center justify-start left-[0] w-[55%]">
                              <Column className="bg-white_A700 items-end justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                                <Text className="DayOfTheWeek" variant="body2">
                                  Sat
                                </Text>
                              </Column>
                            </Column>
                          </Stack>
                          <Column className="absolute items-center justify-start left-[0] w-[38%]">
                            <Column className="bg-white_A700 items-end justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                              <Text
                                className="flex items-center DayOfTheWeek"
                                variant="body2"
                              >
                                Fri
                              </Text>
                            </Column>
                          </Column>
                        </Stack>
                        <Column className="absolute items-center justify-start left-[0] w-[29%]">
                          <Column className="bg-white_A700 items-end justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                            <Text className="DayOfTheWeek" variant="body2">
                              Thu
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Column className="absolute items-center justify-start left-[0] w-[23%]">
                        <Column className="bg-white_A700 items-end justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                          <Text className="DayOfTheWeek" variant="body2">
                            Wed
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Column className="absolute items-center justify-start left-[0] w-[20%]">
                      <Column className="bg-white_A700 items-end justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                        <Text className="DayOfTheWeek" variant="body2">
                          Tue
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="absolute items-center justify-start left-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[17%]">
                    <Text
                      className="bg-white_A700 font-medium lg:pl-[24px] xl:pl-[31px] 2xl:pl-[35px] 3xl:pl-[42px] lg:pr-[5px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rotate-[90deg] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] text-bluegray_900 w-[163px]"
                      variant="body2"
                    >
                      Mon
                    </Text>
                  </Column>
                </Stack>
                <Column className="absolute bg-gray_100 bottom-[0] items-center justify-start right-[14%] w-[14%]">
                  <Column className="bg-gray_52 justify-start outline outline-[1px] outline-blue_100 lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rotate-[90deg] w-[100%]">
                    <Text className="Day" as="h6" variant="h6">
                      6
                    </Text>
                    <div className="bg-indigo_400 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"></div>
                  </Column>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[0] items-end justify-start outline outline-[1px] outline-blue_100 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] right-[29%] rotate-[90deg] w-[14%]">
                  <Text
                    className="font-medium lg:mb-[54px] xl:mb-[68px] 2xl:mb-[77px] 3xl:mb-[92px] rotate-[90deg] text-bluegray_901 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    5
                  </Text>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[0] inset-x-[0] justify-start mx-[auto] outline outline-[1px] outline-blue_100 lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rotate-[90deg] w-[14%]">
                  <Text className="Day" as="h6" variant="h6">
                    4
                  </Text>
                  <div className="bg-indigo_400 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"></div>
                </Column>
                <Text className="absolute bottom-[0] left-[29%] rotate-[90deg] w-[auto]"></Text>
                <Text className="absolute bottom-[0] left-[14%] rotate-[90deg] w-[auto]"></Text>
                <Text className="absolute bottom-[0] left-[0] rotate-[90deg] w-[auto]"></Text>
              </Stack>
              <List
                className="font-roboto gap-[0] min-h-[auto] w-[93%]"
                orientation="vertical"
              >
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Column className="bg-white_A700 items-end outline outline-[1px] outline-blue_100 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[14%]">
                    <Text
                      className="font-medium lg:mb-[54px] xl:mb-[67px] 2xl:mb-[76px] 3xl:mb-[91px] mr-[3px] rotate-[90deg] text-bluegray_901 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      11
                    </Text>
                  </Column>
                  <Stack className="2xl:h-[109px] 3xl:h-[130px] lg:h-[77px] xl:h-[97px] w-[29%]">
                    <Column className="absolute items-center justify-start w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A700 items-end outline outline-[1px] outline-blue_100 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[50%]">
                          <Text className="Day8" as="h6" variant="h6">
                            12
                          </Text>
                        </Column>
                        <Column className="bg-gray_100 items-center w-[50%]">
                          <Column className="bg-gray_52 items-end justify-start outline outline-[1px] outline-blue_100 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                            <Text className="Day8" as="h6" variant="h6">
                              13
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                    </Column>
                    <div className="absolute bg-indigo_400 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] left-[0] top-[37%] w-[50%]"></div>
                  </Stack>
                  <Column className="bg-gray_100 items-center w-[14%]">
                    <Text className="rotate-[90deg] w-[auto]"></Text>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Column className="bg-white_A700 outline outline-[1px] outline-blue_100 lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rotate-[90deg] w-[14%]">
                    <Text
                      className="flex font-medium items-center xl:ml-[100px] 2xl:ml-[113px] 3xl:ml-[135px] lg:ml-[80px] rotate-[90deg] text-bluegray_901 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      18
                    </Text>
                    <div className="bg-indigo_400 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[32px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[54px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"></div>
                  </Column>
                  <Column className="bg-white_A700 items-end outline outline-[1px] outline-blue_100 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[14%]">
                    <Text className="Day8" as="h6" variant="h6">
                      19
                    </Text>
                  </Column>
                  <Column className="bg-gray_100 items-center w-[14%]">
                    <Text className="rotate-[90deg] w-[auto]"></Text>
                  </Column>
                  <Column className="bg-gray_100 items-center w-[14%]">
                    <Text className="rotate-[90deg] w-[auto]"></Text>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Column className="bg-gray_100 items-center w-[14%]">
                    <Text className="rotate-[90deg] w-[auto]"></Text>
                  </Column>
                  <Column className="bg-gray_100 items-center w-[14%]">
                    <Text className="rotate-[90deg] w-[auto]"></Text>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Text className="rotate-[90deg] w-[auto]"></Text>
                  <Column className="bg-gray_100 items-center w-[14%]">
                    <Text className="rotate-[90deg] w-[auto]"></Text>
                  </Column>
                  <Column className="bg-gray_100 items-center w-[14%]">
                    <Text className="rotate-[90deg] w-[auto]"></Text>
                  </Column>
                </Row>
              </List>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default Calendario;
