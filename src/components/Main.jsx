import Contacts from "./Contacts";
import Counter from "./Counter";
import Posts from "./Posts";

const Main = () => {
  return (
    <div>
        <Counter/>
        <Posts/>
        <Contacts 
            name={"Jolita"}
            email={"jolita@gmail.com"}
            age={18}/>
    </div>
  )
}

export default Main