const GifItem = ({title , url , id}) => {
    return ( 
        <div className="gif-card">
            <img src={url} alt={title}/>
            <h2>{title}</h2>
        </div>
     );
}
 
export default GifItem;