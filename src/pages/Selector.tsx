import MemeberList from "./MemeberList"

export default function Selector() {
  
  const styls = {
    display: 'flex',
    overflow: 'hidden',
    border: '1px solid black',
    'justify-content': 'center',
    'align-items': 'center'
  }

  const buttonstyls = {
    margin: '10px',
    padding: '10px'
  }

  return (
    <div>
      <MemeberList></MemeberList>
      <div style={styls}>
        <button style={buttonstyls}>CLICK ME</button>
      </div>
    </div>
  )
}