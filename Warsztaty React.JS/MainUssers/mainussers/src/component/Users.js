import React, {Component} from 'react';
import './users.css'
import Userslist from './Userslist';



class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: []
        }
    }


    addUser =(a) =>  {

        a.preventDefault()
        let newUser= {
            name: this._inputName.value,
            key: Date.now()
        }

        this.setState ((preveState) => {
          return {
              tab: preveState.tab.concat(newUser)   
    }
})
this._inputName.value = ''

    }

    delateUser =(key) => {
        let filtresUsers = this.state.tab.filter(user => user.key !== key)
              this.setState (() => {
               return {
                tab: filtresUsers 
             }
         }) 
    }

    





render() {
    return (
        <div>
            <form onSubmit={this.addUser}>
                <input 
                ref = {(data) => (this._inputName = data)} 
                type="text"
                placeholder="Wpisz imie"/>
                <button> Add Users </button>
                </form>
        <Userslist mainFristProps = {this.state.tab} 
        deleteUsersProps = { this.delateUser} />
        </div>
    )
}

    

}

export default Users