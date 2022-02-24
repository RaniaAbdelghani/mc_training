import './Path.css'
import controllerImg from './controleur.png'
import detectiveImg from './detective.png'
import explorateurImg from './explorateur.png'
import { useState } from 'react'

const initData = {
  ctrl1: "",
  ctrl2: "",
  det: "",
  exp: ""
}

export default function Path({ onImgChanged, onFinish }) {
  const [data, setData] = useState(initData)

  return <div>
    <div className='path'>
      <div className='ctrl1' onClick={() => onImgChanged(1)} >
        <img src={controllerImg} alt='controller' />
        <div className='label label-top'>
          <h3>1- Le contrôleur</h3>
          <input value={data['ctrl1']} onChange={(e) => setData({ ...data, ctrl1: e.target.value })} />
        </div>
      </div>

      <div className='det' onClick={() => onImgChanged(2)} >
        <img src={detectiveImg} alt='controller' />
        <div className='label label-bottom'>
          <h3>2- Le détective</h3>
          <input value={data['det']} onChange={(e) => setData({ ...data, det: e.target.value })}  />
        </div>
      </div>

      <div className='exp' onClick={() => onImgChanged(3)} >
        <img src={explorateurImg} alt='controller' />
        <div className='label label-left'>
          <h3>3- L'explorateur</h3>
          <input value={data['exp']} onChange={(e) => setData({ ...data, exp: e.target.value })}  />
        </div>
      </div>

      <div className='ctrl2' onClick={() => onImgChanged(4)} >
        <img src={controllerImg} alt='controller' />
        <div className='label label-right'>
          <h3>4- Le contrôleur</h3>
          <input value={data['ctrl2']} onChange={(e) => setData({ ...data, ctrl2: e.target.value })}  />
        </div>
      </div>
    </div>
    {
      data['ctrl1'] && data['ctrl2'] && data['det'] && data['exp'] &&
      <button onClick={() => { 
        setData(initData)
        onFinish(data)
      }}>J'enregistre mon travail et je passe au texte suivant</button>
    }
  </div>
}