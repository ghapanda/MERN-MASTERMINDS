
import React, {useState, useEffect} from "react";


import { Link } from "react-router-dom";



class AdminPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            admins:[
                {id:1,name:"temp name 1"},
                {id:2,name:"temp name 2"},
            ],
            loading :false,
            error : null,
        }
        this.deleteuser = this.deleteuser.bind(this);
    };


    /*componentDidMount(){
        this.fetchAdmins();
    }


    fetchAdmins(){
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

    deleteuser = (id)=>{
        this.setState(
            {
                admins: this.state.admins.filter((user)=>user.id!==id),
                loading:false,
                error:null
            }
        )    
    }
    render(){
        const {admins, loading, error} = this.state;
        /*
                if(loading){
                    return <>loading..</>
                }
        */
                if(error){
                    return (
                        <>Error:{error}</>
                    )
                }
        return(
            <>
                <h1>Admin member page</h1>
                <Link to="/addnewadmin">Add new admin</Link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((user) => (
                        <tr key={user.id}>
                        <td>{user.name}</td>
                        <td><button onClick={ () => {this.deleteuser(user.id)}}>Delete</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/admin-shedule">shedule page</Link>
            </>
        )
    };
};


export default AdminPage