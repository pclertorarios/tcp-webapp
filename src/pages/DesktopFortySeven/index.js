import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  SelectBox,
  List,
} from "components";
import { useNavigate } from "react-router-dom";

const DesktopFortySevenPage = () => {
  const navigate = useNavigate();

  function handleNavigate29() {
    navigate("/desktopfortynineone");
  }
  function handleNavigate30() {
    navigate("/desktopfifty");
  }
  function handleNavigate31() {
    navigate("/desktopthirteen");
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
                <Button
                  className="common-pointer bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[72%]"
                  onClick={handleNavigate29}
                >
                  Mis tutorías
                </Button>
              </Row>
              <Row className="bg-gray_50 items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
                <div className="mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] Teacher"></div>
                <Text className="rowakaricons" variant="body1">
                  Calendario
                </Text>
              </Row>
              <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[76%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark"
                />
                <Text
                  className="common-pointer rowcheckmark"
                  variant="body1"
                  onClick={handleNavigate30}
                >
                  Rendimiento
                </Text>
              </Row>
              <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[69%]">
                <Img
                  src="images/img_group1461.png"
                  className="Teacher"
                  alt="VideoConferenc"
                />
                <Text
                  className="common-pointer rowmap"
                  variant="body1"
                  onClick={handleNavigate31}
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
          <Column className="bg-gray_50 items-center justify-end lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[84%]">
            <Column className="justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[97%]">
              <Row className="items-center justify-between w-[100%]">
                <Text className="text-black_900 w-[auto]" as="h4" variant="h4">
                  Calendario
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
              <Row className="font-roboto items-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[46%]">
                <Text
                  className="text-black_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Curso
                </Text>
                <Text className="Tipodeclase1" as="h5" variant="h5">
                  Tipo de clase
                </Text>
              </Row>
              <Row className="font-montserrat items-center lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[61%]">
                <SelectBox
                  className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[47%]"
                  placeholderClassName="text-gray_401"
                  name="Group1388"
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
                  name="Group1389"
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
                  shape="icbRoundedBorder10"
                  size="lgIcn"
                  variant="icbFillIndigo400"
                >
                  <Img
                    src="images/img_arrowleft.svg"
                    className="flex items-center justify-center"
                    alt="arrowleft"
                  />
                </Button>
                <Text
                  className="lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] text-black_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Marzo 2022
                </Text>
                <Button
                  className="flex lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] items-center justify-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                  shape="icbRoundedBorder10"
                  size="lgIcn"
                  variant="icbFillIndigo400"
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
                                <Text className="DayOfTheWeek" variant="body3">
                                  Sun
                                </Text>
                              </Column>
                            </Column>
                            <Column className="absolute items-center justify-start left-[0] w-[55%]">
                              <Column className="bg-white_A700 items-end justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                                <Text className="DayOfTheWeek" variant="body3">
                                  Sat
                                </Text>
                              </Column>
                            </Column>
                          </Stack>
                          <Column className="absolute items-center justify-start left-[0] w-[38%]">
                            <Column className="bg-white_A700 items-end justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                              <Text
                                className="flex items-center DayOfTheWeek"
                                variant="body3"
                              >
                                Fri
                              </Text>
                            </Column>
                          </Column>
                        </Stack>
                        <Column className="absolute items-center justify-start left-[0] w-[29%]">
                          <Column className="bg-white_A700 items-end justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                            <Text className="DayOfTheWeek" variant="body3">
                              Thu
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Column className="absolute items-center justify-start left-[0] w-[23%]">
                        <Column className="bg-white_A700 items-end justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                          <Text className="DayOfTheWeek" variant="body3">
                            Wed
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Column className="absolute items-center justify-start left-[0] w-[20%]">
                      <Column className="bg-white_A700 items-end justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                        <Text className="DayOfTheWeek" variant="body3">
                          Tue
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="absolute items-center justify-start left-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[17%]">
                    <Text
                      className="bg-white_A700 font-medium lg:pl-[24px] xl:pl-[31px] 2xl:pl-[35px] 3xl:pl-[42px] lg:pr-[5px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rotate-[90deg] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] text-bluegray_900 w-[163px]"
                      variant="body3"
                    >
                      Mon
                    </Text>
                  </Column>
                </Stack>
                <Column className="absolute bg-gray_100 bottom-[0] items-center justify-start right-[14%] w-[14%]">
                  <Column className="bg-gray_54 justify-start outline outline-[1px] outline-blue_101 lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rotate-[90deg] w-[100%]">
                    <Text className="Day" variant="body1">
                      6
                    </Text>
                    <div className="bg-indigo_400 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"></div>
                  </Column>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[0] items-end justify-start outline outline-[1px] outline-blue_101 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] right-[29%] rotate-[90deg] w-[14%]">
                  <Text
                    className="font-medium lg:mb-[54px] xl:mb-[68px] 2xl:mb-[77px] 3xl:mb-[92px] rotate-[90deg] text-bluegray_901 w-[auto]"
                    variant="body1"
                  >
                    5
                  </Text>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[0] inset-x-[0] justify-start mx-[auto] outline outline-[1px] outline-blue_101 lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rotate-[90deg] w-[14%]">
                  <Text className="Day" variant="body1">
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
                  <Column className="bg-white_A700 items-end outline outline-[1px] outline-blue_101 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[14%]">
                    <Text className="mr-[2px] Day8" variant="body1">
                      11
                    </Text>
                  </Column>
                  <Stack className="2xl:h-[109px] 3xl:h-[130px] lg:h-[77px] xl:h-[97px] w-[29%]">
                    <Column className="absolute items-center justify-start w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A700 items-end outline outline-[1px] outline-blue_101 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[50%]">
                          <Text className="Day8" variant="body1">
                            12
                          </Text>
                        </Column>
                        <Column className="bg-gray_100 items-center w-[50%]">
                          <Column className="bg-gray_54 items-end justify-start outline outline-[1px] outline-blue_101 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[100%]">
                            <Text className="Day8" variant="body1">
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
                  <Column className="bg-white_A700 outline outline-[1px] outline-blue_101 lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rotate-[90deg] w-[14%]">
                    <Text
                      className="font-medium 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[79px] xl:ml-[99px] rotate-[90deg] text-bluegray_901 w-[auto]"
                      variant="body1"
                    >
                      18
                    </Text>
                    <div className="bg-indigo_400 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[32px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[54px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"></div>
                  </Column>
                  <Column className="bg-white_A700 items-end outline outline-[1px] outline-blue_101 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rotate-[90deg] w-[14%]">
                    <Text className="Day8" variant="body1">
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

export default DesktopFortySevenPage;
