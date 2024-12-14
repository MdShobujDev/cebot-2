import { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#539DE1",
    fontFamily: "var(--font-barlow)",
  },
  components: {
    Steps: {
      dotSize: 15,
      lineWidth: 5,
      colorPrimary: "#fff",
      navContentMaxWidth: "200px",
      colorTextDisabled: "#1B232B",
      controlHeight: 60,
      colorSplit: "#1B232B",
      margin: 12,
      dotCurrentSize: 15,
      colorText: "#8EA9F1",
      colorTextDescription: "#C4C8CC",
    },
    Tabs: {
      colorPrimary: "#3A47E1",
      inkBarColor: "#3A47E1",
      itemColor: "#81868a",
      itemHoverColor: "#3A47E1",
      colorText: "#81868a",

      colorBgContainer: "#030C14",
      boxShadowSecondary: " 0px 15px 46px -10px rgba(92,104,237,.3)",
    },
  },
};

export { theme };
