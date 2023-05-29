import { useSelector, useDispatch } from 'react-redux';
import { useShowImageQuery } from '../../redux/SecretPixelApi';
import { setCurrentMode, ModeEnum } from '../../redux/bmpEditor/bmpEditorSlice';
import MessagePanel from './MessagePanel';
import BitMapPanel from './BitMapPanel';
import styled from 'styled-components';

const EditPanelWrapper = styled.div`
  padding: 5px;
  width: 100%;
  height: 100%;
`;

const EditPanelNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
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
  font-size: 20px;
  font-weight: 600;

  &:hover {
    background-color: transparent;
    color: white;
  }
`;

const StyledEditPanelContent = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: none;
  color: black;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  font-weight: 600;
  margin-top: 5px;
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
    <EditPanelWrapper>
      <EditPanelNavbar>
        <ModeSwitchButton
          onClick={() => ModeSwitchButtonClicked(ModeEnum.MESSAGE)}
          style={{
            backgroundColor:
              currentMode == ModeEnum.MESSAGE ? '#eee' : 'transparent',
            color: currentMode == ModeEnum.MESSAGE ? 'black' : 'white',
          }}
        >
          Message
        </ModeSwitchButton>
        <ModeSwitchButton
          onClick={() => ModeSwitchButtonClicked(ModeEnum.EDIT)}
          style={{
            backgroundColor:
              currentMode == ModeEnum.EDIT ? '#eee' : 'transparent',
            color: currentMode == ModeEnum.EDIT ? 'black' : 'white',
          }}
        >
          Bitmap
        </ModeSwitchButton>
      </EditPanelNavbar>
      <StyledEditPanelContent>
        {currentMode == ModeEnum.MESSAGE && <MessagePanel />}
        {currentMode == ModeEnum.EDIT && <BitMapPanel />}
      </StyledEditPanelContent>
    </EditPanelWrapper>
  );
}

export default EditPanel;
