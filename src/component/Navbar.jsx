function Navbarr() {
  return (

  )

}
function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path :resolvedPath.pathname, end:true})
  return(
      <li className={isActive === to ? "active" :""} >
          <Link to = {to} {...props} >
          {children}
          </Link>
      </li>
  )
}
export default Navbarr;
