import { useContext, use } from "react";
import { MyContext } from '../context'

const UserItem = () => {
    const context = useContext(MyContext) 
    return(
        <>
        { context.activeState ?
            context.users.map((user)=>(
                <div key={user.id}>
                    <div>Name:{user.name}</div>
                </div>
            ))
        :null}
        <button onClick={context.setActive}>Toggle it !!</button>
        <hr/>
        <button onClick={()=>context.addUser('Ron')}>Add user</button>
        <hr/>
        <button onClick={()=>context.setUsers(
            prevState=>(
                [
                    ...prevState,
                    {id:4,name:'Caroline'}
                ]
            )
        )}>ADD user directly</button>
        </>
    )
}

export default UserItem;