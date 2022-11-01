import { useEffect, useState, useRef } from "react";
import axios from "axios"
import "./App.css";
import { GridLayout } from "./components/GridLayout";
import Path from "./components/Path";
import texts from "./data/texts";
import Bubbles from "./components/Bubbles";

const url = "http://localhost:8000"

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
  const [kind, setKind] = useState(null);

  const [isTextDone, setTextDone] = useState(false);
  const [step, setStep] = useState(1)
  const [text, setText] = useState(0)

  const previousUrl = useRef('');
  const audioRef = useRef();

  useEffect(() => {
    const oldState = window.localStorage.state
    if (oldState) {
      const { userName, user, isTextDone, step, text, kind } = JSON.parse(oldState)

      setUserName(userName)
      setUser(user)
      setTextDone(isTextDone)
      setStep(step)
      setText(text)
      setKind(kind)
      if (audioRef.current) {
        audioRef.current.load();
      }
      previousUrl.current = texts[text].audio;
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify({ userName, user, isTextDone, step, text, kind }))
  }, [userName, user, isTextDone, step, text, kind])


  const login = async () => {
    // set user in db
    await axios.post(url + '/user', { name: userName, kind })
    setUser(userName);
  }

  const handleImgClick = (index) => {
    if (index !== 3 && kind === "exp") return;
    setStep(index)
  }

  const handleFinish = async (data) => {
    // submit data to server
    await axios.post(url + '/data', { name: user, data: { [text]: data } })
    setTextDone(false)
    setText(text + 1)
    setStep(1)
  }

  const handleTextDone = () => {
    setTextDone(true)
  }

  if (kind === null) return <div>
    <select onChange={(e) => setKind(e.target.value)}>
      <option selected disabled>select type</option>
      <option value="exp">Option  </option>
      <option value="nrml">normal</option>
    </select>
  </div>

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
            {texts[text].content}
          </p>
          <audio controls ref={audioRef}>
            <source src={texts[text].audio} type="audio/mp3"></source>
          </audio>
        </p>
        {
          !isTextDone &&
          <button onClick={handleTextDone}>J'ai fini la lecture</button>
        }
      </div>
      <div>
        <Path text={text} onImgChanged={handleImgClick} onFinish={handleFinish} kind={kind} />
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
