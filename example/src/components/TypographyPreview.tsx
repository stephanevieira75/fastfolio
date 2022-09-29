import React from "react";

import { Typography } from "fastfolio";

const { Title } = Typography;
export const TypographyPreview = () => {
  return (
    <div
      style={{
        background: "#262626"
      }}
    >
      <h1 style={{ color: "#fafafa", margin: 0, paddingBottom: 24 }}>
        Typography
      </h1>

      <Title level={1}>Heading 1</Title>
      <Title level={2}>Heading 2</Title>
      <Title level={3}>Heading 3</Title>
      <Title level={4}>Heading 4</Title>

      <div style={{ padding: 16 }}></div>
    </div>
  );
};
