import "./Bubble.css"
import controllerImg from './controleur.png'
import detectiveImg from './detective.png'
import explorateurImg from './explorateur.png'
import Propositions from "./Propositions"

const images = [controllerImg, detectiveImg, explorateurImg, controllerImg]

export default function Bubbles({ bubbles, img }) {
  return <div className="bubbles-wrapper">
    <h2>{bubbles.title} </h2>
    <div>
      <div>
        {
          bubbles.content &&
          bubbles.content.map((bubble, index) => {
            return <div className="bubbles" key={index} style={{ animationDuration: `${(index + 1) * .4}s` }}>
              {
                bubble.kind === 'text' &&
                <>
                  <div>
                    <img src={images[img]} alt='controller' />
                  </div>
                  <p className="bubble">{bubble.content}</p>
                </>
              }
              {
                bubble.kind === 'list' &&
                <>
                  <div className="list-offset" />
                  <ul className="bubble">
                    {
                      bubble.items.map((item, index) => {
                        return <li key={index}>{item}</li>
                      })
                    }
                  </ul>
                </>
              }
              {
                bubble.kind === 'help' &&
                <Propositions content={bubble.content} />
              }
            </div>
          })
        }
      </div>
    </div>
  </div>
}