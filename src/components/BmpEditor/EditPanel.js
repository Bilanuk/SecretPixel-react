import { useSelector, useDispatch } from "react-redux";
import { useShowImageQuery } from "../../redux/SecretPixelApi";

function EditPanel() {
  const dispatch = useDispatch();
  const currentImage = useSelector((state) => state.imageList.currentImage);
  const { data, error, isLoading } = useShowImageQuery(currentImage);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <img src={data.image_url} alt="currentImage" />
  );
}

export default EditPanel;