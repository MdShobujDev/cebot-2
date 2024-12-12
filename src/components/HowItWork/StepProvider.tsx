"use client";

import type { StepsProps } from "antd";
import { Popover, Steps } from "antd";
import React from "react";

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
  currentIndex: number; // Index of the currently active step
};

const StepProvider: React.FC<StepProviderProps> = ({ currentIndex }) => (
  <Steps
    current={currentIndex}
    progressDot={customDot}
    direction="vertical"
    size="small"
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

export default StepProvider;
