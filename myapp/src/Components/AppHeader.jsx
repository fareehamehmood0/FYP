import { BellFilled, MailOutlined, UserAddOutlined } from "@ant-design/icons";
import { Avatar, Badge, Drawer, Image, List, Space, Typography } from "antd";

function AppHeader() {
  return (
    <div className="AppHeader">
      <Image width={200} src="Collabora.png" height="100"></Image>
      <Typography.Title>Welcome Back Sadaf</Typography.Title>

      <Space size={15}>
      <Avatar
          style={{ size: "50px", backgroundColor: "#4D96FF" }}
          icon={<UserAddOutlined />}
        ></Avatar>
        <Badge  style={{backgroundColor:"#4D96FF" }} count={10}>
          <BellFilled style={{ fontSize: 24, color:"#4D96FF" }} />
        </Badge>
       
      </Space>
    </div>
  );
}
export default AppHeader;
