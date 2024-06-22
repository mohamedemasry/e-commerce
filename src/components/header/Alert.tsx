
interface props {
  children:string;
}
const Alert = ({children}:props) => {
  return (
    <div className="alert">{children}</div>
  )
}

export default Alert;