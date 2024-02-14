import React,{useEffect, useState} from "react";
import {Img, Input, Text } from "components";
import { SelectBox } from "components/SelectBox";
import { useDispatch,useSelector } from "react-redux";
import { service } from "./serviceSlice";


const PatientDashboardPage = () => {
const dispatch = useDispatch();
const state = useSelector((state) => state);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    const handleButtonClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };

  const sideBarMenu = [
  
    {
      id: 1,
      icon: "images/img_home.svg",
      selectIcon: "images/img_select_home.svg",
      label: "Dashboard",
      
    },
    {
      id: 2,
      icon: "images/img_favorite.svg",
      selectIcon: "images/img_select_favorite.svg",
      label: "Fav.Doctor",
      
    },
    {
      id:3,
      icon: "images/img_thumbsup.svg",
      selectIcon: "images/img_appointment.svg",
      label: "My Booking",
    
    },
    {
      id:4,
     icon: "images/img_payment.svg",
      label: "Payments",
      selectIcon: 'images/img_select_payment.svg'
    },
    {
      id:5,
      icon: "images/img_user.svg",
      label: "Read T&C",
    },
  ];

  const apiData = [
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Allergy and immunology",
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Gyene",
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Allergy and immunology",
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Allergy and immunology",
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Allergy and immunology",
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Allergy and immunology",
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Allergy and immunology",
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Allergy and immunology",
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Allergy and immunology",
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Allergy and immunology",
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Allergy and immunology",
    },
  ];

  
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const [docService, setService] = useState({});
  const [name, setName] = useState('');
  const [location,setLocation] = useState('')



  


  useEffect(()=>{
  dispatch(service())
  },[]);
  
  if(state.service.data){
    console.log(state.service.data.services)
  //  setService(state.service.data.services)
  }

  function handleClick() {
    console.log(name,location,docService)
  }

 

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-istokweb items-center justify-end mx-auto w-full">
        <div className="flex flex-row gap-[11px] items-start justify-between w-full">
        {
          isSidebarOpen && (
            <div className="  sticky  w-[267px] md:w-auto sm:w-auto bg-light_blue-800 flex h-screen  justify-start overflow-auto top-[0]">
            <div>
            <Img
              className=" hidden h-16 md:ml-[0] ml-[25px] mr-[170px] mt-[15px]"
              src="images/img_menu.svg"
              alt="frame"
            />
            <ul className=" mt-[120px] w-[267px] sm:w-auto md:w-auto sm:px-3">
            {sideBarMenu.map((item) => (
          <li className="flex flex-row w-full bg-black-900 pl-[12px] sm:px-0 md:px-0 py-3 gap-[13px] mt-10 font-istokweb text-[25px] font-bold"
            key={item.id}
            onClick={() => handleItemClick(item)}
            style={{
              backgroundColor: selectedItem && selectedItem.id === item.id ? '#ffffff' : 'transparent',
            }}
          >
          <Img  src={selectedItem && selectedItem.id === item.id ? item.selectIcon : item.icon}></Img>
          <p className="mt-1.5 md:hidden sm:hidden" style={{color: selectedItem && selectedItem.id === item.id ? "#022c49": '#ffffff'}}>{item.label}</p>
            
          </li>
        ))}
       
            </ul>
            </div>
         </div>
          )
        }
  
         
          <div className="flex flex-col gap-[42px] items-center justify-start md:mt-0 mt-[3px] md:px-5 w-full">
            <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-row md:gap-0 items-start justify-between w-full">
              <div className="flex flex-row">
              <div onClick={handleButtonClick}>
              <Img
              className=" hidden mt-[4px]"
              src="images/img_select_menu.svg"
              alt="frame"
            />
              </div>
              <Text
                  className=" mt-[19px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                  size="txtIstokWebBold25"
                >
                  VIDEO MEDICO
                </Text>
              </div>
               
                <div className="font-josefinsans h-20 md:hidden sm:hidden relative w-[17%]">
                  <Text
                    className="absolute inset-x-[0]  sm:text-[21px] md:text-[23px] text-[25px] text-black-900 top-[0] w-max"
                    size="txtJosefinSansRomanRegular25"
                  >
                    Alessia Jones
                  </Text>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] text-black-900_b2 text-xl"
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

              <div className="flex md:flex-col flex-row font-josefinsans gap-[39px] items-start justify-between w-full">
                <div className="bg-gray-50_01 flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start md:mt-0 mt-0.5 p-2 rounded-[10px] shadow-bs1 w-[91%] md:w-full">
                  <Input
                    name="name"
                    placeholder="Enter Doctors Name.."
                    className="!placeholder:text-light_blue-800_99 !text-light_blue-800_99 leading-[normal] p-0 text-left text-xl w-full"
                    wrapClassName="md:ml-[0] ml-[42px] w-[28%] md:w-full"
                    type="text"
                    shape="round"
                    size="md"
                     onChange={(e) => setName(e.target.value)}
                     value={name}
                  ></Input>
                 

              

          <div className="flex md:ml-[0] rounded-[10px] ml-[18px] w-[32%] md:w-full bg-white-A700 justify-between px-2 ">
          {
                state.service.data && (
                  <SelectBox 
                  className="md:ml-[0] ml-[8px] w-[90%] md:w-full bg-white-A700 text-light_blue-800_99 font-normal text-xl"
                  placeholderClassName="!placeholder:text-light_blue-800_99 !text-light_blue-800_99 leading-[normal] p-0 text-left text-xl"
                  indicator={
                   <p></p>
                  }
                  isMulti={false}
                  name="Services"
                   options={ state.service.data.services.map((data) => ({
                   label: data.doctor_service,
                   value: data.doctor_service,
                     }))}
                  isSearchable={true}
                 size="md"
                  placeholder="Specialization.."
                  onChange={(value) => {
                    console.log(value);
                    
                  }}
               />
                )
              }
  <Img
                        className="h-6  my-auto"
                        src="images/img_close.svg"
                        alt="close"
                      />
          </div>
                  <Input
                    name="location"
                    placeholder="Locations.."
                    className="!placeholder:text-light_blue-800_99 !text-light_blue-800_99 leading-[normal] p-0 text-left text-xl w-full"
                    wrapClassName="ml-4 md:ml-[0] w-1/4 md:w-full"
                    shape="round"
                    size="md"
                     onChange={(e) => setLocation(e.target.value)}
                     value={location}
                  ></Input>
                  <div onClick={handleClick} className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[23px] p-[17px] rounded-[10px] w-[7%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_search_light_blue_700.svg"
                      alt="search"
                    />
                  </div>
                </div>
                <div className="h-[70px] relative md:hidden sm:hidden rounded-[50%] shadow-bs2 w-[70px]">
                  <Img
                    className="h-[70px] rounded-[50%] w-[70px]"
                    src="images/img_profile.png"
                    alt="Profile"
                  />
                </div>
              </div>

              <div className=" flex font-josefinsans h-full items-start justify-between w-full">
                <div className=" bg-gray-50_01 overflow-y-auto h-[664px] md:h-auto sm:h-auto md:gap-5 inset-x-[0] rounded-[10px] shadow-bs1 top-[0] w-[91%] md:w-full sm:w-full">
                  <div className=" grid grid-cols-3 gap-5 md:grid-cols-1 sm:grid-cols-1 p-2">
                    {apiData.length > 0 &&
                      apiData.map((e) => (
                        <div className="bg-white-A700 border flex flex-col border-black-900_7f border-solid p-2 rounded-[20px]">
                          <div className="flex">
                            <div className="h-[100px] w-[24%] shadow-bs2 rounded-[50%]">
                              <img
                                className="w-full h-full rounded-[50%]"
                                src="images/img_profile.png"
                                alt="doctor"
                              />
                            </div>

                            <div className=" flex flex-col w-[71%] h-auto mx-1">
                              <div className="flex flex-row justify-start items-start w-full">
                                <Img
                                  className="h-[27px]"
                                  src="images/img_linkedin.svg"
                                  alt="linkedin"
                                />
                                <Text
                                  className="mt-2 text-black-900_b2 text-xl"
                                  size="txtJosefinSansRomanRegular20"
                                >
                                  Lanciano
                                </Text>
                              </div>
                              <Text
                                className="sm:text-[20px] md:text-[20px] text-[27px] text-black-900"
                                size="txtJosefinSansRomanRegular27"
                              >
                                Dr. Isabella Giovanna
                              </Text>

                              <Text
                                className=" text-black-900_b2 text-xl w-max sm:text-base md:text-base"
                                size="txtJosefinSansRomanRegular20"
                              >
                                Allergy and immunology
                              </Text>
                             <div className=" w-full h-auto flex justify-start items-center">
                             <Img
                              className=" w-auto h-[22px] items-start md:h-[18px] sm:h-[18px]"
                              src="images/img_group14.svg"
                              alt="groupFourteen"
                            />
                             </div>
                            </div>

                            <div className=" w-[5%] md:w-[6%] sm:w-[6%]">
                              <Img
                                className="h-[27px] mt-1"
                                src="images/img_favorite_black_900.svg"
                                alt="like"
                              />
                            </div>
                          </div>

                          <>
                          <div className="flex sm:flex-col md:flex-col sm:mt-1 md:mt-0 flex-row gap-[10px] items-center justify-between w-full">
                        <Input
                          placeholder="Check Availability"
                          className="!placeholder:text-black-900_b2 !text-black-900_b2 leading-[normal] p-0 text-left text-xl w-full"
                          wrapClassName="border border-black-900_7f border-solid flex sm:flex-1 rounded-[5px] sm:w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-0.5 h-[22px] mr-[13px]"
                              src="images/img_calendar.svg"
                              alt="calendar"
                            />
                          }
                          size="lg"
                        ></Input>
                        <div className="bg-teal-900 border md:w-full sm:w-full border-black-900_7f border-solid flex flex-row gap-1.5 items-center justify-start p-1.5 rounded-[5px] my-1 sm:mb-2">
                          <Img
                            className="h-[20px]"
                            src="images/img_upload.svg"
                            alt="upload"
                          />
                          <Text
                            className="text-gray-50 text-base text-[14px] py-0.5"
                            size="txtJosefinSansRomanRegular18"
                          >
                            Consult Now!
                          </Text>
                        </div>
                      </div>
                          </>
                        </div>
                      ))}
                  </div>
                </div>

              <div className="bg-gray-50_01 flex flex-col gap-[47px] items-center justify-start mb-[135px] p-[25px] rounded-[10px] shadow-bs1 w-[6%] md:hidden sm:hidden">
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

export default PatientDashboardPage;

