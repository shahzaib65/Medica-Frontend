import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Img, Input, Text } from "components";

const PatientProfilesettingsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const sideBarMenu = [
    {
      id: 1,
      icon: "images/img_home.svg",
      selectIcon: "images/img_select_home.svg",
      label: "Dashboard",
      link: '/patientDashboard'
    },
    {
      id: 2,
      icon: "images/img_favorite.svg",
      selectIcon: "images/img_select_favorite.svg",
      label: "Fav.Doctor",
      link: "",
    },
    {
      id: 3,
      icon: "images/img_thumbsup.svg",
      selectIcon: "images/img_appointment.svg",
      label: "My Booking",
      link: "",
    },
    {
      id: 4,
      icon: "images/img_payment.svg",
      label: "Payments",
      selectIcon: "images/img_select_payment.svg",
      link: "",
    },
    {
      id: 5,
      icon: "images/img_user.svg",
      label: "Read T&C",
      selectIcon: "images/img_user.svg",
      link: "",
    },
    {
      id: 6,
      icon: "images/img_profile_icon.svg",
      label: "Profile",
      selectIcon: "images/img_select_profile_icon.svg",
      link: "/patientProfile",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-istokweb items-center justify-end mx-auto w-full">
        <div className="flex flex-row gap-[10px] items-start justify-between w-full">
          {isSidebarOpen && (
            <div className="sticky w-[267px] md:w-auto sm:w-auto bg-light_blue-800 flex h-screen  justify-start overflow-auto top-[0]">
              <div>
                <Img
                  className=" hidden h-16 md:ml-[0] ml-[25px] mr-[170px] mt-[15px]"
                  src="images/img_menu.svg"
                  alt="frame"
                />
                <ul className=" mt-[120px] w-[267px] sm:w-auto md:w-auto sm:px-3">
                  {sideBarMenu.map((item) => (
                    <Link to={item.link}
                      className="flex flex-row w-full bg-black-900 pl-[12px] sm:px-0 md:px-0 py-3 gap-[13px] mt-10 font-istokweb text-[25px] font-bold"
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      style={{
                        backgroundColor:
                          selectedItem && selectedItem.id === item.id
                            ? "#ffffff"
                            : "transparent",
                      }}
                    >
                      <Img
                        src={
                          selectedItem && selectedItem.id === item.id
                            ? item.selectIcon
                            : item.icon
                        }
                      ></Img>
                      <p
                        className="mt-1.5 md:hidden sm:hidden"
                        style={{
                          color:
                            selectedItem && selectedItem.id === item.id
                              ? "#022c49"
                              : "#ffffff",
                        }}
                      >
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-[30px] items-start justify-start md:mt-0 sm:mt-0 mt-[3px] md:px-2 w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] mt-4 text-teal-900 sm:mt-3 md:mt-3"
              size="txtIstokWebBold25"
            >
              VIDEO MEDICO
            </Text>
            <div className="flex flex-row md:flex-col sm:flex-col overflow-y-auto md:space-y-2 sm:space-y-2 justify-between w-[97%]">
              <div className=" w-[91%] sm:w-[100%] md:w-[100%] p-[17px] font-josefinsans gap-[25px] flex-col h-[800px] overflow-y-auto md:h-auto sm:h-auto md:gap-5 rounded-[10px] shadow-bs1 top-[0] bg-gray-50_01">
                <div className="flex flex-row md:flex-col sm:flex-col gap-3.5 items-center justify-start w-[32%] md:w-full">
                  <div className="h-[130px] relative w-[47%]">
                    <div className=" h-[130px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs3 w-[130px]">
                      <Img
                        className="h-[130px] m-auto rounded-[50%] w-[130px]"
                        src="images/img_image12_140x140.png"
                        alt="imageTwelve"
                      />
                    </div>
                    <Button
                      className="absolute bottom-[8%] right-3  flex h-[36px] items-center justify-center  w-[36px]"
                      shape="circle"
                      color="red_A700"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[15px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </Button>
                  </div>
                  <div className="md:h-10 h-auto flex flex-col  w-1/2">
                    <Text
                      className="mx-0 sm:text-[16px] md:text-[20px]  text-[25px] text-black-900 top-[0] w-max"
                      size="txtJosefinSansRomanRegular25"
                    >
                      Alessia Jones
                    </Text>
                    <Text
                      className=" text-black-900_b2 text-xl sm:text-base md:text-[18px]"
                      size="txtJosefinSansRomanRegular20"
                    >
                      <>
                        Patient
                        <br />
                        Payment verified
                      </>
                    </Text>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-start mt-2 ml-3.5 md:ml-[0] w-[99%] md:w-full sm:w-full">
                <div className="flex flex-row md:flex-col sm:flex-col mt-1 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                First Name
              </Text>
              <Input
                name="first"
                placeholder="Jones"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
               
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Last Name
              </Text>
              <Input
                name="first"
                placeholder="Jones"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-teal-900 text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Email Address
              </Text>
              <Input
                name="email"
                placeholder="Test@gmail.com"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
               
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Phone No.
              </Text>
              <Input
                name="phone"
                placeholder="(+39)456783536"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-[#022C4933] text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>
 
                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Location
              </Text>
              <Input
                name="location"
                placeholder="Via Tasso 121, Perugia"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
               
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Postal Code
              </Text>
              <Input
                name="phone"
                placeholder="5678"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-[#022C4933] text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Height
              </Text>
              <Input
                name="height"
                placeholder="5.6m"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
               
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Weight
              </Text>
              <Input
                name="weight"
                placeholder="90.6 kg"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-[#022C4933] text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Age
              </Text>
              <Input
                name="age"
                placeholder="34"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
               
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Sex
              </Text>
              <Input
                name="sex"
                placeholder="Male"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-[#022C4933] text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Upload any medical Record
              </Text>
              <Input
                name="record"
                placeholder="Xray file Pdf"
                className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName="flex sm:flex-1 mb-7 sm:w-full"
                suffix={
                  <div className="h-6 mt-px ml-[35px] w-6 ">
                    <Img
                      className="h-6 my-auto"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </div>
                }
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Patient Information form:
              </Text>
              <Input
                name="form"
                placeholder="Click to fill now"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-[#022C4933] text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>

               <div className=" flex flex-row justify-end items-end w-full">
               <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[178px] sm:ml-[0] ml-[123px] sm:mt-0 mt-7 text-center text-xl"
                shape="round"
                color="red_A700_01"
                size="sm"
                variant="fill"
              >
                Save Changes
              </Button>
               </div>

               <Text
        className="md:ml-[0] ml-[13px] sm:mt-[4px] md:mt-[4px] text-black-900_b2 text-lg sm:text-base md:text-base"
        size="txtJosefinSansRomanRegular18Black900b2"
      >
        NOTE: all this information will be visible to your Doctor
      </Text>
                </div>
              </div>

              <div className=" flex flex-col w-[6%] h-auto space-y-3">

<div className="h-[70px] relative md:hidden sm:hidden rounded-[50%] shadow-bs2 w-[70px]">
                  <Img
                    className="h-[70px] rounded-[50%] w-[70px]"
                    src="images/img_profile.png"
                    alt="Profile"
                  />
                </div>
                <div className="bg-gray-50_01 flex flex-col gap-[47px] h-full items-center justify-start mb-[135px] p-[25px] rounded-[10px] shadow-bs1 w-auto md:hidden sm:hidden">
              <Img
        className="h-[30px] mt-[21px] w-[30px]"
        src="images/img_vector.svg"
        alt="vector"
      />
      <Img
        className="h-[30px] w-[30px]"
        src="images/img_iconparksolidhelp.svg"
        alt="iconparksolidhe"
      />
      <Img
        className="h-[30px] w-[29px]"
        src="images/img_search.svg"
        alt="search_One"
      />
      <Img
        className="h-[30px] mb-[332px]"
        src="images/img_file.svg"
        alt="file"
      />

              </div>

</div>

            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default PatientProfilesettingsPage;


