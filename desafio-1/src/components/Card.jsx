const Card = ({title,imagen, description}) => {
  return (
    <div className="images">
        <img src={imagen} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card



