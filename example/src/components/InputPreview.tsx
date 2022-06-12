import React from "react";

import { Input } from "fastfolio";

type Props = {
  size?: "large" | "medium" | "small";
  borderRadius?: "large" | "medium" | "small";
};

export const InputPreview = ({ size, borderRadius }: Props) => {
  const [disabled, setDisabled] = React.useState<boolean>(false);
  return (
    <div
      style={{
        background: "#262626"
      }}
    >
      <h1 style={{ color: "#fafafa", margin: 0, paddingBottom: 24 }}>
        Inputs {size}
      </h1>
      <h2 style={{ color: "#fafafa", margin: 0, paddingBottom: 24 }}>
        disabled
        <input
          type="checkbox"
          checked={disabled}
          onChange={() => setDisabled(!disabled)}
        />
      </h2>
      <Input
        disabled={disabled}
        color="primary"
        placeholder="primary"
        size={size}
        borderRadius={borderRadius}
        onChange={(e) => console.log("primary", size, e.target.value)}
      />

      <Input
        disabled={disabled}
        color="secondary"
        placeholder="secondary"
        size={size}
        borderRadius={borderRadius}
        onChange={(e) => console.log("secondary", size, e.target.value)}
      />

      <Input
        disabled={disabled}
        color="success"
        placeholder="success"
        size={size}
        borderRadius={borderRadius}
        onChange={(e) => console.log("success", size, e.target.value)}
      />

      <Input
        disabled={disabled}
        color="warning"
        placeholder="warning"
        size={size}
        borderRadius={borderRadius}
        onChange={(e) => console.log("warning", size, e.target.value)}
      />

      <Input
        disabled={disabled}
        color="error"
        placeholder="error"
        size={size}
        borderRadius={borderRadius}
        onChange={(e) => console.log("error", size, e.target.value)}
      />

      <Input
        disabled={disabled}
        color="dark"
        placeholder="dark"
        size={size}
        borderRadius={borderRadius}
        onChange={(e) => console.log("dark", size, e.target.value)}
      />

      <Input
        disabled={disabled}
        color="light"
        placeholder="light"
        size={size}
        borderRadius={borderRadius}
        onChange={(e) => console.log("light", size, e.target.value)}
      />

      <Input
        disabled={disabled}
        color="ghost"
        placeholder="ghost"
        size={size}
        borderRadius={borderRadius}
        onChange={(e) => console.log("ghost", size, e.target.value)}
      />

      <div style={{ padding: 16 }}></div>
    </div>
  );
};
