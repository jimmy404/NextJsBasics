
const Users = (props) => {
  console.log(props)
  return (
    <ul className="list-group">
      {
        props.users.map(user => (
          <li className="list-group-item list-group-item-action" key={user.id}>
            <h5>{user.first_name} {user.last_name}</h5>
            <p>Email: {user.email}</p>
          </li>
        ))
      }
    </ul>
  );
};

export default Users;
