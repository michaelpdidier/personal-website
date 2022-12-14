import React, { useState, useRef } from "react";
import "../css/DragAndDrop.css"

const DragAndDrop = () => {

    const data = [
        { title: 'group 1', items: ['1', '2', '3'] },
        { title: 'group 2', items: ['4', '5', '6'] },
        { title: 'group 3', items: [] },
    ]

    const [list, setList] = useState(data)

    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log("drag starting...", params)
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0)
    }

    const handleDrageEnter = (e, params) => {
        console.log("entering drag", params);
        const currentItem = dragItem.current;
        if (e.target !== dragNode.current) {
            console.log("Target is not the same")
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));
                newList[params.grpI].items.splice(params.itemI, 0, newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0])
                dragItem.current = params
                return newList
            })
        }
    }

    const handleDragEnd = () => {
        console.log('Ending drag...')
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null;
        dragNode.current = null;
        setDragging(false)
    }

    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
            return 'current dnd-item'
        }
        return "dnd-item"
    }

    return (
        <div className="drag-n-drop">
            {list.map((grp, grpI) => (
                <div
                    key={grp.title}
                    className="dnd-group"
                    onDragEnter={dragging && !grp.items.length ? (e) => handleDrageEnter(e, { grpI, itemI: 0}):null}
                >
                    <div className="group-title">{grp.title}</div>
                    {grp.items.map((item, itemI) => (
                        <div draggable
                            onDragStart={(e) => { handleDragStart(e, { grpI, itemI }) }}
                            onDragEnter={dragging ? (e) => { handleDrageEnter(e, { grpI, itemI }) } : null}
                            key={item}
                            className={dragging ? getStyles({ grpI, itemI }) : "dnd-item"}>
                            {item}
                        </div>
                    ))}
                </div>
            ))
            }
        </div>
    );
};

export default DragAndDrop;



