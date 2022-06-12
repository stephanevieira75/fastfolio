# fastfolio

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/fastfolio.svg)](https://www.npmjs.com/package/fastfolio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save fastfolio
or
yarn add fastfolio
```

## Usage

```tsx
import React, { Component } from "react";

import { Button } from "fastfolio";

import "fastfolio/dist/index.css";

function App() {
  return (
    <Button
      color="primary"
      size="large"
      onClick={(_e) => console.log("Clicked")}
    >
      primary
    </Button>
  );
}
```

## License

MIT © [stephanevieira75](https://github.com/stephanevieira75)
