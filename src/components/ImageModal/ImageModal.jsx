import Modal from 'react-modal';
import css from "./ImageModal.module.css"
Modal.setAppElement('#root');
const ImageModal = ({ isOpen, onRequestClose, imageUrl, likes, author}) => {
    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          className={css.imageModal}
          overlayClassName={css.imageModalOverlay}>
            <div className={css.modalContent }>
                <img src={imageUrl} alt='hello' className={css.imgModal} />
                <div className={css.futer}> 
                    <span>Author:{ author}</span>
                    <span>Likes:{likes}</span>
                   
                </div>
      </div>
    </Modal>
)
}
export default ImageModal