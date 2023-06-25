import Selector from "./Selector"
import { useEffect  } from 'react';
import '@root/public/reset.css';

export default function HomePage() {
  const appFrameStyles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    overflow: 'hidden',
    'justify-content': 'center',
    'align-items': 'center'
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
      <Selector></Selector>
    </div>
  )
}