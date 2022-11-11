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

const DesktopSeventeenPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-montserrat items-center justify-start mx-[auto] lg:pl-[34px] xl:pl-[42px] 2xl:pl-[48px] 3xl:pl-[57px] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <Column className="items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[14%]">
            <Img
              src="images/img_d01bb442c0777d9.png"
              className="d01bb442c0777dNine2"
              alt="d01bb442c0777dNine"
            />
            <div className="bg-black_900_33 2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[89px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rotate-[1deg] rounded-radius5109 w-[53%]"></div>
            <Text className="columnd01bb442c0777dnine3" as="h6" variant="h6">
              Dana Vallejos
            </Text>
            <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
              <Text className="columnu201910362upc">u201910362@upc.edu.pe</Text>
              <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[43%]">
                <Img
                  src="images/img_computer_1.svg"
                  className="Teacher"
                  alt="computer"
                />
                <Button className="bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[55%]">
                  Inicio
                </Button>
              </Row>
              <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[56%]">
                <Img
                  src="images/img_teacher.png"
                  className="Teacher"
                  alt="Teacher"
                />
                <Button className="bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[65%]">
                  Horarios
                </Button>
              </Row>
              <div className="lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] overflow-x-auto w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Img
                    src="images/img_laptop.png"
                    className="laptop2"
                    alt="laptop"
                  />
                  <Row className="bg-gray_50 items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
                    <Img
                      src="images/img_group1461.png"
                      className="VideoConferenc2"
                      alt="VideoConferenc"
                    />
                    <Text className="rowvideoconferenc" variant="body1">
                      Mis reservas
                    </Text>
                  </Row>
                </Row>
              </div>
              <Row className="items-center justify-end ml-[auto] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[87%]">
                <Img src="images/img_map.svg" className="map2" alt="map" />
                <Text className="rowmap" variant="body1">
                  Guía de usuario
                </Text>
              </Row>
              <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[38%]">
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
          <Column className="bg-gray_50 items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[83%]">
            <Column className="justify-start lg:mb-[169px] xl:mb-[212px] 2xl:mb-[239px] 3xl:mb-[286px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[97%]">
              <Column className="justify-start w-[100%]">
                <Row className="font-montserrat items-center justify-between w-[100%]">
                  <Text
                    className="text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Mis reservas
                  </Text>
                  <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] w-[6%]">
                    <Button
                      className="absolute bottom-[0] flex lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] items-center justify-center left-[0] lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                      shape="icbRoundedBorder10"
                      size="mdIcn"
                      variant="icbFillGray800"
                    >
                      <Img
                        src="images/img_notification.svg"
                        className="flex items-center justify-center"
                        alt="notification"
                      />
                    </Button>
                    <div className="absolute bg-gray_901 right-[0] rounded-radius50 top-[0] Teacher"></div>
                  </Stack>
                </Row>
                <Row className="font-roboto items-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[79%]">
                  <Text className="Curso" as="h5" variant="h5">
                    Curso
                  </Text>
                  <Text
                    className="lg:ml-[191px] xl:ml-[239px] 2xl:ml-[269px] 3xl:ml-[322px] text-black_900 tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Tutor
                  </Text>
                  <Text
                    className="lg:ml-[192px] xl:ml-[241px] 2xl:ml-[271px] 3xl:ml-[325px] text-black_900 tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Tipo de clase
                  </Text>
                </Row>
                <Stack className="font-montserrat lg:h-[204px] xl:h-[255px] 2xl:h-[287px] 3xl:h-[344px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[93%]">
                  <Column className="absolute items-center justify-start w-[100%]">
                    <Column className="items-end justify-start w-[100%]">
                      <Row className="items-center justify-end ml-[auto] w-[65%]">
                        <SelectBox
                          className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[47%]"
                          placeholderClassName="text-gray_401"
                          name="Group1491"
                          placeholder="Seleccione un tutor"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_10X17.svg"
                              className="lg:w-[12px] lg:h-[8px] lg:mr-[16px] xl:w-[15px] xl:h-[9px] xl:mr-[20px] 2xl:w-[17px] 2xl:h-[11px] 2xl:mr-[23px] 3xl:w-[20px] 3xl:h-[13px] 3xl:mr-[27px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[47%]"
                          placeholderClassName="text-gray_401"
                          name="Group1492"
                          placeholder="Seleccione tipo de clase"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_10X17.svg"
                              className="lg:w-[12px] lg:h-[8px] lg:mr-[16px] xl:w-[15px] xl:h-[9px] xl:mr-[20px] 2xl:w-[17px] 2xl:h-[11px] 2xl:mr-[23px] 3xl:w-[20px] 3xl:h-[13px] 3xl:mr-[27px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </Row>
                      <Column className="font-roboto justify-start lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]">
                        <Text
                          className="text-black_900 tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Lunes 13 de junio
                        </Text>
                        <List
                          className="font-montserrat gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="Table">
                            <Column className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[17%]">
                              <Text
                                className="text-black_900 w-[auto]"
                                variant="body2"
                              >
                                C001 - programación 1
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[11%]">
                              <Text
                                className="text-black_900 w-[auto]"
                                variant="body2"
                              >
                                Wiktoria Uribe
                              </Text>
                            </Column>
                            <Column className="items-center xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] w-[9%]">
                              <Text
                                className="text-black_900 w-[auto]"
                                variant="body2"
                              >
                                13:00 - 15:00
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] w-[8%]">
                              <Button
                                className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                                shape="RoundedBorder15"
                                size="sm"
                                variant="FillGray800"
                              >
                                Detalles
                              </Button>
                            </Column>
                          </Row>
                          <Row className="bg-gray_53 items-center my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                            <Column className="items-center lg:ml-[49px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] w-[8%]">
                              <Text
                                className="text-black_900 w-[auto]"
                                variant="body2"
                              >
                                C002 - cpl I
                              </Text>
                            </Column>
                            <Column className="items-center 3xl:ml-[104px] lg:ml-[61px] xl:ml-[77px] 2xl:ml-[87px] w-[9%]">
                              <Text
                                className="text-black_900 w-[auto]"
                                variant="body2"
                              >
                                Miriam Kidd
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[106px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] w-[9%]">
                              <Text
                                className="text-black_900 w-[auto]"
                                variant="body2"
                              >
                                15:00 - 17:00
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] w-[8%]">
                              <Button
                                className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                                shape="RoundedBorder15"
                                size="sm"
                                variant="FillGray800"
                              >
                                Detalles
                              </Button>
                            </Column>
                          </Row>
                        </List>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="absolute items-center justify-start left-[0] top-[1%] w-[31%]">
                    <SelectBox
                      className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[100%]"
                      placeholderClassName="text-gray_401"
                      name="Group1494"
                      placeholder="Seleccione un curso"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_10X17.svg"
                          className="lg:w-[12px] lg:h-[8px] lg:mr-[16px] xl:w-[15px] xl:h-[9px] xl:mr-[20px] 2xl:w-[17px] 2xl:h-[11px] 2xl:mr-[23px] 3xl:w-[20px] 3xl:h-[13px] 3xl:mr-[27px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Column className="bg-white_A700 items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius20 shadow-bs w-[100%]">
                      <Text
                        className="bg-white_A700 font-medium lg:pl-[22px] xl:pl-[27px] 2xl:pl-[31px] 3xl:pl-[37px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius20 text-black_900 tracking-ls1 w-[298px]"
                        variant="body1"
                      >
                        Programación I
                      </Text>
                      <Text
                        className="bg-white_A700 font-medium lg:pl-[21px] xl:pl-[26px] 2xl:pl-[30px] 3xl:pl-[36px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius20 text-black_900 tracking-ls1 w-[298px]"
                        variant="body1"
                      >
                        CPL I
                      </Text>
                      <Text
                        className="bg-white_A700 font-medium lg:pl-[22px] xl:pl-[27px] 2xl:pl-[31px] 3xl:pl-[37px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius20 text-black_900 tracking-ls1 w-[298px]"
                        variant="body1"
                      >
                        Matemática Básica
                      </Text>
                    </Column>
                  </Column>
                </Stack>
                <Text
                  className="font-roboto lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] text-black_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Martes 14 de junio
                </Text>
              </Column>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[93%]"
                orientation="vertical"
              >
                <Row className="Table">
                  <Column className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[17%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      C001 - programación 1
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[11%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      Wiktoria Uribe
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] w-[9%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      13:00 - 15:00
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] w-[8%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                      shape="RoundedBorder15"
                      size="sm"
                      variant="FillGray800"
                    >
                      Detalles
                    </Button>
                  </Column>
                </Row>
                <Row className="bg-gray_53 items-center my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                  <Column className="items-center lg:ml-[49px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] w-[8%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      C002 - cpl I
                    </Text>
                  </Column>
                  <Column className="items-center 3xl:ml-[104px] lg:ml-[61px] xl:ml-[77px] 2xl:ml-[87px] w-[9%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      Miriam Kidd
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[106px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] w-[9%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      15:00 - 17:00
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] w-[8%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                      shape="RoundedBorder15"
                      size="sm"
                      variant="FillGray800"
                    >
                      Detalles
                    </Button>
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

export default DesktopSeventeenPage;
