import Users from './components/Users'

const App = () => {

    const users = [
        {id:1,name:'Francis'},
        {id:2,name:'Steve'},
        {id:3,name:'Miles'}
    ]

    return(
        <>
           <Users users={users}/>
        </>
    )
}

export default App;