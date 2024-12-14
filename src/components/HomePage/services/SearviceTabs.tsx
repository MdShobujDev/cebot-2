"use client";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import React from "react";
import Service from "./Service";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "CRYPTO WALLET",
    children: <Service index={0} />,
  },
  {
    key: "2",
    label: "CRYPTOCURRENCY EXCHANGE",
    children: <Service index={1} />,
  },
  {
    key: "3",
    label: "STORAGE",
    children: <Service index={2} />,
  },
  {
    key: "4",
    label: "AML COMPLIANCE",
    children: <Service index={3} />,
  },
  {
    key: "5",
    label: "AUTOCONVERSION",
    children: <Service index={4} />,
  },
];

const ServiceTabs: React.FC = () => <Tabs defaultActiveKey="1" items={items} />;

export default ServiceTabs;