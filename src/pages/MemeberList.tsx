export default function MemeberList() {

  const styls = {
    display: 'block',
    width: '100%',
    height: '100%',
    border: '1px solid black'
  }

  const circles = {
    display: 'flex',
    overflow: 'hidden'
  }

  const data = [
    {},{},{},{}
  ]

  const setData = (data: any)=> {
   //console.log(data)
  }

  const handleClick = () => {
    // Fetch data from backend service
    fetch('https://baidu.com', {mode: 'no-cors'})
      .then(response => console.log());
  };

  const circle = {
    flexShrink: 0,
    border: '2px solid black',
    width: '100px',
    height: '100px',
    borderRadius: '100px',
    backgroundImage: 'url(./Rong.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    ustifyContent: 'space-between'
  }

  return (
    <div style={styls}>
      <div style={circles}>
       
          <div onClick={handleClick} style={circle}></div>
          <div onClick={handleClick} style={circle}></div>
          <div onClick={handleClick} style={circle}></div>
          <div onClick={handleClick} style={circle}></div>
        
      </div>
    </div>
  )
}