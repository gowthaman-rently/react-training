import React from 'react';
import { Card} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

class UserRepos extends React.Component {
    
    render() { 
        const repoStyle = {
            "height" : "120px"
        }

        let reposJSX = this.props.repos.map((repo, index)=>{
            return <Card variant="outlined" className='col-11 col-md-5 m-auto mt-4 border-light bg-dark text-light px-3 py-2 rounded-4' key={index} style={repoStyle}>
                <h5 className='text-primary border-bottom border-secondary pb-2'>{repo.name}</h5>
                <p className='mb-0'>{repo.description}</p>
                <small className='mb-1'><CalendarTodayIcon fontSize={"10"}/> {repo.created_at.split("T")[0]}</small>
            </Card>
        })

        if(reposJSX.length === 0) {
            reposJSX = <div style={{"textAlign":"center",padding:20}}> No Repositories Found !!!</div>;
        }
        return (
            <div className='positin-relative'>
                <div className='row pt-5'>
                    {reposJSX}
                </div>
            </div>
        );
    }
}
 
export default UserRepos;