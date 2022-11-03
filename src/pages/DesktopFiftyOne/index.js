import React from "react";

import { Column, Row, Img, Text, Stack, Button, Line, List } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopFiftyOnePage = () => {
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
            <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
              <Text className="columnu201910362upc">u201910362@upc.edu.pe</Text>
              <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[58px] xl:mt-[72px] 2xl:mt-[82px] 3xl:mt-[98px] w-[43%]">
                <Img
                  src="images/img_computer.svg"
                  className="computer"
                  alt="computer"
                />
                <Text className="rowcomputer" as="h6" variant="h6">
                  Inicio
                </Text>
              </Row>
              <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[71%]">
                <Img
                  src="images/img_teacher.png"
                  className="computer"
                  alt="Teacher"
                />
                <Text className="rowcomputer" as="h6" variant="h6">
                  Mis tutorías
                </Text>
              </Row>
              <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[66%]">
                <div className="computer"></div>
                <Text className="rowakaricons1" as="h6" variant="h6">
                  Calendario
                </Text>
              </Row>
              <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[76%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark"
                />
                <Text className="rowcheckmark" as="h6" variant="h6">
                  Rendimiento
                </Text>
              </Row>
              <Row className="bg-gray_50 items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
                <Img
                  src="images/img_videoconferenc.png"
                  className="VideoConferenc"
                  alt="VideoConferenc"
                />
                <Text className="rowakaricons" as="h6" variant="h6">
                  Mis talleres
                </Text>
              </Row>
              <Row className="items-center justify-end ml-[auto] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[87%]">
                <Img src="images/img_map.svg" className="map" alt="map" />
                <Text className="rowcomputer" as="h6" variant="h6">
                  Guía de usuario
                </Text>
              </Row>
              <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[38%]">
                <Img
                  src="images/img_computer_20X20.svg"
                  className="computer_One"
                  alt="computer One"
                />
                <Text className="rowcomputer_one" as="h6" variant="h6">
                  FAQ
                </Text>
              </Row>
            </Column>
          </Column>
          <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] overflow-auto w-[84%]">
            <Column className="absolute bg-gray_50 items-center justify-end lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[100%]">
              <Column className="justify-start 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[97%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text
                    className="text-black_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Rendimiento
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
                <Row className="font-inter items-start justify-between lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[99%]">
                  <Column className="justify-start w-[69%]">
                    <Row className="font-inter items-center justify-between w-[100%]">
                      <Column className="bg-white_A700 items-center lg:py-[32px] xl:py-[40px] 2xl:py-[45px] 3xl:py-[54px] rounded-radius20 w-[48%]">
                        <Column className="items-center justify-start lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] w-[100%]">
                          <Column className="justify-start w-[81%]">
                            <Row className="items-start justify-between w-[100%]">
                              <Text
                                className="rowprimarytext"
                                as="h5"
                                variant="h5"
                              >
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
                              name="Group366"
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
                              name="Group367"
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
                              className="bg-cover bg-repeat lg:h-[101px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] mb-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:pr-[19px] xl:pr-[24px] 2xl:pr-[28px] 3xl:pr-[33px] w-[96%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group329.svg')",
                              }}
                            >
                              <Img
                                src="images/img_vector389.svg"
                                className="absolute bottom-[0] 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] left-[0] w-[47%]"
                                alt="Vector389"
                              />
                              <Img
                                src="images/img_vector390.svg"
                                className="Vector390"
                                alt="Vector390"
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
                    <Text className="columncomentariosdes" as="h4" variant="h4">
                      Comentarios destacados
                    </Text>
                  </Column>
                  <List
                    className="gap-[0] min-h-[auto] w-[29%]"
                    orientation="vertical"
                  >
                    <Column className="listmistalleres_one">
                      <Column className="items-center justify-start lg:mb-[23px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[98%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="rowmistalleres" as="h5" variant="h5">
                            Mis talleres
                          </Text>
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
                            size="smIcn"
                          >
                            <Img
                              src="images/img_group2016.svg"
                              className="flex items-center justify-center"
                              alt="Group2019 One"
                            />
                          </Button>
                        </Row>
                        <Row className="font-montserrat items-start justify-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[57%]">
                          <Text
                            className="mt-[2px] text-black_900 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            4.5
                          </Text>
                          <Img
                            src="images/img_star.svg"
                            className="star"
                            alt="star"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="listmistalleres_one">
                      <Column className="items-center justify-start lg:mb-[22px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[99%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="rowmistutoras" as="h5" variant="h5">
                            Mis tutorías
                          </Text>
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
                            size="smIcn"
                          >
                            <Img
                              src="images/img_group2016.svg"
                              className="flex items-center justify-center"
                              alt="Group2024"
                            />
                          </Button>
                        </Row>
                        <Row className="font-montserrat items-start justify-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[56%]">
                          <Text
                            className="mt-[2px] text-black_900 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            4.5
                          </Text>
                          <Img
                            src="images/img_star.svg"
                            className="star"
                            alt="star One"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </List>
                </Row>
                <Row className="font-montserrat items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[85%]">
                  <Column className="bg-white_A700 lg:p-[36px] xl:p-[45px] 2xl:p-[51px] 3xl:p-[61px] rounded-radius20 w-[49%]">
                    <Text className="Buenprofesor" as="h6" variant="h6">
                      Buen profesor. Explica bien las clases y se le entiende
                      todo porque trabaja con dinámicas
                    </Text>
                    <Text className="JessRomero" as="h6" variant="h6">
                      Jesús Romero
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:p-[36px] xl:p-[45px] 2xl:p-[51px] 3xl:p-[61px] rounded-radius20 w-[49%]">
                    <Text className="Buenprofesor" as="h6" variant="h6">
                      Buen profesor. Explica bien las clases y se le entiende
                      todo porque trabaja con dinámicas
                    </Text>
                    <Text className="JessRomero" as="h6" variant="h6">
                      Jesús Romero
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Column>
            <div className="absolute bottom-[6%] overflow-x-auto right-[0] w-[37%]">
              <Column className="bg-white_A700 justify-center lg:p-[36px] xl:p-[45px] 2xl:p-[51px] 3xl:p-[61px] rounded-radius20 w-[100%]">
                <Text
                  className="font-medium leading-[normal] ml-[1px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-black_900 w-[99%]"
                  as="h6"
                  variant="h6"
                >
                  Buen profesor. Explica bien las clases y se le entiende todo
                  porque trabaja con dinámicas
                </Text>
                <Text className="JessRomero" as="h6" variant="h6">
                  Jesús Romero
                </Text>
              </Column>
            </div>
          </Stack>
        </Row>
      </Column>
    </>
  );
};

export default DesktopFiftyOnePage;
