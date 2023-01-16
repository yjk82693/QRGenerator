import QRCode from "react-qr-code";
import {useState} from "react";

function App() {
  const [url, setURL] = useState('')
  const [qrcode, setQRcode] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, (err,url) => {
      if(err) return console.error(err)

      console.log(url)
      setQRcode(url)
    })
  }

  return (
    <div className="app">
      <h1>ShortURL-QR Generator</h1>
      <input
        type="text"
        placeholder="Insert ShortURL: "
        value={url}
        onChange = {(evt) => setURL(evt.target.value) }/>
      <button onClick={GenerateQRCode}>Generate</button>
      {qrcode && <>
        <img src = {qrcode} />
        <a herif = {qrcode} download = "qrcode.png">Download</a>
      </>}
      <img src = {qrcode} />
    </div>
  )
}

export default App