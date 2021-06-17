
import './App.css';
import { DndProvider, useDrag ,useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Container } from './Container';
// import { ItemTypes } from './Items';


// const style = {
//   opacity: '0.5',
// };

function App(props) {

  // const [{isDragging},drag] = useDrag({

  //   type:"CARD",

  //   collect:(monitor) =>({

  //     isDragging: !!monitor.isDragging()

  //   })
  // })

  

  // // const [{ isDragging }, drag] = useDrag(
  // //   () => ({
  // //     type: ItemTypes.CARD,
  // //     collect: (monitor) => ({
  // //       opacity: monitor.isDragging() ? 0.5 : 1
  // //     })
  // //   }),
  // //   []
  // // )
  // return(
  //   <>
    
  //     <div className="drag-area"  ref={drag} opacity = {isDragging ? '0.5' : '1'}>
                    
                  
  //                   <h4>Drag & Drop to Upload files</h4>
  //                  <span className="span">OR</span>
                    
  //                    {/* <input type="file" onChange={onfileChange} /> */}

  //                    <button type="file" > Upload Files</button>
  //               </div>
   

  //   </>
  // )


  return(
    <>
    <Container/>
    </>
  )
}

export default App;
