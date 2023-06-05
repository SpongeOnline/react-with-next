import RootLayout from "./RootLayout"
import { useEffect  } from 'react';
import '@root/public/reset.css';

export default function HomePage() {
  const appFrameStyles = {
    height: '100%',
    weight: '100%'
  }

  useEffect(() => {
    // Your code here
    document.getElementById('__next').classList.add('__next-login-page');
  }, []);

  return (
    <div id="app" style={appFrameStyles}>
      <style jsx global>{`
          .__next-login-page {
            height: 100%;
            weight: 100%;
          }
        `}</style>
      <RootLayout></RootLayout>
    </div>
  )
}