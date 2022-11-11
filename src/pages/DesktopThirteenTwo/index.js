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

const DesktopThirteenTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/desktopthirtysevenone");
  }
  function handleNavigate5() {
    navigate("/desktopthirtyseventwo");
  }

  return (
    <>
      <Column className="bg-white_A700 font-montserrat justify-start mx-[auto] w-[100%]">
        <Row className="items-start w-[100%]">
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
                <Button className="bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[55%]">
                  Inicio
                </Button>
              </Row>
              <Row className="items-center lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[100%]">
                <Img
                  src="images/img_teacher.png"
                  className="Teacher"
                  alt="Teacher"
                />
                <Button className="bg-transparent font-bold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_500 w-[65%]">
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
          <Column className="bg-gray_50 items-end justify-start lg:ml-[27px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] overflow-auto lg:pl-[51px] xl:pl-[64px] 2xl:pl-[72px] 3xl:pl-[86px] lg:py-[51px] xl:py-[64px] 2xl:py-[72px] 3xl:py-[86px] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] w-[72%]">
            <Column className="justify-start lg:mb-[59px] xl:mb-[73px] 2xl:mb-[83px] 3xl:mb-[99px] w-[100%]">
              <Row className="items-center w-[93%]">
                <Text className="text-black_900 w-[auto]" as="h4" variant="h4">
                  Encuentra tu taller ideal
                </Text>
                <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:ml-[369px] xl:ml-[461px] 2xl:ml-[519px] 3xl:ml-[623px] w-[6%]">
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
              <Row className="font-roboto items-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[35%]">
                <Text className="Curso" as="h5" variant="h5">
                  Curso
                </Text>
                <Text
                  className="mb-[2px] lg:ml-[191px] xl:ml-[239px] 2xl:ml-[269px] 3xl:ml-[322px] text-black_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Tutor
                </Text>
              </Row>
              <Row className="font-montserrat items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <SelectBox
                  className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[27%]"
                  placeholderClassName="text-gray_401"
                  name="Group1516"
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
                  className="font-medium lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_401 tracking-ls1 w-[27%]"
                  placeholderClassName="text-gray_401"
                  name="Group1518"
                  placeholder="Seleccione un tutor"
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
                  src="images/img_arrowdown_indigo_400.png"
                  className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[328px] xl:ml-[410px] 2xl:ml-[462px] 3xl:ml-[554px] w-[2%]"
                  alt="arrowdown Two"
                />
              </Row>
              <Text className="columnencuentratuta" as="h5" variant="h5">
                Lunes 13 de junio
              </Text>
              <Column className="font-montserrat justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[87%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
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
                        className="common-pointer font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                        onClick={handleNavigate5}
                        shape="RoundedBorder15"
                        size="sm"
                        variant="FillIndigo400"
                      >
                        Detalles
                      </Button>
                    </Column>
                  </Row>
                  <Row className="bg-gray_53 items-center my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                    <Column className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[17%]">
                      <Text className="text-black_900 w-[auto]" variant="body2">
                        C001 - programación 1
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[9%]">
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
                        className="common-pointer font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                        onClick={handleNavigate4}
                        shape="RoundedBorder15"
                        size="sm"
                        variant="FillIndigo400"
                      >
                        Detalles
                      </Button>
                    </Column>
                  </Row>
                  <Row className="Table">
                    <Column className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[17%]">
                      <Text className="text-black_900 w-[auto]" variant="body2">
                        C001 - programación 1
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[12%]">
                      <Text className="text-black_900 w-[auto]" variant="body2">
                        Dominic Nuñez
                      </Text>
                    </Column>
                    <Column className="items-center xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[88px] w-[9%]">
                      <Text className="text-black_900 w-[auto]" variant="body2">
                        13:00 - 15:00
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] w-[8%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="FillIndigo400"
                      >
                        Detalles
                      </Button>
                    </Column>
                  </Row>
                  <Row className="bg-gray_53 items-center my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                    <Column className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[17%]">
                      <Text className="text-black_900 w-[auto]" variant="body2">
                        C001 - programación 1
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[13%]">
                      <Text className="text-black_900 w-[auto]" variant="body2">
                        Shanice Vásquez
                      </Text>
                    </Column>
                    <Column className="items-center xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[139px] lg:ml-[82px] w-[9%]">
                      <Text className="text-black_900 w-[auto]" variant="body2">
                        15:00 - 17:00
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] w-[8%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-white_A700 w-[100%]"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="FillIndigo400"
                      >
                        Detalles
                      </Button>
                    </Column>
                  </Row>
                </List>
                <Text className="column13001500" as="h5" variant="h5">
                  Martes 14 de junio
                </Text>
              </Column>
              <List
                className="font-montserrat gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[87%]"
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
                      variant="FillIndigo400"
                    >
                      Detalles
                    </Button>
                  </Column>
                </Row>
                <Row className="bg-gray_53 items-center my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                  <Column className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[17%]">
                    <Text className="text-black_900 w-[auto]" variant="body2">
                      C001 - programación 1
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[9%]">
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

export default DesktopThirteenTwoPage;
