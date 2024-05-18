
import React, {useState, useEffect} from "react";
import axios from "axios";

import { Link } from "react-router-dom";


class UsersPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[
            { id: 1, name: 'Alice', style: "hiphop" },
            { id: 2, name: 'Bob', style: "hiphop" },
            { id: 3, name: 'Charlie', style: "hiphop" }],
            loading :false,
            error : null,
        }
    };

    /*componentDidMount(){
        this.fetchUsers();
    }

    fetchUsers(){
        this.setState({ loading: true });
        axios
          .get('end point to the api') 
          .then((response) => {
            this.setState({ users: response.data, loading: false });
          })
          .catch((error) => {
            this.setState({ error: error.message, loading: false });
          });
    }*/

    render(){
        
        const {users, loading, error} = this.state;


        if(loading){
            return <>loading..</>
        }

        if(error){
            return (
                <>Error:{error}</>
            )
        }

        return (
            <>
            <Link to="/" >home page</Link>
            <Link to="/shedule" >shedule page</Link>

              <h1>Users</h1>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Dance Style</th>
                    <th>Video</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td><Link to={`/profile/${user.id}`}>{user.name}</Link></td>
                      <td>{user.style}</td>
                      <td>
                        <video width="320" height="240" controls>
                          <source src={user.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          );
    };
};


export default UsersPage


