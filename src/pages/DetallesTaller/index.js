import React from "react";

import { Column, Row, Img, Text, Stack, Button, Input } from "components";
import { useNavigate } from "react-router-dom";

const DetallesTaller = () => {
  const navigate = useNavigate();
  
  function handleNavigateAsistencia() {
    navigate("/asistencia");
  }

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
              <Row className="bg-gray_50 items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
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
            <Column className="justify-start lg:mb-[311px] xl:mb-[389px] 2xl:mb-[438px] 3xl:mb-[525px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[97%]">
              <Row className="items-center justify-between w-[100%]">
                <Text className="text-black_900 w-[auto]" as="h3" variant="h3">
                  Detalles del taller
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
              <Row className="items-start lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[56%]">
                <Text
                  className="mt-[2px] text-black_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Tema
                </Text>
                <Text
                  className="mb-[2px] lg:ml-[307px] xl:ml-[384px] 2xl:ml-[432px] 3xl:ml-[518px] text-black_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Fecha
                </Text>
              </Row>
              <Row className="items-center lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[93%]">
                <Input
                  className="placeholder:text-black_900 language"
                  wrapClassName="w-[48%]"
                  name="language"
                  placeholder="Bucles e iteración "
                  size="sm"
                ></Input>
                <Input
                  className="placeholder:text-black_900 language"
                  wrapClassName="2xl:ml-[42px] 3xl:ml-[50px] lg:ml-[29px] w-[48%] xl:ml-[37px]"
                  name="date"
                  placeholder="22/07/2022"
                  size="sm"
                ></Input>
              </Row>
              <Row className="items-center lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[63%]">
                <Text
                  className="text-black_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Inicio de clase
                </Text>
                <Text
                  className="lg:ml-[227px] xl:ml-[284px] 2xl:ml-[320px] 3xl:ml-[384px] text-black_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Fin de clase
                </Text>
              </Row>
              <Row className="items-center lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[93%]">
                <Input
                  className="placeholder:text-black_900 language"
                  wrapClassName="w-[48%]"
                  name="time"
                  placeholder="13:00"
                  size="sm"
                ></Input>
                <Input
                  className="placeholder:text-black_900 language"
                  wrapClassName="2xl:ml-[42px] 3xl:ml-[50px] lg:ml-[29px] w-[48%] xl:ml-[37px]"
                  name="time One"
                  placeholder="15:00"
                  size="sm"
                ></Input>
              </Row>
              <Row className="items-center lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[74%]">
                <Button
                  className="common-pointer font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-gray_51 w-[31%]"
                  onClick={handleNavigateAsistencia}
                  shape="RoundedBorder20"
                  size="xl"
                  variant="FillIndigo400"
                >
                  Ver asistencia
                </Button>
                <Button
                  className="font-bold lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[31%]"
                  shape="RoundedBorder20"
                  size="xl"
                  variant="OutlineIndigo400"
                >
                  Modificar
                </Button>
                <Button
                  className="font-bold lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[31%]"
                  shape="RoundedBorder20"
                  size="xl"
                  variant="OutlineIndigo400"
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

export default DetallesTaller;
