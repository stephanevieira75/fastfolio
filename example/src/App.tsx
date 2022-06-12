import React from "react";

import { ButtonPreview } from "./components/ButtonPreview";
import { InputPreview } from "./components/InputPreview";

const App = () => {
  return (
    <>
      <ButtonPreview size="large" />
      <ButtonPreview size="medium" />
      <ButtonPreview size="small" />

      <InputPreview size="large" borderRadius="large" />
      <InputPreview size="medium" borderRadius="medium" />
      <InputPreview size="small" borderRadius="small" />
    </>
  );
};

export default App;
