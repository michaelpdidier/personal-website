import React from "react";
import "../css/DragAndDrop.css"

const DragAndDrop = () => {

    const data = [
        { title: 'group 1', items: ['1', '2', '3'] },
        { title: 'group 2', items: ['4', '5', '6'] },
    ]
    return (
        <div className="drag-n-drop">
            {data.map((grp, grpI) => (
                <div className="dnd-group">
                    <div className="dnd-group">
                        {grp.items.map((item, itemI) => (
                            <div draggable key={item} className="dnd-item">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            ))
            }
        </div>
        // < main >
        //     <h2>Drag & Drop</h2>
        //     <div className="drag-n-drop">
        //         <div className="dnd-group">
        //             <div className="group-title">
        //                 Group 1
        //             </div>
        //             <div className="dnd-item">
        //                 <div>
        //                     <p>ITEM 1</p>
        //                 </div>
        //             </div>
        //             <div className="dnd-item">
        //                 <div>
        //                     <p>ITEM 2</p>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="dnd-group">
        //             <div className="group-title">
        //                 Group 2
        //             </div>
        //             <div className="dnd-item">
        //                 <div>
        //                     <p>ITEM 3</p>
        //                 </div>
        //             </div>
        //             <div className="dnd-item">
        //                 <div>
        //                     <p>ITEM 4</p>
        //                 </div>
        //             </div>
        //         </div>
        //         {/* <div className="dnd-group">
        //             <div className="group-title">
        //                 Group 3
        //             </div>
        //         </div> */}
        //     </div>
        // </main >
    );
};

export default DragAndDrop;



