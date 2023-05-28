import { useSelector, useDispatch } from "react-redux";
import { useShowImageQuery } from "../../redux/SecretPixelApi";

function EditPanel() {
  const dispatch = useDispatch();
  const currentImageId = useSelector((state) => state.bmpEditor.currentImageId);
  const { data, error, isLoading } = useShowImageQuery(currentImageId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <div>
      <p>Image id: {data?.id}</p>
    </div>
  );
}

export default EditPanel;