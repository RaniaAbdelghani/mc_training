import "./Bubble.css"
import controllerImg from './controleur1.png'
import detectiveImg from './detective1.png'
import explorateurImg from './explorateur1.png'
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
                bubble.kind === 'help' &&
                <Propositions content={bubble.content} />
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
            </div>
          })
        }
      </div>
    </div>
  </div>
}