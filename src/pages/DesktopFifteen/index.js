import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  SelectBox,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const DesktopFifteenPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/desktopeightone");
  }
  function handleNavigate2() {
    navigate("/desktopthirteentwo");
  }
  function handleNavigate3() {
    navigate("/desktopeightone");
  }

  return (
    <>
      <Column className="bg-white_A700 font-montserrat justify-start mx-[auto] w-[100%]">
        <div className="overflow-x-auto w-[100%]">
          <Row className="items-start justify-between w-[100%]">
            <Column className="items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[26%]">
              <Img
                src="images/img_d01bb442c0777d9.png"
                className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[21%]"
                alt="d01bb442c0777dNine"
              />
              <Img
                src="images/img_ellipse1.png"
                className="2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[89px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rotate-[1deg] rounded-radius50 w-[24%]"
                alt="EllipseOne"
              />
              <Text className="columnd01bb442c0777dnine2" as="h6" variant="h6">
                Dana Vallejos
              </Text>
              <Text className="lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] columnu201910362upc1">
                u201910362@upc.edu.pe
              </Text>
              <Column className="justify-start lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[26%]">
                <Row className="items-center w-[77%]">
                  <Img
                    src="images/img_computer_1.svg"
                    className="Teacher"
                    alt="computer"
                  />
                  <Button
                    className="common-pointer bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[55%]"
                    onClick={handleNavigate3}
                  >
                    Inicio
                  </Button>
                </Row>
                <Row className="items-center lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[100%]">
                  <Img
                    src="images/img_teacher.png"
                    className="Teacher"
                    alt="Teacher"
                  />
                  <Button
                    className="common-pointer bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[65%]"
                    onClick={handleNavigate2}
                  >
                    Horarios
                  </Button>
                </Row>
              </Column>
              <Row className="items-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[94%]">
                <Img
                  src="images/img_laptop.png"
                  className="lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mt-[4px] w-[5%]"
                  alt="laptop"
                />
                <Img
                  src="images/img_group1461.png"
                  className="lg:ml-[167px] xl:ml-[209px] 2xl:ml-[236px] 3xl:ml-[283px] Teacher"
                  alt="VideoConferenc"
                />
                <Button className="bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[26%]">
                  Mis reservas
                </Button>
              </Row>
              <Column className="justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[40%]">
                <Row className="items-center w-[100%]">
                  <Img src="images/img_map.svg" className="map2" alt="map" />
                  <Text className="rowmap" variant="body1">
                    Guía de usuario
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[44%]">
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
            <Column className="bg-gray_50 items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[72%]">
              <Column className="justify-start lg:mb-[121px] xl:mb-[152px] 2xl:mb-[171px] 3xl:mb-[205px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[97%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text
                    className="text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
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
                <Row className="items-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[55%]">
                  <Text
                    className="text-black_900 tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Tipo de clase
                  </Text>
                  <Text
                    className="lg:ml-[238px] xl:ml-[298px] 2xl:ml-[335px] 3xl:ml-[402px] text-black_900 tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Tutor
                  </Text>
                </Row>
                <Row className="font-roboto items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[48%]"
                    placeholderClassName="text-gray_401"
                    name="language"
                    placeholder="Taller "
                    isSearchable={false}
                    isMulti={true}
                  ></SelectBox>
                  <SelectBox
                    className="font-medium lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[48%]"
                    placeholderClassName="text-gray_401"
                    name="Group1485"
                    placeholder="Wiktoria Urive"
                    isSearchable={false}
                    isMulti={true}
                  ></SelectBox>
                </Row>
                <Row className="font-montserrat items-center lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[60%]">
                  <Text
                    className="text-black_900 tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Curso
                  </Text>
                  <Text
                    className="lg:ml-[303px] xl:ml-[379px] 2xl:ml-[427px] 3xl:ml-[512px] text-black_900 tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Vacantes
                  </Text>
                </Row>
                <Row className="font-roboto items-center lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[93%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[48%]"
                    placeholderClassName="text-gray_401"
                    name="Group1484"
                    placeholder="Programación I"
                    isSearchable={false}
                    isMulti={true}
                  ></SelectBox>
                  <Input
                    className="placeholder:bg-white_A700 font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_401 text-gray_401 tracking-ls1 w-[100%]"
                    wrapClassName="2xl:ml-[42px] 3xl:ml-[50px] lg:ml-[29px] w-[48%] xl:ml-[37px]"
                    name="Group1483"
                    placeholder="5"
                    variant="FillWhiteA700"
                  ></Input>
                </Row>
                <Button
                  className="font-bold lg:ml-[512px] xl:ml-[641px] 2xl:ml-[721px] 3xl:ml-[865px] 3xl:mt-[114px] lg:mt-[67px] xl:mt-[84px] 2xl:mt-[95px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-gray_51 w-[23%]"
                  shape="RoundedBorder20"
                  size="lg"
                  variant="FillIndigo400"
                >
                  Inscribirme
                </Button>
                <Column className="bg-white_A700 font-montserrat items-center justify-end lg:ml-[307px] xl:ml-[385px] 2xl:ml-[433px] 3xl:ml-[519px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] lg:p-[27px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[0] shadow-bs w-[51%]">
                  <Column className="items-center justify-start mt-[1px] w-[80%]">
                    <Text
                      className="font-bold text-black_900 tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      ¿Quiere inscribirse a este taller?
                    </Text>
                    <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                      <Button
                        className="common-pointer font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[49%]"
                        onClick={handleNavigate1}
                        shape="RoundedBorder20"
                        size="md"
                        variant="FillIndigo400"
                      >
                        Sí
                      </Button>
                      <Button
                        className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[49%]"
                        shape="RoundedBorder20"
                        size="md"
                        variant="OutlineIndigo400"
                      >
                        No
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Row>
        </div>
      </Column>
    </>
  );
};

export default DesktopFifteenPage;
