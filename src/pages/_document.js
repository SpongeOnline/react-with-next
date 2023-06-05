// Refer to: https://nextjs.org/docs/pages/building-your-application/routing/custom-document 
// Added this file to override some default properties about the init html/body
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    const styles = {
      html: {height: '100%', weight: '100%'},
      body: {height: '100%', weight: '100%'}
    }

  return (
    <Html style={styles.html}> 
      <Head />
      <body style={styles.body}>
        <Main />
        <NextScript />    
      </body>
    </Html> 
  );
}