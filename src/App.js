import './App.css'
import {useState} from "react"
import {dumbify} from "./dumbify"
import {Alert, Button, Container, Image} from "react-bootstrap";
import bob from "./stupidSpongeBob.png"

function App() {
  const [clipText, setClipText] = useState(undefined)
  const [alert, setAlert] = useState(null)

  if(clipText === undefined){
    navigator.clipboard.readText()
        .then(text => {
          setClipText(dumbify(text))
        })
        .catch(err => {
          setClipText('')
        })
  }

  return (
      <Container fluid className={"main"}>
          {alert !== null ?<Alert variant={alert.variant}>
              {alert.text}
          </Alert>:<></>}
          <h1>DUMBIFY</h1><br/>
          <Button variant="secondary" onClick={()=>{
              navigator.clipboard.readText()
                  .then(text => {
                      setClipText(dumbify(text))
                  })
                  .catch(async () => {
                      setAlert({variant:'danger',
                          text:'we FailEd To CoPY YOUR ClipbOard, haVE YOu ALlOwED this sITe TO Do so ?'})
                      await delay(2000)
                      setAlert(null)
                  })

          }}>
              Take my clipboard
          </Button>&nbsp;&nbsp;
          <Button variant="primary" onClick={async ()=>{
              navigator.clipboard.writeText(clipText)
                  .then(async () => {
                      setAlert({variant: 'primary', text:'cOpIEd !'})
                      await delay(2000)
                      setAlert(null)
                  })
                  .catch(async () => {
                      setAlert({variant:'danger',
                          text:'we FailEd To CoPY tO cOpY TO yOur ClIpBOaRd, haVE YOu ALlOwED this sITe TO Do so ?'})
                      await delay(2000)
                      setAlert(null)
                  });
          }}>
              Copy this dumb stuff
          </Button><br/><br/><br/>
          <p>{clipText}</p>
          <Image src={bob}></Image>
      </Container>
  )
}

const delay = ms => new Promise(res => setTimeout(res, ms));

export default App
