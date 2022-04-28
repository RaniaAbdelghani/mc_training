import { useState } from "react"

export default function Propositions({ content }) {
    const [show, setShow] = useState(false)
    return <>
        {
            !show &&
            <button onClick={() => setShow(true)}>help me :'(</button>
        }
        {
            show &&
            <>
                <div className="list-offset" />
                <ul className="bubble">
                    {
                        content.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </>
        }
    </>
}