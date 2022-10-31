import { useEffect, useState } from "react";

import './GridLayout.css';

export function GridLayout({ children }) {
  const [col1, setCol1] = useState(window.innerWidth * 0.23);
  const [col2, setCol2] = useState(window.innerWidth * 0.46);

  const [dragging, setDragging] = useState(-1);
  const [pos, setPos] = useState(0)

  const initSizes = () => {
    setCol1(window.innerWidth * 0.23);
    setCol2(window.innerWidth * 0.46);
  }

  const gridTemplate = {
    gridTemplateColumns: `${col1}px 8px ${col2}px 8px auto`
  };

  const startDrag = (index, e) => {
    setDragging(index)
    setPos(e.clientX);
  }

  const stopDrag = (e) => {
    setDragging(-1);
  }

  const mousemove = (e) => {
    if (dragging === -1) return;
    const delta = e.clientX - pos;
    if (dragging === 0) {
      setCol1(col1 + delta);
      setCol2(col2 - delta);
    } else {
      setCol2(col2 + delta);
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', stopDrag)
    window.addEventListener('resize', initSizes)
    return () => {
      document.removeEventListener('mousemove', mousemove)
      document.removeEventListener('mouseup', stopDrag)
      window.removeEventListener('resize', initSizes)
    }
  }, [dragging])

  return (
    <div className="grid-layout" style={gridTemplate}>
      {children.map((child, index) => {
        if (index < 2) {
          return (
            <>
              <div className="column">{ child }</div>
              <div
                className="seperator"
                onMouseDown={(e) => startDrag(index, e)}
              >
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </>
          )
        }
        return <div className="column">{ child }</div>
      })
      }
    </div>
  );
}