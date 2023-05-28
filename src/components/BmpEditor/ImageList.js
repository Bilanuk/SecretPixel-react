import { useDispatch, useSelector } from 'react-redux';
import { useGetImagesQuery } from '../../redux/SecretPixelApi';
import styled from 'styled-components';

import { MdUpload } from 'react-icons/md';

import ImageListItem from './ImageListItem';

const ImagesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AddNewImageButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #eee;
  color: black;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: transparent;
    color: white;
  }
`;

function ImageList() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetImagesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <ImagesListWrapper>
      <AddNewImageButton>
        <MdUpload />
      </AddNewImageButton>
      {data?.map((item) => (
        <ImageListItem key={item.id} id={item.id} image_url={item.image_url} />
      ))}
    </ImagesListWrapper>
  );
}

export default ImageList;
