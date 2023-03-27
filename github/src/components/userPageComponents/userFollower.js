import React from 'react';

class UserFollowers extends React.Component {
    state = {  } 
    render() { 
        let followersJSX = this.props.followers.map((item, index)=>{
            return <a className="d-flex text-decoration-none text-light pb-2 px-3 pt-3 align-items-center border border-1 border-secondary" href={item.login} key={index}>
                <img className="search-result-img" src={item.avatar_url} alt={item.login}></img>
                <div className="search-result-name">{item.login}</div>
            </a>;
        })

        if(followersJSX.length === 0) {
            followersJSX = <div style={{"textAlign":"center",padding:20}}> No Follower !!!</div>;
        }
        return (
            <div className='row pt-5'>
                {followersJSX}
            </div>        
        );
    }
}
 
export default UserFollowers;