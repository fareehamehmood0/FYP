import {
    AppstoreOutlined,
    HddOutlined,
    ProfileOutlined,
    CalendarOutlined,
    ExceptionOutlined,
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
              icon: <AppstoreOutlined style={{color:"blue", borderRadius:"12"}}/>,
              key: "/",
            },
            {
              label: "Projects",
              key: "/studentprojects",
              icon: <ProfileOutlined />,
            },
            {
              label: "Events",
              key: "/studentevents",
              icon: <CalendarOutlined />,
            },
            {
              label: "Report",
              key: "/studentreport",
              icon: <ExceptionOutlined />,
            },
            {
              label: "ContactUs",
              key: "/contactus",
              icon: <MailOutlined />,
            },
            {
              label: "Logout",
              key: "/studentlogout",
              icon: <LogoutOutlined />,
            },
            
          ]}
        ></Menu>
      </div>
    );
  }
  export default StudentSideBar;
  
  