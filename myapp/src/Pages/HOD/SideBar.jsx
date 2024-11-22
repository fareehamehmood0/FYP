import {
  AppstoreOutlined,
  HddOutlined,
  IssuesCloseOutlined, 
  ProfileOutlined,
  UsergroupAddOutlined,
  UserAddOutlined,
  CalendarOutlined,
  MailOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //items.key
          navigate(item.key);
        }}
        items={[
          {
            label: "Home",
            icon: (
              <AppstoreOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgb(#4B91FF)",
                  fontSize: "20px",
                  marginLeft:"20px",
                }}
              />
            ),
            key: "/",
          },
          {
            label: "AddSupervisor",
            key: "/addsupervisor",
            icon: (
              <UserAddOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgb(#4B91FF)",
                  fontSize: "20px",
                  marginLeft:"20px",
                }}
              />
            ),
          },
          {
            label: "AddStudent",
            key: "/addstudent",
            icon: (
              <UsergroupAddOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgb(#4B91FF)",
                  fontSize: "20px",
                  marginLeft:"20px",
                }}
              />
            ),
          },
          {
            label: "Projects",
            key: "/projects",
            icon: (
              <ProfileOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgb(#4B91FF)",
                  fontSize: "20px",
                  marginLeft:"20px",
                }}
              />
            ),
          },
          {
            label: "Events",
            key: "/events",
            icon: (
              <CalendarOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgb(#4B91FF)",
                  fontSize: "20px",
                  marginLeft:"20px",
                }}
              />
            ),
          },
          {
            label: "Issues",
            key: "/issues",
            icon: (
              <IssuesCloseOutlined 
                style={{
                  color: "blue",
                  backgroundColor: "rgb(#4B91FF)",
                  fontSize: "20px",
                  marginLeft:"20px",
                }}
              />
            ),
          },
          {
            label: "Contact Us",
            key: "/contactus",
            icon: (
              <MailOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgb(#4B91FF)",
                  fontSize: "20px",
                  marginLeft:"20px",
                }}
              />
            ),
          },
          {
            label: "Logout",
            key: "/logout",
            icon: (
              <LogoutOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgb(#4B91FF)",
                  fontSize: "20px",
                  marginLeft:"20px",
                }}
              />
            ),
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideBar;
