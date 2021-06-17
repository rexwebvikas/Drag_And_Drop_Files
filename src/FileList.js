
import { useMemo, useState } from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


// const clear =(i)=>{
//     // list("")
//     console.log(i,"hhhhhhhhhhhhhh")
// }
export const FileList = ({ files, setDroppedFiles ,acceptedFiles}) => {
    const fileList = useMemo(() => List(files), [files]);



    // const removeFile = (file) => () => {
    //     console.log('removeFile...')
    //     acceptedFiles.splice(acceptedFiles.indexOf(file), 1)
    //     console.log(acceptedFiles)
    //   }
    
    //   const removeAll = () => {
    //     console.log('removeAll...')
    //     acceptedFiles.length = 0
    //     acceptedFiles.splice(0, acceptedFiles.length)
    //     // inputRef.current.value = ''
    //     console.log(acceptedFiles)
    //   }
    

    
    function List(files) {
        // const [clear,setClear] = useState(files);
        
        if (files.length>0) {
            // debugger
            const label = (file) => { console.log('kkkkkkk ', file); return `'${file.name}' of size '${file.size}' and type '${file.type}'`; }
            return files.map((file, i) => {
                return <li key={file.type}>{
                        label(file)}<CloseRoundedIcon onClick={() => {
                            // {removeFile(file)}
                            files.splice(i,1);
                            console.log(files, "gggggggggg");
                            setDroppedFiles(files);
                            //  refreshPage()
                        }
                        }
                    />
                </li>
            }
            );
            // debugger
        }
        else{
            // debugger
            return<div>No File</div>
        }
    }

    return <div>{fileList}</div>;
};
