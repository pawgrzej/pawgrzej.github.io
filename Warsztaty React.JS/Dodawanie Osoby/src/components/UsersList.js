import React, {Component} from 'react';

class UsersList extends Component {
   constructor(props) {
      super(props);
   }


   render() {
      const usersList = this.props.usersList;
      let users = usersList.map((user) => {
         return (<li className='userslist__el' key={user.id}>{user.name}</li>);
      })
      console.log(usersList);
      return (
         <ul className='userslist'>
            {users}
         </ul>
      )
   }
}

export default UsersList;