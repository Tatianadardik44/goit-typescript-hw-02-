import { useEffect, useState } from 'react'
import { CirclesWithBar } from "react-loader-spinner";
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import {fetchFoto} from '../Gallery/gallery'
import ImageGallery from '../ImageGallery/ImageGallery';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../errorMessage/ErrorMessage';


function App() {
  const [fotoPost, setFotoPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    const fetchFotos = async () => {
     try {
      setLoading(true);
      
      setError(false);
       const data = await fetchFoto(query, page)
    
        setFotoPost((prevFotos) => [...prevFotos, ...data])
     
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
    }
    query && fetchFotos()
    
},[page, query])
  const handleSearchSubmit = async (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setFotoPost([]);
  };
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }
  const handleImageClick = (image) => {
      console.log('Selected Image:', image);
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };
  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit}/>
      {loading && <CirclesWithBar />}
      {error && <ErrorMessage />}

      {fotoPost.length > 0 && <ImageGallery fotoPost={fotoPost} onImageClick={handleImageClick}/>}
      {fotoPost.length > 0 &&  <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} imageUrl={selectedImage.urls?.regular} likes={selectedImage.likes} author={selectedImage.user?.name}

         />
    </>
  )
}

export default App
