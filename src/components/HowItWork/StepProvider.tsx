"use client";

import type { StepsProps } from "antd";
import { Popover, Steps } from "antd";
import React, { useState } from "react";

const customDot: StepsProps["progressDot"] = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        Step {index} - Status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

type StepProviderProps = {
  handleCurrentIndex: (index: number) => void;
};

const StepProvider: React.FC<StepProviderProps> = ({ handleCurrentIndex }) => {
  const [current, setCurrent] = useState(0);
  const handleStepChange = (current: number) => {
    setCurrent(current);
    handleCurrentIndex(current);
  };

  return (
    <Steps
      current={current}
      progressDot={customDot}
      direction="vertical"
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
  );
};

export default StepProvider;
