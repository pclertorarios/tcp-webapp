import React from "react";

import {
  Row,
  Img,
  Stack,
  Column,
  Text,
  Button,
  List,
  Line,
  Slider,
} from "components";
import { useNavigate } from "react-router-dom";

const DesktopEightOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/desktopfifteen");
  }
  function handleNavigate7() {
    navigate("/desktopthirteentwo");
  }
  function handleNavigate8() {
    navigate("/desktopthirteentwo");
  }
  function handleNavigate9() {
    navigate("/desktopfifteen");
  }
  function handleNavigate10() {
    navigate("/desktopfifteen");
  }
  function handleNavigate11() {
    navigate("/desktopfifteen");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef();
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <Row className="bg-white_A700 font-montserrat items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_laptop.png"
          className="lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[403px] xl:mt-[504px] 2xl:mt-[567px] 3xl:mt-[680px] w-[1%]"
          alt="laptop"
        />
        <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] lg:ml-[152px] xl:ml-[190px] 2xl:ml-[214px] 3xl:ml-[256px] w-[97%]">
          <Column className="absolute items-center justify-start w-[100%]">
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
                <Text
                  className="columnd01bb442c0777dnine2"
                  as="h6"
                  variant="h6"
                >
                  Dana Vallejos
                </Text>
                <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                  <Text className="u201910362upc">u201910362@upc.edu.pe</Text>
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
                  <Button
                    className="common-pointer bg-transparent font-bold lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[37%]"
                    onClick={handleNavigate8}
                  >
                    Horarios
                  </Button>
                  <Button
                    className="common-pointer bg-transparent font-bold lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[54%]"
                    onClick={handleNavigate7}
                  >
                    Mis reservas
                  </Button>
                  <Text
                    className="font-bold lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Guía de usuario
                  </Text>
                </Column>
              </Column>
              <Stack className="bg-gray_50 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] lg:px-[35px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[84%]">
                <Text
                  className="absolute font-semibold left-[0] text-gray_402 top-[6%] w-[auto]"
                  variant="body1"
                >
                  Sábado 4 de junio, 2022
                </Text>
                <Row className="absolute items-start justify-between right-[1%] top-[3%] w-[45%]">
                  <Button
                    className="common-pointer font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[34%]"
                    onClick={handleNavigate6}
                    shape="RoundedBorder20"
                    size="md"
                    variant="FillIndigo400"
                  >
                    Nueva tutoría
                  </Button>
                  <Text className="rownueva_tutoría" as="h6" variant="h6">
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
                  className="absolute left-[0] text-black_900 top-[3%] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  ¡Hola, Dana!
                </Text>
                <Text
                  className="absolute font-bold left-[0] text-black_900 top-[37%] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Talleres recomendados
                </Text>
                <Row className="absolute items-start justify-center right-[15%] top-[37%] w-[45%]">
                  <Text className="rowwebinarsrecome" as="h6" variant="h6">
                    Webinars recomendados
                  </Text>
                  <Button className="bg-transparent font-bold lg:ml-[115px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[19%]">
                    Jun 17, 2022{" "}
                  </Button>
                </Row>
                <Text
                  className="absolute font-bold right-[15%] text-gray_500 top-[12%] w-[auto]"
                  variant="body1"
                >
                  Jun 16, 2022{" "}
                </Text>
                <Row className="absolute bg-white_A700 items-center justify-center lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] right-[0] rounded-radius20 top-[17%] w-[23%]">
                  <Text className="time" as="h5" variant="h5">
                    12:00
                  </Text>
                  <Text className="programaciónCounter" variant="body1">
                    Programación 1
                  </Text>
                </Row>
                <Row className="absolute bg-white_A700 items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] right-[0] rounded-radius20 top-[25%] w-[23%]">
                  <Text className="time_One" as="h5" variant="h5">
                    05:00
                  </Text>
                  <Text className="MatemticaBsi" variant="body1">
                    Matemática Básica
                  </Text>
                </Row>
                <Text
                  className="absolute bottom-[18%] font-bold right-[15%] text-gray_500 w-[auto]"
                  variant="body1"
                >
                  Jun 18, 2022{" "}
                </Text>
                <Row className="absolute bg-white_A700 h-[max-content] inset-y-[0] items-center justify-center my-[auto] lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] right-[0] rounded-radius20 w-[23%]">
                  <Text className="time" as="h5" variant="h5">
                    12:00
                  </Text>
                  <Text className="programaciónCounter" variant="body1">
                    Programación 1
                  </Text>
                </Row>
                <Row className="absolute bg-white_A700 bottom-[33%] items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] right-[0] rounded-radius20 w-[23%]">
                  <Text className="time_One" as="h5" variant="h5">
                    05:00
                  </Text>
                  <Text className="MatemticaBsi" variant="body1">
                    Matemática Básica
                  </Text>
                </Row>
                <Column className="absolute bg-gradient1  items-center justify-center left-[0] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius20 top-[11%] w-[14%]">
                  <Button
                    className="common-pointer flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center mt-[4px] lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                    onClick={handleNavigate9}
                    shape="icbRoundedBorder20"
                    size="xlIcn"
                    variant="icbFillWhiteA7005b"
                  >
                    <Img
                      src="images/img_group1463.png"
                      className="flex items-center justify-center lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px]"
                      alt="Group1463"
                    />
                  </Button>
                  <Text className="columngroup1463" variant="body1">
                    Inscribirse a un taller
                  </Text>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[33%] items-center justify-start left-[0] lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] rounded-radius20 w-[30%]">
                  <Row className="items-center justify-between w-[97%]">
                    <Column className="w-[58%]">
                      <Text className="Tallerdeempre" variant="body1">
                        Taller de emprendimiento
                      </Text>
                      <Text className="Da23dejuni" variant="body2">
                        Día: 23 de junio
                      </Text>
                      <Text
                        className="mt-[2px] text-black_900 w-[auto]"
                        variant="body2"
                      >
                        Hora: 7:00 pm
                      </Text>
                    </Column>
                    <Button
                      className="common-pointer flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                      onClick={handleNavigate11}
                      shape="icbRoundedBorder10"
                      size="mdIcn"
                      variant="icbFillIndigo400"
                    >
                      <Img
                        src="images/img_arrowright.svg"
                        className="flex items-center justify-center"
                        alt="arrowright"
                      />
                    </Button>
                  </Row>
                </Column>
                <List
                  className="absolute lg:gap-[16px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[27px] grid grid-cols-3 left-[16%] min-h-[auto] top-[11%] w-[45%]"
                  orientation="horizontal"
                >
                  <Column className="listcomputer">
                    <Button
                      className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillWhiteA7005b"
                    >
                      <Img
                        src="images/img_computer.svg"
                        className="flex items-center justify-center"
                        alt="computer"
                      />
                    </Button>
                    <Text className="columncomputer" variant="body1">
                      Inscribirse a una tutoría
                    </Text>
                  </Column>
                  <Column className="bg-gradient2  items-center justify-center mb-[1px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillWhiteA7005b"
                    >
                      <Img
                        src="images/img_group1461.png"
                        className="flex items-center justify-center lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px]"
                        alt="Group1461"
                      />
                    </Button>
                    <Text className="columngroup1461" variant="body1">
                      Ver mis reservas
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
                      Ver horarios disponibles
                    </Text>
                  </Column>
                </List>
                <Stack className="absolute 3xl:h-[1066px] lg:h-[631px] xl:h-[790px] 2xl:h-[888px] inset-[0] justify-center m-[auto] w-[91%]">
                  <Line className="absolute bg-blue_100 3xl:h-[1028px] lg:h-[609px] xl:h-[762px] 2xl:h-[857px] inset-y-[0] my-[auto] right-[29%] w-[3px]" />
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    slidesToShow={3}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    activeSlideCSS="scale-[0.79] absolute"
                    magnifiedIndex={1}
                    centerMode
                    ref={sliderRef}
                    className="absolute bottom-[0] w-[100%]"
                    items={[...Array(9)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <Column className="bg-white_A700 items-center justify-start lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] rounded-radius20 w-[100%]">
                          <Row className="items-center justify-between w-[97%]">
                            <Column className="w-[58%]">
                              <Text className="Tallerdeempre" variant="body1">
                                Taller de programación 2
                              </Text>
                              <Text className="Da23dejuni" variant="body2">
                                Día: 23 de junio
                              </Text>
                              <Text
                                className="mt-[2px] text-black_900 w-[auto]"
                                variant="body2"
                              >
                                Hora: 7:00 pm
                              </Text>
                            </Column>
                            <Button
                              className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                              shape="icbRoundedBorder10"
                              size="mdIcn"
                              variant="icbFillIndigo400"
                            >
                              <Img
                                src="images/img_arrowright.svg"
                                className="flex items-center justify-center"
                                alt="arrowright One"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </React.Fragment>
                    ))}
                  />
                  <Column className="absolute bg-white_A700 bottom-[37%] inset-x-[0] items-center justify-start mx-[auto] lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] rounded-radius20 w-[32%]">
                    <Row className="items-center justify-between w-[97%]">
                      <Column className="w-[58%]">
                        <Text className="Tallerdeempre" variant="body1">
                          Webinar: Obras de la edad media
                        </Text>
                        <Text className="Da23dejuni" variant="body2">
                          Día: 23 de junio
                        </Text>
                        <Text
                          className="mt-[2px] text-black_900 w-[auto]"
                          variant="body2"
                        >
                          Hora: 7:00 pm
                        </Text>
                      </Column>
                      <Button
                        className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                        shape="icbRoundedBorder10"
                        size="mdIcn"
                        variant="icbFillIndigo400"
                      >
                        <Img
                          src="images/img_arrowright.svg"
                          className="flex items-center justify-center"
                          alt="arrowright Three"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Stack>
              </Stack>
            </Row>
          </Column>
          <Column className="absolute bottom-[22%] inset-x-[0] justify-start mx-[auto] w-[95%]">
            <Img
              src="images/img_teacher.png"
              className="Teacher"
              alt="Teacher"
            />
            <Img
              src="images/img_group1461.png"
              className="lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] Teacher"
              alt="VideoConferenc"
            />
            <Img
              src="images/img_map.svg"
              className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[2%]"
              alt="map"
            />
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={5}
              activeIndex={sliderState1}
              onSlideChanged={(e) => {
                setsliderState1(e?.item);
              }}
              activeSlideCSS="scale-[0.79]"
              magnifiedIndex={1}
              centerMode
              ref={sliderRef1}
              className="mt-[1px] w-[100%]"
              items={[...Array(15)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Column className="bg-white_A700 items-center justify-start lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] rounded-radius20 w-[100%]">
                    <Row className="items-center justify-between w-[97%]">
                      <Column className="w-[58%]">
                        <Text className="Tallerdeempre" variant="body1">
                          Taller de matemática ...
                        </Text>
                        <Text className="Da23dejuni" variant="body2">
                          Día: 23 de junio
                        </Text>
                        <Text
                          className="mt-[2px] text-black_900 w-[auto]"
                          variant="body2"
                        >
                          Hora: 7:00 pm
                        </Text>
                      </Column>
                      <Button
                        className="common-pointer flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                        onClick={handleNavigate10}
                        shape="icbRoundedBorder10"
                        size="mdIcn"
                        variant="icbFillIndigo400"
                      >
                        <Img
                          src="images/img_arrowright.svg"
                          className="flex items-center justify-center"
                          alt="arrowright Four"
                        />
                      </Button>
                    </Row>
                  </Column>
                </React.Fragment>
              ))}
            />
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default DesktopEightOnePage;
