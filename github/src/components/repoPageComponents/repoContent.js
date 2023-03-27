import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CircularProgress, Breadcrumbs } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import connect from '../connector';

class RepoContent extends React.Component {

    state = {status : false,repoContent :[] }

    async componentDidMount(){
        let repoContent = await connect("GET",this.props.repoDetails.contents_url.split("{")[0]+this.props.path);

        if(repoContent.status !== 200){
            repoContent = {data:[]}
        }
        this.setState({
            status: true,
            repoContent : repoContent.data
        })       
    }

    async componentDidUpdate(){
        if(!this.state.status){
            let repoContent = await connect("GET",this.props.repoDetails.contents_url.split("{")[0]+this.props.path);

            if(repoContent.status !== 200){
                repoContent = {data:[]}
            }
            
            this.setState({
                status: true,
                repoContent : repoContent.data
            })
        }
    }

    render() { 
        const repoContentCard = {
            "border" : "solid 0px black",
            "borderRadius" : "1.5rem",
            "color" : "white",
        };

        const repoContentBody = {
            "overflowY" : "auto",
            "height" : "70vh",
            "padding" : "0px 0px 20px 0px",
            "overflowX" : "hidden"
        };
        let path = null;
        return (
        <Card variant="outlined" className='col-10 col-lg-6 bg-dark text-center mx-auto my-3 p-2' style={repoContentCard}>
            <div className='px-3 py-2 text-start' >
                <Breadcrumbs aria-label="breadcrumb" className=' fs-5 text-light'>
                    {
                        [this.props.repoDetails.name,...this.props.path.split("/") ].map((item, ind)=>{
                
                            if(path !== null && path !== ""){
                                path += "/"+item;
                            }
                            else if(path !== null){
                                path = item;
                            }
                            else{
                                path = ""
                            }
                            let temp_path = path;
                            return <Link underline="hover" key={ind} className='text-decoration-none text-light' onClick={()=>{this.props.updatePath(temp_path);this.setState({status:false, file:false})}}>
                                {item}
                            </Link>
                        })
                    }
                    
                </Breadcrumbs>
            </div> 
            <hr className='m-0 mt-2'/>
            <div style={repoContentBody}>
                { this.state.status ?this.state.repoContent.map((item, ind)=>{
                    if(item.type === "file" ){
                        return <div className='d-flex p-2 border-bottom border-secondary repo-content' key={ind}>
                            <InsertDriveFileIcon className='mx-2'/>
                            <Link to={item.download_url} className='text-decoration-none'>
                                {item.name}        
                            </Link>
                        </div>
                        
                    }
                    else{
                        return <div className='d-flex p-2 border-bottom border-secondary repo-content' key={ind}>
                            <FolderIcon className='mx-2'/>
                            <div onClick={()=>{this.props.addPath(item.name);this.setState({status:false})}} role='button' className='text-decoration-none text-primary'>
                                {item.name}     
                            </div>
                        </div>
                    }
                }) : <CircularProgress size={35} className='my-5'/>} 
            </div> 
        </Card>
        );
    }
}
 
export default RepoContent;