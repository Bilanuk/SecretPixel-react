import { useShowImageQuery } from "../../redux/SecretPixelApi";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
`;

const StyledImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

function ImagePreview() {
  const currentImageId = useSelector((state) => state.bmpEditor.currentImageId);
  const { data, error, isLoading } = useShowImageQuery(currentImageId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <StyledImageWrapper>
      { data && <StyledImagePreview src={data?.image_url} alt="Preview" /> } 
    </StyledImageWrapper>
  );
}

export default ImagePreview;