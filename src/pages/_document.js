// Refer to: https://nextjs.org/docs/pages/building-your-application/routing/custom-document 
// Added this file to override some default properties about the init html/body

import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
    const styles = {
        width: '100%',
        height: '100%'
    }

  return (
    <Html style={styles}>
      <Head />
      <body style={styles}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}