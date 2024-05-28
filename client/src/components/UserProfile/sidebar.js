import "./siderbar.css"


const Sidebar = () => {
    // temp users 

    const users = {

    }
    return (
      <div className="sidebar">
        <h2>User List</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Sidebar

