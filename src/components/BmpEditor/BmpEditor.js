import ImageList from './ImageList';
import EditPanel from './EditPanel';
import ImagePreview from './ImagePreview';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setModalIsOpen } from '../../redux/bmpEditor/bmpEditorSlice';
import { useForm } from 'react-hook-form';
import { useUploadImageMutation } from '../../redux/SecretPixelApi';

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

const StyledFileInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  overflow: hidden;
  height: 40px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  border: 1px solid #ccc;
  background-color: rgba(100, 100, 100, 0.5);
  color: white;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  font-weight: 600;
  resize: none;

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const StyledTextInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  overflow: hidden;
  height: 40px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  border: 1px solid #ccc;
  background-color: rgba(100, 100, 100, 0.5);
  color: white;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  font-weight: 600;
  resize: none;

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const StyledSubmit = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  overflow: hidden;
  height: 40px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  border: 1px solid #ccc;
  background-color: rgba(100, 100, 100, 0.5);
  color: white;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  font-weight: 600;
  resize: none;

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const ModalContent = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

function BmpEditor() {
  const dispatch = useDispatch();
  const { currentImageId, modalIsOpen } = useSelector(
    (state) => state.bmpEditor
  );

  const { register, handleSubmit, errors } = useForm();
  const [uploadImage] = useUploadImageMutation();

  const onSubmit = (data) => {
    const submit_data = {
      image: {
        name: data?.name,
        file: data?.file[0],
      },
    };

    const formData = new FormData();

    buildFormData(formData, submit_data);
    uploadImage(formData);
    dispatch(setModalIsOpen(!modalIsOpen));
  };

  function buildFormData(formData, data, parentKey) {
    if (
      data &&
      typeof data === 'object' &&
      !(data instanceof Date) &&
      !(data instanceof File)
    ) {
      Object.keys(data).forEach((key) => {
        buildFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key
        );
      });
    } else {
      const value = data == null ? '' : data;

      formData.append(parentKey, value);
    }
  }

  return (
    <BmpEditorWrapper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          dispatch(setModalIsOpen(!modalIsOpen));
        }}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            minWidth: '500px',
            width: '40%',
          },
        }}
      >
        <ModalContent>
          <h1>Upload image</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <StyledFileInput
              type="file"
              accept=".bmp"
              required
              {...register(`file`)}
            />
            <StyledTextInput type="text" required {...register(`name`)} />
            {errors?.image && <span>This field is required</span>}
            <StyledSubmit type="submit" />
          </form>
        </ModalContent>
      </Modal>

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
