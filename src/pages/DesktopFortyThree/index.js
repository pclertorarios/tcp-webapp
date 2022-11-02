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
  Input,
} from "components";

const DesktopFortyThreePage = () => {
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
          <Stack className="absolute bg-gray_50 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] lg:px-[35px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] right-[0] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[84%]">
            <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[2%] w-[91%]">
              <Row className="items-end w-[100%]">
                <Text
                  className="font-semibold lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] text-gray_402 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Sábado 4 de junio, 2022
                </Text>
                <Button
                  className="font-semibold mb-[4px] lg:ml-[238px] xl:ml-[298px] 2xl:ml-[335px] 3xl:ml-[402px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[17%]"
                  shape="RoundedBorder20"
                  size="sm"
                  variant="FillGray800"
                >
                  Nueva tutoría
                </Button>
                <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] mb-[4px] lg:ml-[209px] xl:ml-[261px] 2xl:ml-[294px] 3xl:ml-[353px] w-[6%]">
                  <Button
                    className="absolute bottom-[0] flex lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] items-center justify-center left-[0] lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                    shape="icbRoundedBorder10"
                    size="smIcn"
                    variant="icbFillGray800"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className="flex items-center justify-center"
                      alt="notification"
                    />
                  </Button>
                  <div className="absolute bg-gray_901 lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"></div>
                </Stack>
              </Row>
            </Column>
            <Text
              className="absolute left-[0] text-black_900 top-[3%] w-[auto]"
              as="h2"
              variant="h2"
            >
              ¡Hola, Dana!
            </Text>
            <Text
              className="absolute font-bold right-[13%] text-black_900 top-[4%] w-[auto]"
              as="h3"
              variant="h3"
            >
              Calendario
            </Text>
            <Text
              className="absolute font-bold left-[0] text-black_900 top-[37%] w-[auto]"
              as="h3"
              variant="h3"
            >
              Talleres recomendados
            </Text>
            <Row className="absolute items-start justify-center right-[15%] top-[37%] w-[45%]">
              <Text
                className="font-bold mt-[1px] text-black_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Webinars recomendados
              </Text>
              <Text
                className="font-bold lg:ml-[115px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] text-gray_500 w-[auto]"
                as="h4"
                variant="h4"
              >
                Jun 17, 2022{" "}
              </Text>
            </Row>
            <Text
              className="absolute font-bold right-[15%] text-gray_500 top-[13%] w-[auto]"
              as="h4"
              variant="h4"
            >
              Jun 16, 2022{" "}
            </Text>
            <Row className="absolute bg-white_A700 items-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] right-[0] rounded-radius20 top-[17%] w-[23%]">
              <Text
                className="my-[1px] text-black_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                12:00
              </Text>
              <Text
                className="font-bold lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Programación 1
              </Text>
            </Row>
            <Row className="absolute bg-white_A700 items-center justify-center lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] right-[0] rounded-radius20 top-[25%] w-[23%]">
              <Text
                className="ml-[3px] text-black_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                05:00
              </Text>
              <Text
                className="font-bold leading-[normal] mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mr-[30px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[51px] text-black_900 w-[43%]"
                as="h4"
                variant="h4"
              >
                Matemática Básica
              </Text>
            </Row>
            <Text
              className="absolute bottom-[18%] font-bold right-[15%] text-gray_500 w-[auto]"
              as="h4"
              variant="h4"
            >
              Jun 18, 2022{" "}
            </Text>
            <Row className="absolute bg-white_A700 h-[max-content] inset-y-[0] items-center my-[auto] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] right-[0] rounded-radius20 w-[23%]">
              <Text
                className="my-[1px] text-black_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                12:00
              </Text>
              <Text
                className="font-bold lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Programación 1
              </Text>
            </Row>
            <Row className="absolute bg-white_A700 bottom-[33%] items-center justify-center lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] right-[0] rounded-radius20 w-[23%]">
              <Text
                className="ml-[3px] text-black_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                05:00
              </Text>
              <Text
                className="font-bold leading-[normal] mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mr-[30px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[51px] text-black_900 w-[43%]"
                as="h4"
                variant="h4"
              >
                Matemática Básica
              </Text>
            </Row>
            <Column className="absolute bg-gradient  items-center justify-start left-[0] lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius20 top-[11%] w-[14%]">
              <Button
                className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                shape="icbRoundedBorder20"
                size="lgIcn"
                variant="icbFillWhiteA7005b"
              >
                <Img
                  src="images/img_group25.png"
                  className="flex items-center justify-center lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px]"
                  alt="GroupTwentyFive"
                />
              </Button>
              <Text
                className="font-bold leading-[normal] mb-[3px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-center text-gray_52 w-[99%]"
                as="h4"
                variant="h4"
              >
                Inscribirse a un taller
              </Text>
            </Column>
            <Column className="absolute bg-white_A700 bottom-[33%] items-center justify-end left-[0] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius20 w-[30%]">
              <Row className="items-center justify-between mt-[4px] w-[96%]">
                <Column className="w-[53%]">
                  <Text className="Tallerdeempre" as="h4" variant="h4">
                    Taller de emprendimiento
                  </Text>
                  <Text className="Da23dejuni" as="h5" variant="h5">
                    Día: 23 de junio
                  </Text>
                  <Text className="time_Four" as="h5" variant="h5">
                    Hora: 7:00 pm
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  shape="icbRoundedBorder10"
                  size="smIcn"
                  variant="icbFillGray800"
                >
                  <Img
                    src="images/img_arrowright.svg"
                    className="flex items-center justify-center"
                    alt="arrowright"
                  />
                </Button>
              </Row>
            </Column>
            <Row className="absolute items-center justify-center left-[16%] top-[11%] w-[45%]">
              <List
                className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[27px] grid grid-cols-2 min-h-[auto] w-[65%]"
                orientation="horizontal"
              >
                <Column className="bg-gradient1  items-center justify-center mt-[1px] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius20 w-[100%]">
                  <Button
                    className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                    shape="icbRoundedBorder20"
                    size="mdIcn"
                    variant="icbFillWhiteA7005b"
                  >
                    <Img
                      src="images/img_computer.svg"
                      className="flex items-center justify-center"
                      alt="computer"
                    />
                  </Button>
                  <Text
                    className="font-bold leading-[normal] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mb-[9px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-center text-gray_52 w-[99%]"
                    as="h4"
                    variant="h4"
                  >
                    Inscribirse a una tutoría
                  </Text>
                </Column>
                <Column className="bg-gradient2  items-center justify-start mb-[1px] lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius20 w-[100%]">
                  <Button
                    className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                    shape="icbRoundedBorder20"
                    size="mdIcn"
                    variant="icbFillWhiteA7005b"
                  >
                    <Img
                      src="images/img_group23.png"
                      className="flex items-center justify-center lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px]"
                      alt="GroupTwentyThree"
                    />
                  </Button>
                  <Text
                    className="font-bold leading-[normal] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-center text-gray_52 w-[77%]"
                    as="h4"
                    variant="h4"
                  >
                    Ver mis reservas
                  </Text>
                </Column>
              </List>
              <Column className="bg-gradient3  items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] rounded-radius20 w-[30%]">
                <Button
                  className="flex lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]"
                  shape="icbRoundedBorder20"
                  size="lgIcn"
                  variant="icbFillWhiteA7005b"
                >
                  <Img
                    src="images/img_calendar.svg"
                    className="flex items-center justify-center"
                    alt="calendar"
                  />
                </Button>
                <Text
                  className="font-bold leading-[normal] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-center text-gray_52 w-[94%]"
                  as="h4"
                  variant="h4"
                >
                  Ver horarios disponibles
                </Text>
              </Column>
            </Row>
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
                    <Column className="bg-white_A700 items-center justify-end lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius20 w-[100%]">
                      <Row className="items-center justify-between mt-[4px] w-[96%]">
                        <Column className="w-[49%]">
                          <Text className="Tallerdeempre" as="h4" variant="h4">
                            Taller de programación 2
                          </Text>
                          <Text className="Da23dejuni" as="h5" variant="h5">
                            Día: 23 de junio
                          </Text>
                          <Text className="time_Four" as="h5" variant="h5">
                            Hora: 7:00 pm
                          </Text>
                        </Column>
                        <Button
                          className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                          shape="icbRoundedBorder10"
                          size="smIcn"
                          variant="icbFillGray800"
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
              <Column className="absolute bg-white_A700 bottom-[37%] inset-x-[0] items-center justify-end mx-[auto] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius20 w-[32%]">
                <Row className="items-center justify-between mt-[3px] w-[96%]">
                  <Column className="w-[54%]">
                    <Text className="Tallerdeempre" as="h4" variant="h4">
                      Webinar: Obras de la edad media
                    </Text>
                    <Text className="Da23dejuni_Three" as="h5" variant="h5">
                      Día: 23 de junio
                    </Text>
                    <Text className="time_Four" as="h5" variant="h5">
                      Hora: 7:00 pm
                    </Text>
                  </Column>
                  <Button
                    className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                    shape="icbRoundedBorder10"
                    size="smIcn"
                    variant="icbFillGray800"
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
          <Column className="absolute items-center justify-start left-[0] top-[7%] w-[14%]">
            <Img
              src="images/img_d01bb442c0777d9.png"
              className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[46%]"
              alt="d01bb442c0777dNine"
            />
            <div className="bg-black_900_33 2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[89px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rotate-[1deg] rounded-radius5109 w-[53%]"></div>
            <Text
              className="font-bold lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-gray_901 w-[auto]"
              as="h3"
              variant="h3"
            >
              Dana Vallejos
            </Text>
            <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
              <Text className="font-medium ml-[3px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_400 w-[auto]">
                u201910362@upc.edu.pe
              </Text>
              <Input
                className="font-bold p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_800 text-gray_800 w-[100%]"
                wrapClassName="2xl:mt-[65px] 3xl:mt-[78px] flex lg:mt-[46px] w-[100%] xl:mt-[57px]"
                name="GroupThirtyNine"
                placeholder="Inicio"
                prefix={
                  <Img
                    src="images/img_grid.svg"
                    className="ml-[2px] lg:w-[14px] lg:h-[15px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:mr-[16px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[18px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[21px] my-[auto]"
                    alt="grid"
                  />
                }
                variant="FillGray50"
              ></Input>
              <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[56%]">
                <Img
                  src="images/img_teacher.png"
                  className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="Teacher"
                />
                <Text className="rowteacher" as="h4" variant="h4">
                  Horarios
                </Text>
              </Row>
              <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[73%]">
                <Img
                  src="images/img_group23.png"
                  className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="VideoConferenc"
                />
                <Text className="rowteacher" as="h4" variant="h4">
                  Mis reservas
                </Text>
              </Row>
              <Row className="items-center justify-end ml-[auto] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[87%]">
                <Img
                  src="images/img_map.svg"
                  className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[12%]"
                  alt="map"
                />
                <Text className="rowteacher" as="h4" variant="h4">
                  Guía de usuario
                </Text>
              </Row>
            </Column>
          </Column>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            slidesToShow={5}
            activeIndex={sliderState1}
            onSlideChanged={(e) => {
              setsliderState1(e?.item);
            }}
            activeSlideCSS="scale-[0.79] absolute"
            magnifiedIndex={1}
            centerMode
            ref={sliderRef1}
            className="absolute bottom-[22%] inset-x-[0] mx-[auto] w-[95%]"
            items={[...Array(15)].map(() => (
              <React.Fragment key={Math.random()}>
                <Column className="bg-white_A700 items-center justify-end lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius20 w-[100%]">
                  <Row className="items-center justify-between mt-[4px] w-[96%]">
                    <Column className="w-[44%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Taller de matemática ...
                      </Text>
                      <Text className="Da23dejuni_Three" as="h5" variant="h5">
                        Día: 23 de junio
                      </Text>
                      <Text className="time_Four" as="h5" variant="h5">
                        Hora: 7:00 pm
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                      shape="icbRoundedBorder10"
                      size="smIcn"
                      variant="icbFillGray800"
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
        </Stack>
      </Row>
    </>
  );
};

export default DesktopFortyThreePage;
