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

const MisTalleres = () => {
  const navigate = useNavigate();

  function handleNavigateDetallerTaller() {
    navigate("/detallestaller");
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
          <Column className="bg-gray_50 items-end justify-start overflow-auto lg:pl-[51px] xl:pl-[64px] 2xl:pl-[72px] 3xl:pl-[86px] lg:py-[51px] xl:py-[64px] 2xl:py-[72px] 3xl:py-[86px] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[84%]">
            <Column className="justify-start lg:mb-[59px] xl:mb-[73px] 2xl:mb-[83px] 3xl:mb-[99px] w-[100%]">
              <Row className="items-center w-[93%]">
                <Text className="text-black_900 w-[auto]" as="h3" variant="h3">
                  Mis talleres
                </Text>
                <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:ml-[540px] xl:ml-[676px] 2xl:ml-[760px] 3xl:ml-[912px] w-[6%]">
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
              <Row className="font-roboto items-center lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[43%]">
                <Text
                  className="mt-[1px] text-black_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Curso
                </Text>
                <Text
                  className="mb-[1px] lg:ml-[190px] xl:ml-[238px] 2xl:ml-[268px] 3xl:ml-[321px] text-black_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Tipo de clase
                </Text>
              </Row>
              <Row className="font-montserrat items-center lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                <SelectBox
                  className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[27%]"
                  placeholderClassName="text-gray_401"
                  name="Group278"
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
                  className="font-medium lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[27%]"
                  placeholderClassName="text-gray_401"
                  name="Group280"
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
                <Img
                  src="images/img_arrowdown_10X17.png"
                  className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[329px] xl:ml-[411px] 2xl:ml-[463px] 3xl:ml-[555px] w-[2%]"
                  alt="arrowdown Two"
                />
              </Row>
              <Text className="columnmistalleres_one" as="h4" variant="h4">
                Lunes 13 de junio
              </Text>
              <Column className="font-montserrat justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[87%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="Table">
                    <Column className="items-center pt-[3px] px-[3px] w-[24%]">
                      <Text className="text-black_900 w-[auto]" variant="body1">
                        C001 - programación 1
                      </Text>
                    </Column>
                    <Column className="lg:ml-[179px] xl:ml-[224px] 2xl:ml-[252px] 3xl:ml-[302px] pr-[3px] pt-[3px] w-[24%]">
                      <Text className="text-black_900 w-[auto]" variant="body1">
                        13:00 - 15:00
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[8%]">
                      <Button
                        className="common-pointer font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                        onClick={handleNavigateDetallerTaller}
                        shape="RoundedBorder15"
                        variant="FillIndigo400"
                      >
                        Detalles
                      </Button>
                    </Column>
                  </Row>
                  <Row className="bg-gray_53 items-center my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                    <Column className="items-center pt-[3px] px-[3px] w-[24%]">
                      <Text className="text-black_900 w-[auto]" variant="body1">
                        C001 - programación 1
                      </Text>
                    </Column>
                    <Column className="lg:ml-[179px] xl:ml-[224px] 2xl:ml-[252px] 3xl:ml-[302px] pr-[3px] pt-[3px] w-[24%]">
                      <Text className="text-black_900 w-[auto]" variant="body1">
                        15:00 - 17:00
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[8%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                        shape="RoundedBorder15"
                        variant="FillIndigo400"
                      >
                        Detalles
                      </Button>
                    </Column>
                  </Row>
                  <Row className="Table">
                    <Column className="items-center pt-[3px] px-[3px] w-[24%]">
                      <Text className="text-black_900 w-[auto]" variant="body1">
                        C001 - programación 1
                      </Text>
                    </Column>
                    <Column className="lg:ml-[179px] xl:ml-[224px] 2xl:ml-[252px] 3xl:ml-[302px] pr-[3px] pt-[3px] w-[24%]">
                      <Text className="text-black_900 w-[auto]" variant="body1">
                        13:00 - 15:00
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[8%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                        shape="RoundedBorder15"
                        variant="FillIndigo400"
                      >
                        Detalles
                      </Button>
                    </Column>
                  </Row>
                  <Row className="bg-gray_53 items-center my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                    <Column className="items-center pt-[3px] px-[3px] w-[24%]">
                      <Text className="text-black_900 w-[auto]" variant="body1">
                        C001 - programación 1
                      </Text>
                    </Column>
                    <Column className="lg:ml-[179px] xl:ml-[224px] 2xl:ml-[252px] 3xl:ml-[302px] pr-[3px] pt-[3px] w-[24%]">
                      <Text className="text-black_900 w-[auto]" variant="body1">
                        15:00 - 17:00
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[8%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                        shape="RoundedBorder15"
                        variant="FillIndigo400"
                      >
                        Detalles
                      </Button>
                    </Column>
                  </Row>
                </List>
                <Text className="column13001500" as="h4" variant="h4">
                  Martes 14 de junio
                </Text>
              </Column>
              <List
                className="font-montserrat gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[87%]"
                orientation="vertical"
              >
                <Row className="Table">
                  <Column className="items-center pt-[3px] px-[3px] w-[24%]">
                    <Text className="text-black_900 w-[auto]" variant="body1">
                      C001 - programación 1
                    </Text>
                  </Column>
                  <Column className="lg:ml-[179px] xl:ml-[224px] 2xl:ml-[252px] 3xl:ml-[302px] pr-[3px] pt-[3px] w-[24%]">
                    <Text className="text-black_900 w-[auto]" variant="body1">
                      13:00 - 15:00
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[8%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                      shape="RoundedBorder15"
                      variant="FillIndigo400"
                    >
                      Detalles
                    </Button>
                  </Column>
                </Row>
                <Row className="bg-gray_53 items-center my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                  <Column className="items-center pt-[3px] px-[3px] w-[24%]">
                    <Text className="text-black_900 w-[auto]" variant="body1">
                      C001 - programación 1
                    </Text>
                  </Column>
                  <Column className="lg:ml-[179px] xl:ml-[224px] 2xl:ml-[252px] 3xl:ml-[302px] pr-[3px] pt-[3px] w-[24%]">
                    <Text className="text-black_900 w-[auto]" variant="body1">
                      15:00 - 17:00
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[8%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                      shape="RoundedBorder15"
                      variant="FillIndigo400"
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

export default MisTalleres;
