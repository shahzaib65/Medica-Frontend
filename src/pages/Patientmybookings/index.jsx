import React from "react";
import { Button, Img, List, Text } from "components";
import { useEffect,useState } from "react";

const PatientmybookingsPage = () => {

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
      Purpose:"Acute Allergy, Eczema, rhinitis",
      Date: "20, January 2024",
      Time: "Time: 11:00am-12:00" 
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      Purpose:"Acute Allergy, Eczema, rhinitis",
      Date: "20, January 2024",
      Time: "Time: 11:00am-12:00" 
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      Purpose:"Acute Allergy, Eczema, rhinitis",
      Date: "20, January 2024",
      Time: "Time: 11:00am-12:00" 
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      Purpose:"Acute Allergy, Eczema, rhinitis",
      Date: "20, January 2024",
      Time: "Time: 11:00am-12:00" 
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      specialization: "Allergy and immunology",
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      Purpose:"Acute Allergy, Eczema, rhinitis",
      Date: "20, January 2024",
      Time: "Time: 11:00am-12:00" 
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      Purpose:"Acute Allergy, Eczema, rhinitis",
      Date: "20, January 2024",
      Time: "Time: 11:00am-12:00" 
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      Purpose:"Acute Allergy, Eczema, rhinitis",
      Date: "20, January 2024",
      Time: "Time: 11:00am-12:00" 
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      Purpose:"Acute Allergy, Eczema, rhinitis",
      Date: "20, January 2024",
      Time: "Time: 11:00am-12:00" 
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      Purpose:"Acute Allergy, Eczema, rhinitis",
      Date: "20, January 2024",
      Time: "Time: 11:00am-12:00" 
    },
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      Purpose:"Acute Allergy, Eczema, rhinitis",
      Date: "20, January 2024",
      Time: "Time: 11:00am-12:00" 
    },
  ];


  return (
   <>
    <div className="bg-white-A700 flex flex-col font-istokweb items-center justify-end mx-auto w-full">
 <div className="flex flex-row gap-[11px] items-start justify-between w-full">
 {
          isSidebarOpen && (
            <div className="sticky w-[267px] md:w-auto sm:w-auto bg-light_blue-800 flex h-screen  justify-start overflow-auto top-[0]">
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

  <div className="flex flex-col gap-[30px] items-start justify-start md:mt-0 sm:mt-0 mt-[3px] md:px-2 w-full">
  <Text
        className="sm:text-[21px] md:text-[23px] text-[25px] mt-4 text-teal-900 sm:mt-3 md:mt-3"
        size="txtIstokWebBold25">
        VIDEO MEDICO
      </Text>
<div className=" flex flex-row md:flex-col sm:flex-col md:space-y-2 sm:space-y-2 justify-between w-[97%]">
<div className=" w-[45%] sm:w-[100%] md:w-[100%] p-[17px] font-josefinsans gap-[25px] flex-col h-[664px] overflow-y-auto md:h-auto sm:h-auto md:gap-5 rounded-[10px] shadow-bs1 top-[0] bg-gray-50_01">
<Text
            className="ml-2.5 md:ml-[0] mt-[5px] gap-2.5 text-black-900_b2 text-xl sm:text-sm md:text-sm"
            size="txtJosefinSansRomanRegular20"
          >
            You have 4 accepted Bookings Available{" "}
          </Text>
<div className=" grid grid-cols-1">
{
  apiData.length > 0 && (apiData.map((e)=>(
 <div className="flex flex-col gap-5 justify-start w-[100%] md:w-full bg-white-A700 m-2 ">
<div className="flex flex-row gap-2  items-end justify-start w-[100%]  md:w-full">

<div className="h-20 relative rounded-[50%] shadow-bs2 w-20 mt-5 ml-5 mr-1">
<Img
                      className=" h-20 inset-[0] justify-center m-auto rounded-[50%] w-20"
                      src="images/img_image10_80x80.png"
                      alt="imageTen"
                    />
</div>

<div className="flex flex-col items-start justify-start mt-[16px]">
<Text
                      className="sm:text-[16px] md:text-[16px] text-[27px] text-black-900"
                      size="txtJosefinSansRomanRegular27"
                    >
                     {e.name}
                    </Text>
                    <Text
                      className="mt-0.5 text-black-900_b2 text-xl sm:text-[16px] md:text-[16px]"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Allergy and immunology
                    </Text>
                  
</div>
 
</div>

 <div className="flex flex-col items-start justify-start ml-5">
                    <Text
                      className="text-black-900_b2 text-xl sm:text-sm md:text-sm"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Purpose:Acute Allergy, Eczema, rhinitis
                    </Text>
                    <Text
                      className="mt-1 text-black-900_b2 text-xl sm:text-sm md:text-sm"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Date: 20, January 2024,{" "}
                    </Text>
                    <Text
                      className="mt-0.5 text-black-900_b2 text-xl sm:text-sm md:text-sm"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Time: 11:00am-12:00
                    </Text>
                    </div>
<div className="h-[50px] md:h-[66px] ml-1.5 md:ml-[0] relative w-[99%] sm:w-full bottom-5 right-3">
<Button
                    className="absolute bottom-[0] cursor-pointer leading-[normal] min-w-[95px] right-[0] text-center text-lg"
                    shape="square"
                    color="teal_900"
                    size="sm"
                    variant="fill"
                  >
                    Cancel
                  </Button>
</div>

 </div>
  )))
}

</div>
</div>

<div className=" w-[45%] sm:w-[100%] md:w-[100%] p-[17px] font-josefinsans gap-[5px] flex-col h-[664px] overflow-y-auto md:h-auto sm:h-auto md:gap-5 rounded-[10px] shadow-bs1 top-[0] bg-[#0574B2]">
<Text
            className="ml-2.5 md:ml-[0] mt-[5px] gap-2.5 text-white-A700 text-xl sm:text-sm md:text-sm"
            size="txtJosefinSansRomanRegular20"
          >
            You have 4 pending Appointment
          </Text>
<div className=" grid grid-cols-1">
{
  apiData.length > 0 && (apiData.map((e)=>(
 <div className="flex flex-col gap-5 justify-start w-[100%] md:w-full bg-white-A700 m-2 ">
<div className="flex flex-row gap-2  items-end justify-start w-[100%]  md:w-full">

<div className="h-20 relative rounded-[50%] shadow-bs2 w-20 mt-5 ml-5 mr-1">
<Img
                      className=" h-20 inset-[0] justify-center m-auto rounded-[50%] w-20"
                      src="images/img_image10_80x80.png"
                      alt="imageTen"
                    />
</div>

<div className="flex flex-col items-start justify-start mt-[16px]">
<Text
                      className="sm:text-[16px] md:text-[16px] text-[27px] text-black-900"
                      size="txtJosefinSansRomanRegular27"
                    >
                     {e.name}
                    </Text>
                    <Text
                      className="mt-0.5 text-black-900_b2 text-xl sm:text-[16px] md:text-[16px]"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Allergy and immunology
                    </Text>
                  
</div>
 
</div>

 <div className="flex flex-col items-start justify-start ml-5">
                    <Text
                      className="text-black-900_b2 text-xl sm:text-sm md:text-sm"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Purpose:Acute Allergy, Eczema, rhinitis
                    </Text>
                    <Text
                      className="mt-1 text-black-900_b2 text-xl sm:text-sm md:text-sm"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Date: 20, January 2024,{" "}
                    </Text>
                    <Text
                      className="mt-0.5 text-black-900_b2 text-xl sm:text-sm md:text-sm"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Time: 11:00am-12:00
                    </Text>
                    </div>
<div className="h-[50px] md:h-[66px] ml-1.5 md:ml-[0] relative w-[99%] sm:w-full bottom-5 right-3">
<Button
                    className="absolute bottom-[0] cursor-pointer leading-[normal] min-w-[95px] right-[0] text-center text-lg"
                    shape="square"
                    color="teal_900"
                    size="sm"
                    variant="fill"
                  >
                    Cancel
                  </Button>
</div>

 </div>
  )))
}

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
                <div className="bg-gray-50_01 flex flex-col gap-[47px] items-center justify-start mb-[135px] p-[25px] rounded-[10px] shadow-bs1 w-auto md:hidden sm:hidden">
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
<div className=" flex flex-col   -mt-16 sm:mt-1 md:mt-1">
<Text
        className="md:ml-[0] ml-[25px] mt-[1px] text-black-900_b2 text-xl sm:text-sm md:text-sm"
        size="txtJosefinSansRomanRegular20"
      >
        <>
         1- You can cancel booking 24 hrs before meeting/ any cancellation
          after that, you won’t be refund
          <br />
         2- If doctor cancel your booking request, you will be refund
          <br />
         3- You must be on the platform 10min-5min before the meeting
        </>
      </Text>
</div>



  </div>

 </div>
    </div>
   </>
  );
};

export default PatientmybookingsPage;

