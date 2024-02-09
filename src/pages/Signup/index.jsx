import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
    <div className=" bg-white-A700 h-[1028x] mx-auto relative w-full">
    <div className=" font-istokweb h-[1028px] m-auto md:px-5 w-full">
    <div className=" absolute h-full inset-y-0 left-0 my-0 w-[44%] md:w-full">
     <Sidebar className="!sticky !w-[434px] bg-light_blue-800 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]">
              <div
                className=" absolute w-[100%] h-[500px] bg-cover  p-[3px] top-0 right-0"
                style={{ backgroundImage: "url('images/img_top.png')" }}
              ></div>

              <div className="absolute flex h-[298px] flex-row space-x-5 items-start justify-start p-[3px] left-[0] top-[0]">
                <img
                  className=" w-16 h-16 mt-5 ml-5"
                  src="images/img_biglogo.png"
                  alt="logo"
                />
                <Text
                  className="mb-[226px] mt-[34px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtIstokWebBold25WhiteA700"
                >
                  VIDEO MEDICO
                </Text>
              </div>

              <div className="absolute flex flex-col font-poppins gap-[18px] justify-center left-[2%] md:px-5 top-[12%] w-[85%]">
                <Text
                  className="ml-5 md:ml-[0] sm:text-[21px] items-center md:text-[23px] text-[25px] text-light_blue-700"
                  size="txtPoppinsSemiBold25Lightblue700"
                >
                  <span className="text-white-A700 font-poppins text-center font-medium">
                    <>
                      Start your journey to better health today!
                      <br />
                    </>
                  </span>
                </Text>

                <Button
                  className="cursor-pointer ml-5 h-[50px] leading-[normal] mr-[179px] rounded-[15px] text-center text-lg w-auto"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Learn more
                </Button>

                <div className="flex justify-center mt-[20%] items-center">
                  <img
                    className=" w-[250px] h-[250px] mt-0"
                    src="images/img_biglogo_442x442.png"
                    alt="logo"
                  />
                </div>
              </div>

              <div
                className=" absolute w-[100%] h-[500px] bg-cover bg-no-repeat p-[3px] right-0 bottom-0"
                style={{ backgroundImage: "url('images/img_bottom.png')" }}
              >
                <Text
                  className="absolute ml-5 bottom-[14%] left-[3%] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700  w-[85%]"
                  size="txtPoppinsSemiBold25"
                >
                  Your Virtual Healthcare Solution!
                </Text>
              </div>
            </Sidebar>
     </div>
     <div className="absolute font-poppins h-full -top-2 my-auto right-[0] bg-transparent w-[75%] md:w-full">
     <img
              className=" h-[1028px] m-auto object-cover rounded-bl-[50px] rounded-tl-[40px] w-full"
              src="images/img_rectangle6.png"
              alt="rectangleSix"
            />
            <img
              className="absolute h-[500px]  object-cover right-[0] top-[0]"
              src="images/img_top_right.png"
              alt="top-right-img"
            />
            <img
              className="absolute h-[500px]  object-cover right-[0] bottom-[0]"
              src="images/img_bottom_right.png"
              alt="top-right-img"
            />
            <div className="absolute flex flex-col gap-3.5 inset-x-[0] items-center justify-center mx-auto top-[7%] w-[66%] md:w-[80%] sm:w-[80%]">

          <div className=" flex flex-col w-[100%]">
          <Text
          className="md:ml-[0] ml-[0px] items-center text-center sm:text-xl md:text-[38px] text-[40px] text-teal_900 md:text-white-A700 sm:text-white-A700"
          size="txtPoppinsSemiBold40">
          Create Account
            </Text>

            <div className="flex sm:flex-col md:flex-col md:justify-center sm:justify-center flex-row space-x-5 sm:gap-1 items-end sm:mt-3 md:mt-3 justify-between ml-0.5 md:ml-[0] w-full">
    <div className=" flex flex-col justify-start sm:justify-center md:justify-center mt-20 sm:mt-0 md:mt-0 w-[65%] md:w-[100%] sm:w-[100%]">
      <input className=" bg-transparent px-3  rounded-[10px] shadow-bs bg-gray-50_01 h-20 sm:h-[70px] md:h-[70px]"></input>
      <Text
              className="md:ml-[0] ml-[2px] mt-1 text-teal-900 text-xl sm:text-base md:text-base"
              size="txtPoppinsRegular20">
              First name
            </Text>
    </div>
    <div className=" flex flex-col justify-start mt-20 sm:mt-0 md:mt-0 w-[65%] sm:w-[100%] md:w-[100%]">
      <input className=" bg-transparent px-3  rounded-[10px] shadow-bs bg-gray-50_01 h-20 sm:h-[70px] md:h-[70px]"></input>
      <Text
              className="md:ml-[0] ml-[2px] mt-1 text-teal-900 text-xl sm:text-base md:text-base"
              size="txtPoppinsRegular20">
              Last name
            </Text>
    </div>
 </div>

 <div className=" flex flex-col  items-start mx-auto mt-[10px] w-[100%] xs:w-[100%] sm:w-[100%]">
       <div className=" bg-gray-50_01 flex flex-row h-20 sm:h-[70px] md:h-[70px] items-center justify-between mt-0 p-4 rounded-[10px] shadow-bs w-full">
                <input className="w-full bg-transparent px-3 h-full"></input>
                {/* <Img
                  src="images/eye.svg"
                  alt="groupNine"
                /> */}
              </div>
              <Text
                  className="mb-0.5 mt-1 text-teal-900 text-xl  sm:text-base md:text-base"
                  size="txtPoppinsRegular20">
                Email 
                </Text>
       </div>

       <div className=" flex flex-col  items-start mx-auto mt-[10px] w-[100%] xs:w-[100%] sm:w-[100%]">
       <div className=" bg-gray-50_01 flex flex-row h-20 sm:h-[70px] md:h-[70px] items-center justify-between mt-0 p-4 rounded-[10px] shadow-bs w-full">
       <Img
                 src="images/img_group9.svg"
                  alt="groupNine"
                />
                <input className="w-full bg-transparent px-3 h-full"></input>
                <Img
                  src="images/eye.svg"
                  alt="groupNine"
                />
              </div>
              <Text
                  className="mb-0.5 mt-1 text-teal-900 text-xl sm:text-base"
                  size="txtPoppinsRegular20">
                 Password
                </Text>
       </div>

       <div className=" flex flex-col  items-start mx-auto mt-[10px] w-[100%] xs:w-[100%] sm:w-[100%]">
       <div className=" bg-gray-50_01 flex flex-row h-20 sm:h-[70px] md:h-[70px] items-center justify-between mt-0 p-4 rounded-[10px] shadow-bs w-full">
                <input className="w-full bg-transparent px-3 h-full"></input>
                
              </div>
              <Text
                  className="mb-0.5 mt-1 text-teal-900  text-xl sm:text-base md:text-base"
                  size="txtPoppinsRegular20">
                Phone number 
                </Text>
       </div>

       <div className=" flex flex-col  items-start mx-auto mt-[30px] w-[100%] xs:w-[100%] sm:w-[100%]">
       <>
       <Text
    className="bg-teal-900 h-[67px] text-center sm:px-5 px-[35px] py-[18px] rounded-[10px] text-shadow-ts text-white-A700 text-xl w-full"
    size="txtPoppinsRegular20WhiteA700"
  >
    Create Account now!!
  </Text>

  <Link to="/" className=" cursor-pointer w-full">
  <Button
    className="cursor-pointer font-bold h-[62px] leading-[normal] mt-3 text-center text-white-A700 text-xl w-full"
    shape="round"
    color="black_900"
    size="xl"
    variant="outline"
  >
    Already Have an Account
  </Button>
  </Link>
                
              </>
              
       </div>




          </div>


           

       

            </div>

          
 

     </div>

    


    </div>

    </div>
    </>
  );
};

export default SignupPage;


{/* <div className="bg-white-A700 font-poppins h-[1024px] mx-auto relative w-full">
<div className="h-[1028px] m-auto md:px-5 w-full">
  <div className="font-istokweb h-[1028px] m-auto w-full">
    <div className="absolute h-[1024px] inset-y-[0] left-[0] my-auto w-[44%] md:w-full">
      <Sidebar className="!sticky !w-[434px] bg-light_blue-800 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]"></Sidebar>
      <div
        className="absolute bg-cover bg-no-repeat flex flex-col h-[298px] items-start justify-start p-[3px] right-[0] top-[0]"
        style={{ backgroundImage: "url('images/img_group207.png')" }}
      >
        <Text
          className="mb-[226px] mt-[30px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
          size="txtIstokWebBold25WhiteA700"
        >
          VIDEO MEDICO
        </Text>
      </div>
    </div>
    <Img
      className="absolute bottom-[0] h-[303px] left-[0] object-cover"
      src="images/img_group207.png"
      alt="vector"
    />
    <div className="absolute font-poppins h-[1028px] inset-y-[0] my-auto right-[0] w-[74%] md:w-full">
      <div className="h-[1028px] m-auto w-full">
        <Img
          className="h-[1028px] m-auto object-cover rounded-bl-[50px] rounded-tl-[50px] w-full"
          src="images/img_rectangle6.png"
          alt="rectangleSix"
        />
        <div className="absolute flex flex-col gap-[39px] justify-start left-[18%] top-[7%] w-[51%]">
          <Text
            className="md:ml-[0] ml-[148px] sm:text-4xl md:text-[38px] text-[40px] text-light_blue-700"
            size="txtPoppinsSemiBold40"
          >
            <span className="text-teal-900 font-poppins text-left font-semibold">
              <>
                Create Account
                <br />
              </>
            </span>
            <span className="text-light_blue-700 font-poppins text-left font-semibold">
              <>
                <br />
                <br />
                <br />
              </>
            </span>
          </Text>
          <div className="bg-gray-50_01 h-20 mr-[205px] rounded-[10px] shadow-bs w-[62%]"></div>
        </div>
      </div>
      <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[19%] w-[65%]">
        <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between ml-0.5 md:ml-[0] w-full">
          <Text
            className="sm:mt-0 mt-[79px] text-teal-900 text-xl"
            size="txtPoppinsRegular20"
          >
            First name
          </Text>
          <div className="flex flex-col justify-start">
            <div className="bg-gray-50_01 h-20 rounded-[10px] shadow-bs w-full"></div>
            <Text
              className="md:ml-[0] ml-[38px] text-teal-900 text-xl"
              size="txtPoppinsRegular20"
            >
              last name
            </Text>
          </div>
        </div>
        <div className="bg-gray-50_01 h-20 mt-[35px] rounded-[10px] shadow-bs w-[99%]"></div>
        <Text
          className="ml-0.5 md:ml-[0] mt-0.5 text-teal-900 text-xl"
          size="txtPoppinsRegular20"
        >
          Email
        </Text>
        <div className="flex flex-col items-start justify-start mt-[37px] w-[99%] md:w-full">
          <div className="bg-gray-50_01 flex flex-row sm:gap-10 items-center justify-between p-[15px] rounded-[10px] shadow-bs w-full">
            <Img
              className="h-[30px] mb-1.5 ml-0.5 mt-3.5 w-[30px]"
              src="images/img_materialsymbolslockoutline.svg"
              alt="materialsymbols"
            />
            <Img
              className="h-6 w-6"
              src="images/img_eye.svg"
              alt="eye"
            />
          </div>
          <Text
            className="ml-0.5 md:ml-[0] text-teal-900 text-xl"
            size="txtPoppinsRegular20"
          >
            Password
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start ml-0.5 md:ml-[0] mt-9 w-[99%] md:w-full">
          <div className="md:h-[78px] h-[88px] relative w-full">
            <div className="absolute bg-gray-50_01 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[19px] rounded-[10px] shadow-bs top-[0] w-full">
              <Text
                className="my-[5px] text-black-900 text-xl"
                size="txtPoppinsRegular20Black900"
              >
                +39
              </Text>
            </div>
            <Text
              className="absolute bottom-[0] left-[0] text-[15px] text-white-A700"
              size="txtPoppinsRegular15"
            >
              Phone No
            </Text>
          </div>
          <Text
            className="ml-0.5 md:ml-[0] text-teal-900 text-xl"
            size="txtPoppinsRegular20"
          >
            Phone Number
          </Text>
        </div>
      </div>
    </div>
  </div>
  <Text
    className="absolute bottom-[7%] left-[2%] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-[22%] sm:w-full"
    size="txtPoppinsSemiBold25"
  >
    Your Virtual Healthcare Solution!
  </Text>
  <Img
    className="absolute bottom-[0] h-52 object-cover right-[0]"
    src="images/img_vector_light_blue_700.png"
    alt="vector_One"
  />
</div>
<div className="absolute flex flex-col gap-[18px] justify-start left-[1%] md:px-5 top-[13%] w-[21%]">
  <Text
    className="ml-1.5 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-light_blue-700"
    size="txtPoppinsSemiBold25Lightblue700"
  >
    <span className="text-white-A700 font-poppins text-left font-medium">
      <>
        Start your journey to better health today!
        <br />
      </>
    </span>
    <span className="text-light_blue-700 font-poppins text-left font-medium">
      <>
        <br />
        <br />
        <br />
      </>
    </span>
  </Text>
  <Button
    className="cursor-pointer h-[50px] leading-[normal] mr-[179px] rounded-[15px] text-center text-lg w-[120px]"
    color="white_A700"
    size="sm"
    variant="fill"
  >
    Learn more
  </Button>
</div>
<div className="absolute bottom-[7%] flex flex-col gap-[38px] items-center justify-start md:px-5 right-[14%] w-[47%]">
  <Text
    className="bg-teal-900 h-[67px] justify-center max-w-[665px] md:max-w-full sm:px-5 px-[35px] py-[18px] rounded-[10px] text-shadow-ts text-white-A700 text-xl w-full"
    size="txtPoppinsRegular20WhiteA700"
  >
    Create Account now!!
  </Text>

</div>
<Img
  className="absolute h-[287px] object-cover right-[0] top-[0]"
  src="images/img_vector_light_blue_800.png"
  alt="vector_Two"
/>
<Img
  className="absolute h-[431px] inset-y-[0] left-[0] my-auto object-cover w-[34%]"
  src="images/img_hilzbkeszs4uhi.png"
  alt="hilzbkeszs4uhi"
/>
</div> */}
