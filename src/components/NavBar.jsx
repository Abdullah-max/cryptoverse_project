import {
  FundOutlined,
  HomeOutlined,
  LoadingOutlined,
  MedicineBoxOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../images/cryptocurrency.png";

const Homepage = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title className="logo" level={2}>
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptopcurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MedicineBoxOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>

          <NavLink to="/antd">
            <Menu.Item act icon={<LoadingOutlined />}>
              Ant design
            </Menu.Item>
          </NavLink>
        </Menu>
      )}
    </div>
  );
};

export default Homepage;
