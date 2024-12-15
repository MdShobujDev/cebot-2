"use client";

import type { StepsProps } from "antd";
import { ConfigProvider, Popover, Steps } from "antd";
import React, { useEffect, useState } from "react";

const customDot: StepsProps["progressDot"] = (dot, { status }) => (
  <Popover content={<span>{status}</span>}>{dot}</Popover>
);

type StepProviderProps = {
  handleCurrentIndex: (index: number) => void;
};

const StepProvider: React.FC<StepProviderProps> = ({ handleCurrentIndex }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"vertical" | "horizontal">(
    "horizontal"
  );
  const [lineWidth, setLineWidth] = useState(1.5);

  const handleStepChange = (current: number) => {
    setCurrent(current);
    handleCurrentIndex(current);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)");
    const updateStyles = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setDirection("vertical");
        setLineWidth(5);
      } else {
        setDirection("horizontal");
        setLineWidth(1.5);
      }
    };

    updateStyles(mediaQuery); // Set initial styles based on current screen size
    mediaQuery.addEventListener("change", updateStyles); // Listen for screen size changes

    return () => {
      mediaQuery.removeEventListener("change", updateStyles);
    };
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Steps: {
            dotSize: 15,
            lineWidth: lineWidth,
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
        },
      }}
    >
      <Steps
        current={current}
        progressDot={customDot}
        direction={direction}
        size="small"
        onChange={handleStepChange}
        items={[
          {
            title: (
              <p className="leading-4 text-[11px] font-light">
                Automated Crypto <br /> Reception
              </p>
            ),
          },
          {
            title: (
              <p className="leading-4 text-[11px] font-light">
                Customizable <br /> Conversion Rules
              </p>
            ),
          },
          {
            title: (
              <p className="leading-4 text-[11px] font-light">
                Seamless Asset <br /> Transition
              </p>
            ),
          },
          {
            title: (
              <p className="leading-4 text-[11px] font-light">
                Efficient Portfolio <br /> Management
              </p>
            ),
          },
        ]}
      />
    </ConfigProvider>
  );
};

export default StepProvider;
