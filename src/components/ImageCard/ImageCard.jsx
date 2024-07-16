import css from "./ImageCard.module.css"
const ImageCard = ({ foto }) => {
    return (
        <div>
            <img src={foto.urls.small} alt={foto.alt_description} className={css.foto } />
</div>

    )
}
export default ImageCard