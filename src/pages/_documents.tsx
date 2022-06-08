import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Hind&family=Inter&family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="images/scissors.svg"
            type="image/svg"
          />
          {/* <title>Testosterona  Barbearia</title> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            noModule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>
        </body>
      </Html>
    );
  }
}
