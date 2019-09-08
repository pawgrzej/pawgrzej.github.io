import React, {Component} from 'react';



class Userslist extends Component {

    // constructor(props) {
    //     super(props);


     
    // }

    createLi = (lista) => {
            // return <li>{lista}</li>
             return <li key = {lista.key}
             onClick ={()=>this.deleteUser(lista)} > 
             {lista.name} a klucz to {lista.key}
             </li>

        }
            deleteUser =(lista) => {
                this.props.deleteUsersProps (lista.key)
            }

        render() {
            // let listMain  = this.props.mainFristProps.map(this.createLi)
            let Userslist = this.props.mainFristProps
            let listMain = Userslist.map(this.createLi)
            return (
                <ul>
                {listMain}
            </ul>
            )
        }
}




export  default Userslist 