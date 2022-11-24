import React from "react";

import { Column, Row, Img, Text, Button, Stack, Input } from "components";
import { useNavigate } from "react-router-dom";

const DesktopThirtySevenPage = () => {
  const navigate = useNavigate();

  function handleNavigate31() {
    navigate("/desktopfortyeight");
  }

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
            <Img
              src="images/img_ellipse1.png"
              className="2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[89px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rotate-[1deg] rounded-radius50 w-[53%]"
              alt="EllipseOne"
            />
            <Text className="columnd01bb442c0777dnine2" as="h6" variant="h6">
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
                    <Text className="rowakaricons" variant="body1">
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
            <Column className="justify-start lg:mb-[311px] xl:mb-[389px] 2xl:mb-[438px] 3xl:mb-[525px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[97%]">
              <Row className="items-center justify-between w-[100%]">
                <Text className="text-black_900 w-[auto]" as="h4" variant="h4">
                  Detalles del taller
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
              <Row className="items-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[56%]">
                <Text className="Curso" as="h5" variant="h5">
                  Tema
                </Text>
                <Text
                  className="mb-[2px] lg:ml-[307px] xl:ml-[384px] 2xl:ml-[432px] 3xl:ml-[518px] text-black_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Fecha
                </Text>
              </Row>
              <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                <Input
                  className="placeholder:text-black_900 language"
                  wrapClassName="w-[48%]"
                  name="language"
                  placeholder="Bucles e iteración "
                ></Input>
                <Input
                  className="placeholder:text-black_900 language"
                  wrapClassName="2xl:ml-[42px] 3xl:ml-[50px] lg:ml-[29px] w-[48%] xl:ml-[37px]"
                  name="date"
                  placeholder="22/07/2022"
                ></Input>
              </Row>
              <Row className="items-center lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[63%]">
                <Text
                  className="text-black_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Inicio de clase
                </Text>
                <Text
                  className="lg:ml-[227px] xl:ml-[284px] 2xl:ml-[320px] 3xl:ml-[384px] text-black_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Fin de clase
                </Text>
              </Row>
              <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                <Input
                  className="placeholder:text-black_900 language"
                  wrapClassName="w-[48%]"
                  name="time"
                  placeholder="13:00"
                ></Input>
                <Input
                  className="placeholder:text-black_900 language"
                  wrapClassName="2xl:ml-[42px] 3xl:ml-[50px] lg:ml-[29px] w-[48%] xl:ml-[37px]"
                  name="time One"
                  placeholder="15:00"
                ></Input>
              </Row>
              <Row className="items-center lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[74%]">
                <Button
                  className="common-pointer font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-gray_51 w-[31%]"
                  onClick={handleNavigate31}
                  shape="RoundedBorder20"
                  size="lg"
                  variant="FillIndigo400"
                >
                  Ver asistencia
                </Button>
                <Button
                  className="font-bold lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[31%]"
                  shape="RoundedBorder20"
                  size="lg"
                  variant="OutlineIndigo400_1"
                >
                  Modificar
                </Button>
                <Button
                  className="font-bold lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[31%]"
                  shape="RoundedBorder20"
                  size="lg"
                  variant="OutlineIndigo400_1"
                >
                  Ingresar a la sesión
                </Button>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DesktopThirtySevenPage;
