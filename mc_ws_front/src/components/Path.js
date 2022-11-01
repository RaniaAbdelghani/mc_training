import './Path.css'
import controllerImg from './controleur1.png'
import detectiveImg from './detective1.png'
import explorateurImg from './explorateur1.png'
import { useEffect, useState } from 'react'

const initData = {
  ctrl1: "",
  ctrl2: "",
  det: "",
  exp: ""
}

export default function Path({ onImgChanged, onFinish, kind, text }) {
  const [data, setData] = useState(initData)
  const [done, setDone] = useState(kind === "exp" ? Infinity : 0);
  const [showDone, setShowDone] = useState(false)

  useEffect(() => {
    setDone(kind === "exp" ? Infinity : 0)
    setShowDone(false)
  }, [text, kind])

  useEffect(() => {
    if (done === 3) {
      setShowDone(false)
    } else if (done === 2) {
      if (data['exp']) {
        setShowDone(true)
      } else {
        setShowDone(false)
      }
    } else if (done === 1) {
      if (data['det']) {
        setShowDone(true)
      } else {
        setShowDone(false)
      }
    } else if (done === 0) {
      if (data['ctrl1']) {
        setShowDone(true)
      } else {
        setShowDone(false)
      }
    }
  }, [data, done])

  return <div>
    <div className='path'>
      <div className='ctrl1' onClick={() => onImgChanged(1)} >
        <img src={controllerImg} alt='controller' />
        <div className='label label-top'>
          <h3>1- Le contrôleur</h3>
          {
            kind === 'nrml' &&
            <input value={data['ctrl1']} onChange={(e) => setData({ ...data, ctrl1: e.target.value })} />
          }
        </div>
      </div>
      {
        done > 0 &&
        <div className='det' onClick={() => onImgChanged(2)} >
          <img src={detectiveImg} alt='controller' />
          <div className='label label-bottom'>
            <h3>2- Le détective</h3>
            {
              kind === 'nrml' &&
              <input value={data['det']} onChange={(e) => setData({ ...data, det: e.target.value })} />
            }
          </div>
        </div>
      }
      {
        done > 1 &&
        <div className='exp' onClick={() => onImgChanged(3)} >
          <img src={explorateurImg} alt='controller' />
          <div className='label label-left'>
            <h3>3- L'explorateur</h3>
            <input value={data['exp']} onChange={(e) => setData({ ...data, exp: e.target.value })} />
          </div>
        </div>
      }
      {
        done > 2 &&
        <div className='ctrl2' onClick={() => onImgChanged(4)} >
          <img src={controllerImg} alt='controller' />
          <div className='label label-right'>
            <h3>4- Le contrôleur</h3>
            {
              kind === 'nrml' &&
              <input value={data['ctrl2']} onChange={(e) => setData({ ...data, ctrl2: e.target.value })} />
            }
          </div>
        </div>
      }
    </div>
    {
      showDone &&
      <button onClick={() => {
        setDone(done + 1)
      }}>Je n'importe quoi</button>
    }
    {
      ((data['ctrl1'] && data['ctrl2'] && data['det'] && data['exp']) ||
        (kind === "exp" && data['exp'])) &&
      <button onClick={() => {
        setData(initData)
        onFinish(data)
      }}>J'enregistre mon travail et je passe au texte suivant</button>
    }
  </div>
}