import React from "react";
import Header from "./components/Header";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>하모니움</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.2/antd.min.css"
          integrity="sha512-rcGZHZE3MVqNz2JZt5470axyVbsCmk79m7sxY2LYcPlxUsWdzP5g7KHLotgEk+tC9wtYQBNEgUoHK6Ksi9FfrA=="
          crossorigin="anonymous"
        />
      </Helmet>
      <Header />
    </>
  );
}

export default App;
