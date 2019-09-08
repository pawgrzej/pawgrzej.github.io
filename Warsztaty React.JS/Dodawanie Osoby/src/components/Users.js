import React, {Component} from 'react';
import UsersList from './UsersList';

class Users extends Component {
   constructor(props) {
      super(props);

      this.state = {
         usersList: []
      }
   }

   addUser = (ev) => {
      ev.preventDefault();
      const newUser = {
         id: Date.now(),
         name: this.refs.name.value
      }

      this.setState((prevState) => {
         return {
            usersList: [...prevState.usersList, newUser]
         }
      });

      this.refs.name.value = '';

   }

   render() {
      return (
         <div className='users'>
            <form onSubmit={this.addUser}>
               <input ref='name' />
               <button>Dddaj personę</button>
            </form>
            <UsersList usersList={this.state.usersList} />
         </div>
      );
   }
}

export default Users;