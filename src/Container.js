

import { useState, useCallback,useEffect } from 'react';
import { TargetBox } from './TargetBox';
import { FileList } from './FileList';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import update from 'react-addons-update';
export const Container = (dragIndex) => {
    const [droppedFiles, setDroppedFiles] = useState([]);
    // const [close, setclose] = useState("")

//     const clear =(i)=>{
//     // list("")
//     setDroppedFiles("")
//     console.log(i,"hhhhhhhhhhhhhh")

// }
    const handleFileDrop = useCallback((item) => {

        if (item) {
            const files = item.files;
            setDroppedFiles(files);
          
        }
    }, [setDroppedFiles]);
 useEffect(()=>{
        setDroppedFiles(droppedFiles);

 },[droppedFiles]);
    
    console.log("vikassss" ,droppedFiles)
    return (<>
			<TargetBox files={droppedFiles} onDrop={handleFileDrop} setDroppedFiles={setDroppedFiles}/>
		</>);
};
