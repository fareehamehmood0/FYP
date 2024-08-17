import {
    AppstoreOutlined,
    HddOutlined,
    ProfileOutlined,
    CalendarOutlined,
    MailOutlined,
    LogoutOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { Navigate, useNavigate } from "react-router-dom";
  
  function StudentSideBar() {
    const navigate = useNavigate ()
    return (
      <div className="SideMenu">
        <Menu
         className="SideMenuVertical"
        mode="vertical"
        onClick={(item)=>{
          //items.key
          navigate(item.key)
        }}
            items={[
            {
              label: "Dashbaord",
              icon: <AppstoreOutlined />,
              key: "/",
            },
            {
              label: "Projects",
              key: "/mentorprojects",
              icon: <ProfileOutlined />,
            },
            {
              label: "Events",
              key: "/mentorevents",
              icon: <CalendarOutlined />,
            },
            {
              label: "ContactUs",
              key: "/contactus",
              icon: <MailOutlined />,
            },
            {
              label: "Logout",
              key: "/mentorlogout",
              icon: <LogoutOutlined />,
            },
            
          ]}
        ></Menu>
      </div>
    );
  }
  export default StudentSideBar;
  
  