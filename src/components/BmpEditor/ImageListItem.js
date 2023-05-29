import { useDispatch } from 'react-redux';
import { setCurrentImageId } from '../../redux/bmpEditor/bmpEditorSlice';
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
    dispatch(setCurrentImageId(props.id));
  }

  return (
    <StyledListItem onClick={ImageItemClicked}>
      <StyledListItemImage src={props.image_url} />
      <StyledListItemName>{props?.name}</StyledListItemName>
    </StyledListItem>
  );
}

export default ImageListItem;
