interface props{
  placeholder:string;
  
}

const Input = ({placeholder}:props) => {
  return (
    <><input type="text" placeholder={placeholder} className="input"/></>
  )
}

export default Input