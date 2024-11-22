import {
    AppstoreOutlined,
    GithubOutlined,
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
              icon: <AppstoreOutlined 
              style={{
                color: "blue",
                backgroundColor: "rgb(#4B91FF)",
                fontSize: "20px",
                marginLeft:"20px",
              }}
            />,
              key: "/",
            },
            {
              label: "Projects",
              key: "/studentprojects",
              icon: <ProfileOutlined
              style={{
                color: "blue",
                backgroundColor: "rgb(#4B91FF)",
                fontSize: "20px",
                marginLeft:"20px",
              }} />,
            },
            {
              label: "Events",
              key: "/studentevents",
              icon: <CalendarOutlined 
              style={{
                color: "blue",
                backgroundColor: "rgb(#4B91FF)",
                fontSize: "20px",
                marginLeft:"20px",
              }}/>,
            },
            {
              label: "GitHub",
              key: "/github",
              icon: <GithubOutlined
              style={{
                color: "blue",
                backgroundColor: "rgb(#4B91FF)",
                fontSize: "20px",
                marginLeft:"20px",
              }}/>,
            },
            {
              label: "Report",
              key: "/studentreport",
              icon: <ExceptionOutlined 
              style={{
                color: "blue",
                backgroundColor: "rgb(#4B91FF)",
                fontSize: "20px",
                marginLeft:"20px",
              }}/>,
            },
            
            {
              label: "Logout",
              key: "/studentlogout",
              icon: <LogoutOutlined 
              style={{
                  color: "blue",
                  backgroundColor: "rgb(#4B91FF)",
                  fontSize: "20px",
                  marginLeft:"20px",
                }}/>,
            },
            
          ]}
        ></Menu>
      </div>
    );
  }
  export default StudentSideBar;
  
  