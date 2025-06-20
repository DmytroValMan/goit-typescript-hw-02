import { useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import ImageModal from "./ImageModal/ImageModal";
import { Image, SelectedImage } from "../types";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [clicks, setclicks] = useState(1);
  const [request, setRequest] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (newRequest: string, isNewRequest = false) => {
    setError("");
    setRequest(newRequest);

    if (isNewRequest) {
      setImages([]);
      setclicks(1);
    }

    if (!newRequest) {
      setImages([]);
      return;
    } else {
      const accessKey = "HQG4djIhGZUrD70kI9DGgoTyajMzR2prd6xK5ZdenKE";
      axios.defaults.baseURL = "https://api.unsplash.com/";

      const pageNumber = isNewRequest ? 1 : clicks;
      const searchParams = {
        query: newRequest,
        per_page: 12,
        orientation: "landscape",
        page: pageNumber,
      };

      try {
        setLoading(true);
        const response = await axios.get<{ results: Image[] }>(
          "/search/photos",
          {
            params: searchParams,
            headers: { Authorization: `Client-ID ${accessKey}` },
          }
        );
        isNewRequest
          ? setImages(response.data.results)
          : setImages((prevImages) => [
              ...prevImages,
              ...response.data.results,
            ]);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  console.log(images);

  const handleClicks = () => {
    setclicks(clicks + 1);
    handleSearch(request);
  };

  const openModal = (image: Image) => {
    setSelectedImage({
      created: image.created_at,
      likes: image.likes,
      description: image.description,
      user: image.user.name,
      url: image.urls.regular,
    });
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {error ? (
        <ErrorMessage errorText={error} />
      ) : (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !error && <LoadMoreBtn onClick={handleClicks} />}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
