import { useSelector, useDispatch } from 'react-redux';
import { useShowImageQuery } from '../../redux/SecretPixelApi';
import { setCurrentMode, ModeEnum } from '../../redux/bmpEditor/bmpEditorSlice';
import MessagePanel from './MessagePanel';
import BitMapPanel from './BitMapPanel';
import styled from 'styled-components';

const EditPanelNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  margin: 5px;
`;

const ModeSwitchButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: 50%;
  border: none;
  border-radius: 5px;
  background-color: #eee;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 5px 5px 5px 5px;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    background-color: transparent;
    color: white;
  }
`;

function EditPanel() {
  const dispatch = useDispatch();
  const currentImageId = useSelector((state) => state.bmpEditor.currentImageId);
  const currentMode = useSelector((state) => state.bmpEditor.currentMode);
  const { data, error, isLoading } = useShowImageQuery(currentImageId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  function ModeSwitchButtonClicked(modeName) {
    dispatch(setCurrentMode(modeName));
  }

  return (
    <>
      <EditPanelNavbar>
        <ModeSwitchButton onClick={() => ModeSwitchButtonClicked(ModeEnum.MESSAGE)}>Message</ModeSwitchButton>
        <ModeSwitchButton onClick={() => ModeSwitchButtonClicked(ModeEnum.EDIT)}>Bitmap</ModeSwitchButton>
      </EditPanelNavbar>
      <div>
        { currentMode == ModeEnum.MESSAGE && <MessagePanel /> }
        { currentMode == ModeEnum.EDIT && <BitMapPanel /> }
      </div>
    </>
  );
}

export default EditPanel;
