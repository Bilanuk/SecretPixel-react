import { useDispatch } from 'react-redux';
import { setCurrentImage } from '../../redux/imageList/imageListSlice';
import styled from 'styled-components';

const StyledListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: white;
  width: 100%;

  &:hover {
    background-color: #eee;
    color: black;
  }
`;

const StyledListItemName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
`;

const StyledListItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

function ImageListItem(props) {
  const dispatch = useDispatch();

  function ImageItemClicked() {
    dispatch(setCurrentImage(props.id));
  }

  return (
    <StyledListItem onClick={ImageItemClicked}>
      <StyledListItemImage src={props.image_url} />
      <StyledListItemName>Test name</StyledListItemName>
    </StyledListItem>
  );
}

export default ImageListItem;
