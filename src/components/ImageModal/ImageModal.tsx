import Modal from "react-modal";
import { SelectedImage } from "../../types";

const customStyles = {
  overlay: { backgroundColor: "#323232", zIndex: "998" },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "999",
  },
};

Modal.setAppElement("#root");

type Props = {
  image: SelectedImage | null;
  isOpen: boolean;
  onClose: () => void;
};

const ImageModal = ({ isOpen, onClose, image }: Props) => {
  if (!image) {
    return null;
  }

  const { created, likes, description, user, url } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>
        <img src={url} alt={description} />
        <h2>{description}</h2>
        <p>Likes: {likes}</p>
        <p>Uploaded by: {user}</p>
        <p>Created: {created}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
