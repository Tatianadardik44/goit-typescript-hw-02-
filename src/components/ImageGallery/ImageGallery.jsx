import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"
const ImageGallery = ({fotoPost, onImageClick}) => {
    return (
        <div> 
            <ul className={css.list}>
         { fotoPost.map((foto) => {
           return (
             <li key={foto.id} onClick={() => onImageClick(foto) }><ImageCard foto={ foto} /></li>
            )
          })}
        </ul>
        </div>
    )
}
export default ImageGallery