import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  const { toggleSidebar, toggled } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_home_white_a700.svg"
          alt="home"
        />
      ),
      label: "Dashboard",
      href: "/patientdashboard",
      active: window.location.pathname === "/patientdashboard",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_inbox.svg" alt="inbox" />,
      label: "My Booking",
      href: "/patientmybookings",
      active: window.location.pathname === "/patientmybookings",
    },
    {
      icon: (
        <Img className="h-5" src="images/img_television.svg" alt="television" />
      ),
      label: "Payments",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />,
      label: "Read T&C",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => toggleSidebar(!toggled)}
        className={props.className}
      >
        <Img
          className="h-16 md:ml-[0] ml-[25px] mr-[170px] mt-[15px]"
          src="images/img_frame.svg"
          alt="frame"
        />
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[251px] mr-4 mt-40"
          leftIcon={
            <Img
              className="h-6 mt-[7px] mb-1 mr-[13px]"
              src="images/img_favorite.svg"
              alt="favorite"
            />
          }
          shape="square"
          color="light_blue_800"
          size="sm"
          variant="fill"
        >
          <div className="font-bold font-istokweb leading-[normal] md:text-[23px] sm:text-[21px] text-[25px] text-left">
            Fav. Doctors
          </div>
        </Button>
        <Menu
          menuItemStyles={{
            button: {
              padding: "12px 12px 12px 21px",
              gap: "13px",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "25px",
              fontFamily: "Istok Web",
              [`&:hover, &.ps-active`]: {
                color: "#022c49",
                backgroundColor: "#ffffffff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[116px] pl-[9px] pt-3 w-[97%]"
        >
          <div className="flex flex-col gap-[27.38px] items-center justify-start w-full">
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <div className="flex flex-col items-center justify-end mt-[142px] w-full">
            <MenuItem
              icon={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              }
            >
              <Text className="sm:text-[21px] md:text-[23px]">Sign out</Text>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
