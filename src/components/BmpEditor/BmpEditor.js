import ImageList from './ImageList';
import EditPanel from './EditPanel';
import styled from 'styled-components';

const BmpEditorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  flex: 1;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  flex: 3;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: 350px;
`;

function BmpEditor() {
  return (
    <BmpEditorWrapper>
      <LeftPanel>
        <ImageList />
      </LeftPanel>
      <RightPanel>
        <EditPanel />
      </RightPanel>
    </BmpEditorWrapper>
  );
}

export default BmpEditor;
