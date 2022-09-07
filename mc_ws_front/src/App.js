import { useEffect, useState } from "react";
import axios from "axios"
import "./App.css";
import { GridLayout } from "./components/GridLayout";
import Path from "./components/Path";
import texts from "./data/texts";
import Bubbles from "./components/Bubbles";

const url = "http://192.168.1.13:8000"

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");

  const [isTextDone, setTextDone] = useState(false);
  const [step, setStep] = useState(1)
  const [text, setText] = useState(0)

  useEffect(() => {
    const oldState = window.localStorage.state
    if (oldState) {
      const { userName, user, isTextDone, step, text } = JSON.parse(oldState)

      setUserName(userName)
      setUser(user)
      setTextDone(isTextDone)
      setStep(step)
      setText(text)
    }
  }, [])
  
  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify({ userName, user, isTextDone, step, text }))
  }, [userName, user, isTextDone, step, text])


  const login = async () => {
    // set user in db
    await axios.post(url + '/user', { name: userName })
    setUser(userName);
  }

  const handleImgClick = (index) => {
    setStep(index)
  }

  const handleFinish = async (data) => {
    // submit data to server
    await axios.post(url + '/data', { name: user, data: { [text]: data }} )
    setTextDone(false)
    setText(text + 1)
    setStep(1)
  }

  const handleTextDone = () => {
    setTextDone(true)
  }

  if (!user) return <div className="card">
    <h1>Nom d'utlisateur</h1>
    <input onChange={(e) => setUserName(e.target.value)} />
    <button onClick={login}>Submit</button>
  </div>

  if (text === texts.length) return <div className="card"> 
    <h1>Merci {user} !</h1>
  </div>

  return (
    <GridLayout>
      <div className="col1">
        <p className="text">
          <h3>Texte {text + 1}: </h3>
          <p className="content">
            { texts[text].content }
          </p>
        </p>
        {
          !isTextDone &&
          <button onClick={handleTextDone}>J'ai fini la lecture</button>
        }
      </div>
      <div>
        <Path onImgChanged={handleImgClick} onFinish={handleFinish} />
      </div>
      <div>
        {
          isTextDone &&
          <Bubbles bubbles={texts[text].bubbles[step]} img={step - 1} />
        }
      </div>
    </GridLayout>
  );
}

export default App;
