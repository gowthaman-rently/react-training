import React from 'react';
import { Card , Button, Chip} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';
import TerminalIcon from '@mui/icons-material/Terminal';
import { Link } from 'react-router-dom';

class RepoProfile extends React.Component {
    
    
    render() { 
        
        const repoProfileCard = {
            "padding" : "20px",
            "border" : "solid 0px black",
            "borderRadius" : "1.5rem",
            "color" : "white"
        };
        


        return (
            <Card variant="outlined" style={repoProfileCard} className='col-10 col-lg-5 mx-auto bg-dark my-3'>
                <div className='d-flex align-items-center border-bottom border-secondary pb-2'>
                    <div className='ps-3 text-start d-flex'>
                        <h3 className='p-0 m-0 fs-5 text-primary'>{this.props.repo.name}</h3>
                        <Chip label={this.props.repo.visibility} variant='outlined' className='mx-2 fw-bold text-light text-capitalize'/>
                    </div>
                </div>
                <div className='ps-2 pt-2 text-start'>
                    <div className='d-flex py-1'><PersonIcon /> <Link to={"/"+this.props.repo.owner.login} className='text-decoration-none text-light'><p className='m-0 ps-2'>{this.props.repo.owner.login}</p></Link></div>
                    {this.props.repo.description ?<div className='d-flex py-1'><DescriptionIcon /> <p className='m-0 ps-2'>{this.props.repo.description}</p></div>: "" }
                    <div className='d-flex py-1 mb-2'><CalendarTodayIcon /> <p className='m-0 ps-2'>{this.props.repo.created_at.split("T")[0]}</p></div> 
                    <div className='d-flex py-1 mb-2'>
                        <TerminalIcon /> 
                        <div className='m-0 ps-2'>
                            {Object.keys(this.props.language).length  !== 0 ? Object.keys(this.props.language).map((item, ind)=>{return <Chip label={item} key={ind} variant="outlined" className='text-light fw-bold mx-1 py-1'/>}): "No language Found"}
                        </div>
                    </div>
                </div>
                <Button variant="outlined" endIcon={<GitHubIcon />} href={this.props.repo.html_url} target='_blank' style={{"fontWeight":"bold"}}>
                    View on
                </Button>
            </Card>
        );
    }
}
 
export default RepoProfile;