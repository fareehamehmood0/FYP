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
  
  function MentorSideBar() {
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
              icon: <AppstoreOutlined 
              style={{
                color: "blue",
                backgroundColor: "rgb(#4B91FF)",
                fontSize: "20px",
              }}
              />,
              key: "/",
            },
            {
              label: "Projects",
              key: "/mentorprojects",
              icon: <ProfileOutlined 
              style={{
                color: "blue",
                backgroundColor: "rgb(#4B91FF)",
                fontSize: "20px",
              }}/>,
            },
            {
              label: "Schedule Meeting",
              key: "/schedulemeeting",
              icon: <CalendarOutlined 
              style={{
                color: "blue",
                backgroundColor: "rgb(#4B91FF)",
                fontSize: "20px",
              }}/>,
            },
            {
              label: "Events",
              key: "/mentorevents",
              icon: <CalendarOutlined 
              style={{
                color: "blue",
                backgroundColor: "rgb(#4B91FF)",
                fontSize: "20px",
              }}/>,
            },
            {
              label: "Report",
              key: "/mentoreport",
              icon: <ExceptionOutlined
              style={{
                color: "blue",
                backgroundColor: "rgb(#4B91FF)",
                fontSize: "20px",
              }} />,
            },
          
            {
              label: "Logout",
              key: "/mentorlogout",
              icon: <LogoutOutlined 
              style={{
                color: "blue",
                backgroundColor: "rgb(#4B91FF)",
                fontSize: "20px",
              }}/>,
            },
            
          ]}
        ></Menu>
      </div>
    );
  }
  export default MentorSideBar;
  
  