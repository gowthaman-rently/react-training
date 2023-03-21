import React from 'react';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';


class TaskCard extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            open:false
        }
    }

    handleModal(){
        this.setState({
            open : !this.state.open
        });
    }

    submitModal(ind, event){
        if(event.code === "Enter"){
            this.handleModal();
            return ;
        }
        this.props.editTask(ind, event);
    }
    
    render(){
        let edit_btn;
        if(this.props.item.status){
            edit_btn = ""
        }
        else{
            edit_btn = <IconButton onClick={()=>this.handleModal()} title='Delete' className='text-danger'>
                <EditIcon className="text-secondary"></EditIcon>
            </IconButton>;
        }

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '0px solid #000',
            radius: 1.5,
            boxShadow: 24,
            p: 3,
        };
          
        let labels = [];
        this.props.item.labels.map((item,ind)=>{
        if(item !== "all")
            labels.push(<Chip label={item} key={ind} className="my-2 p-1 mx-1 text-capitalize"/>)
        })

        return <>
        <Card variant="outlined" draggable="true" id={this.props.ind} className='task-card' key={this.props.ind} 
            onDrop={(event)=>this.props.drop(event, this.props.ind)} onDragOver={(event)=>this.props.allowDrop(event)} onDragStart={(event)=>{this.props.drag(event)}} >
            <Checkbox  onClick={()=>this.props.handleTask(this.props.ind)} defaultChecked={this.props.item.status?true:false}/>
            <div className="task-input-container">
                <input className={this.props.item.status ?"task-input completed":"task-input"} type="text" value={this.props.item.text} id={"task-"+this.props.ind} disabled onClick={()=>this.handleModal()}/>
            </div>
            <div className="task-btn-container"> 
                {labels}
                {edit_btn}
                <IconButton onClick={()=>this.props.deleteTask(this.props.ind)} title='Delete' className='text-danger'>
                    <DeleteIcon className="text-danger"></DeleteIcon>
                </IconButton>
            </div>
        </Card>
        <Modal open={this.state.open} onClose={()=>this.handleModal()} aria-labelledby="Edit">
            <Box id="modal" sx={style}>
                <Typography id="modal-title" variant="h6" component="h4" className="text-secondary">
                    Edit Task
                    <IconButton onClick={()=>this.handleModal()} className='text-danger'>
                        <CloseIcon className="text-danger"/>
                    </IconButton>
                </Typography>
                <Typography id="modal-description" sx={{ mt: 2 }} component="h1">
                    <div className="task-input-container">
                        <TextField className="modal-input" label="Title" type="text" value={this.props.item.text} onInput={(event)=>{this.submitModal(this.props.ind, event)}} id={"task-"+this.props.ind} autoComplete="off"/>
                    </div>
                    <FormControl className="w-100 my-2">
                        <InputLabel id="modal-label">Labels</InputLabel>
                        <Select
                            labelId="modal-label"
                            id="label"
                            multiple
                            value={this.props.item.labels.filter((label)=>{if(label!="all") return label})}
                            onChange={(event)=>{this.props.handleTaskLabel(this.props.ind, event.target.value)}}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                                </Box>
                            )}
                        >
                        {
                            this.props.labels.map((label) => {
                                if(label!="all"){
                                    return <MenuItem key={label} value={label} className='text-capitalize' >
                                    {label}
                                    </MenuItem>
                                }
                             })
                        }
                        </Select>
                    </FormControl>
                </Typography>
                <div className='text-center'>
                    <Button className='mt-3' variant="contained"  onClick={()=>this.handleModal()}>
                        Save
                    </Button>
                </div>
                
            </Box>
        </Modal>

        </>
        ;
    }
}

export default TaskCard;