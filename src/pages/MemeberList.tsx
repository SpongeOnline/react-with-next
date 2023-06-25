export default function MemeberList() {

  const styls = {
    display: 'flex',
    overflow: 'hidden',
    border: '1px solid black',
    'justify-content': 'center',
    'align-items': 'center'
  }

  const circles = {
    display: 'flex',
    overflow: 'hidden'
  }

  const data = [
    {},{},{},{},{},{},{},{},{},{}
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

  const componentList = data.map((item, index) => {
    return <div onClick={handleClick} style={circle} key={index} />;
  });

  return (
    <div style={styls}>
        {
          data.map((item, index) => {
            return <div onClick={handleClick} style={circle} key={index} />;
          })
        }
    </div>
  )
}