function Square({children}) {
  return (
    <div className="square">
      {children}
    </div>
  )
}

export default function Holder() {
  return (
    <Square>
     <h1> Hello React </h1>
    </Square>
  )
}
