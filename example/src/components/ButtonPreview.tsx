import React from "react";

import { Button } from "fastfolio";

type Props = {
  size?: "large" | "medium" | "small";
};

export const ButtonPreview = ({ size }: Props) => {
  const [disabled, setDisabled] = React.useState<boolean>(false);
  return (
    <div style={{ background: "#262626" }}>
      <h1 style={{ color: "#fafafa", margin: 0, paddingBottom: 24 }}>
        Buttons {size}
      </h1>
      <h2 style={{ color: "#fafafa", margin: 0, paddingBottom: 24 }}>
        disabled
        <input
          type="checkbox"
          checked={disabled}
          onChange={() => setDisabled(!disabled)}
        />
      </h2>

      <br />
      <Button
        disabled={disabled}
        onClick={(_e) => console.log("Clicked ")}
        size={size}
      >
        primary
      </Button>
      <Button
        disabled={disabled}
        color="secondary"
        onClick={(_e) => console.log("Clicked ")}
        size={size}
      >
        secondary
      </Button>
      <Button
        disabled={disabled}
        color="warning"
        onClick={(_e) => console.log("Clicked ")}
        size={size}
      >
        warning
      </Button>
      <Button
        disabled={disabled}
        color="error"
        onClick={(_e) => console.log("Clicked ")}
        size={size}
      >
        error
      </Button>
      <Button
        disabled={disabled}
        color="success"
        onClick={(_e) => console.log("Clicked ")}
        size={size}
      >
        success
      </Button>
      <Button
        disabled={disabled}
        color="dark"
        onClick={(_e) => console.log("Clicked ")}
        size={size}
      >
        dark
      </Button>
      <Button
        disabled={disabled}
        color="light"
        onClick={(_e) => console.log("Clicked ")}
        size={size}
      >
        light
      </Button>
      <Button
        disabled={disabled}
        color="ghost"
        onClick={(_e) => console.log("Clicked ")}
        size={size}
      >
        ghost
      </Button>

      <div style={{ padding: 16 }}></div>
    </div>
  );
};
