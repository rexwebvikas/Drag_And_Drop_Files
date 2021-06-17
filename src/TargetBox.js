
import { NativeTypes } from 'react-dnd-html5-backend';
import { useDrop } from 'react-dnd';
import BackupIcon from '@material-ui/icons/Backup';
import { useMemo } from 'react';
import { FileList } from './FileList';

export const TargetBox = (props) => {
    const { onDrop ,files,setDroppedFiles, acceptedFiles} = props;
    console.log(props,"")
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: [NativeTypes.FILE],
        drop(item) {
            if (onDrop) {
                onDrop(item);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }), [props]);




    // const removeFile = (file) => () => {
    //     console.log('removeFile...' ,file)
    //     acceptedFiles.splice(acceptedFiles.indexOf(file), 1)
    //     console.log(acceptedFiles)
    //   }
    //   removeFile();
    // const remove = file => {
    //     const newFiles = [...files];     // make a var for the new array
    //     file.splice(file, 1);        // remove the file from the array
    //   };
    const isActive = canDrop && isOver;
    return (<div className="drag-area" ref={drop} >
        <BackupIcon />
        <h4>Drag & Drop to Upload files</h4>
        <span className="span">OR</span>
        {/* {isActive ? 'Release to drop' } */}
			<FileList files={files} setDroppedFiles={setDroppedFiles} acceptedFiles={acceptedFiles} />

    </div>);
};







