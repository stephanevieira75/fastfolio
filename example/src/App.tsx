import React from "react";

import { ButtonPreview } from "./components/ButtonPreview";
import { ImagePreview } from "./components/ImagePreview";
import { InputPreview } from "./components/InputPreview";
import { TypographyPreview } from "./components/TypographyPreview";

const App = () => {
  return (
    <>
      <ButtonPreview size="large" />
      <ButtonPreview size="medium" />
      <ButtonPreview size="small" />

      <InputPreview size="large" borderRadius="large" />
      <InputPreview size="medium" borderRadius="medium" />
      <InputPreview size="small" borderRadius="small" />

      <ImagePreview width={320} height={320} />
      <ImagePreview width={160} height={160} />
      <ImagePreview width={80} height={80} />

      <TypographyPreview />
    </>
  );
};

export default App;
