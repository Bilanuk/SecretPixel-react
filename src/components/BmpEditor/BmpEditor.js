import ImageList from './ImageList';
import EditPanel from './EditPanel';
import ImagePreview from './ImagePreview';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const BmpEditorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 200px;
  max-width: 50%;
  flex: 1;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const MiddlePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
  flex: 3;
  min-width: 450px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  height: 350px;
  overflow: hidden;
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
  flex: 3;
  min-width: 450px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  height: 350px;
  overflow: hidden;
`;

function BmpEditor() {
  const currentImageId = useSelector((state) => state.bmpEditor.currentImageId);

  return (
    <BmpEditorWrapper>
      <LeftPanel>
        <ImageList />
      </LeftPanel>
      {currentImageId ? (
        <>
          <MiddlePanel>
            <EditPanel />
          </MiddlePanel>
          <RightPanel>
            <ImagePreview />
          </RightPanel>
        </>
      ) : (
        <MiddlePanel>
          <h1>Click on an image to edit it!</h1>
        </MiddlePanel>
      )}
    </BmpEditorWrapper>
  );
}

export default BmpEditor;
