import MemeberList from "./MemeberList"
import { useEffect  } from 'react';
import '@root/public/reset.css';

export default function HomePage() {
  const appFrameStyles = {
    height: '100%',
    weight: '100%'
  }

  useEffect(() => {
    // Your code here
    if (typeof document !== 'undefined' && document !== null) {
      var cod = document.getElementById('__next');
      if(typeof cod !== 'undefined' && cod !== null) {
        cod.classList.add('__next-login-page');
      }
    }
  }, []);

  return (
    <div id="app" style={appFrameStyles}>
      <MemeberList></MemeberList>
    </div>
  )
}