import React, { useState } from "react";
import { Menu, Button } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import {
  Container,
  StyledDiv1,
  StyledDiv2,
  StyledDiv3,
  StyledLogo,
  StyledTitle,
} from "./style";

import Home from "../Home";
import Job from "../Job";
import Goverment from "../Goverment";

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Container>
        <StyledDiv1>
          <StyledLogo>로고</StyledLogo>
          <StyledTitle>
            <h3 style={{ marginTop: "8px" }}>하모니움</h3>
          </StyledTitle>
        </StyledDiv1>
        <StyledDiv2>
          <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
            <Menu.Item
              key="home"
              icon={<MailOutlined />}
              style={{ marginLeft: "300px" }}
            >
              home
            </Menu.Item>
            <Menu.Item key="job" icon={<AppstoreOutlined />}>
              구인/구직
            </Menu.Item>
            <Menu.Item key="goverment" icon={<AppstoreOutlined />}>
              제공 기관
            </Menu.Item>
            <Menu.Item key="message" icon={<AppstoreOutlined />}>
              메세지함
            </Menu.Item>
            <Menu.Item key="community" icon={<AppstoreOutlined />}>
              커뮤니티
            </Menu.Item>
          </Menu>
        </StyledDiv2>
        <StyledDiv3>
          <Button style={{ marginTop: "8px", marginRight: "5px" }}>
            회원가입
          </Button>
          <Button>로그인</Button>
        </StyledDiv3>
      </Container>
      {current === "home" && <Home />}
      {current === "job" && <Job />}
      {current === "goverment" && <Goverment />}
    </>
  );
};

export default Header;
