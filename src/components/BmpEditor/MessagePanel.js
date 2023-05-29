import { useEncodeMessageMutation, useGetDecodedMessageMutation } from '../../redux/SecretPixelApi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdCleaningServices } from 'react-icons/md';
import styled from 'styled-components';

const MessagePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  height: 100%;
  width: 100%;
`;

const MessagePanelSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: black;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  font-weight: 600;
`;

const TextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  overflow: hidden;
  height: 100px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  border: 1px solid #ccc;
  background-color: rgba(100, 100, 100, 0);
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

const EncodedTextArea = styled(TextArea)``;

const DecodedTextArea = styled(TextArea)``;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 0 0 5px 5px;
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

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  wrap: nowrap;
`;

const StyledCleanDecodedTextButton = styled(StyledButton)`
  border-radius: 0 0 5px 0;
`;

const StyledCleanEncodedTextButton = styled(StyledButton)`
  border-radius: 0 0 5px 0;
`;

const StyledEncodeButton = styled(StyledButton)`
  border-radius: 0 0 0 5px;
`;

const StyledDecodeButton = styled(StyledButton)`
  border-radius: 0 0 0 5px;
`;

function MessagePanel() {
  const [encodeMessage, { data, error, isLoading }] =
    useEncodeMessageMutation();
  const [getDecodedMessage, { data: decodedMessageData }] = 
    useGetDecodedMessageMutation();
  const [message, setMessage] = useState('');
  const [decodedMessage, setDecodedMessage] = useState('');
  const currentImageId = useSelector((state) => state.bmpEditor.currentImageId);
  const dispatch = useDispatch();

  const handleEncodeMessage = () => {
    if (message === '') {
      return;
    }

    setMessage('');

    encodeMessage({
      id: currentImageId,
      message: message,
    });
  };

  useEffect(() => {
    if (decodedMessageData === undefined) {
      setDecodedMessage('No message found');
    }

    setDecodedMessage(decodedMessageData?.message);
  }, [decodedMessageData]);

  const handleDecodeMessage = () => {
    setDecodedMessage('');
    getDecodedMessage(currentImageId);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <MessagePanelWrapper>
      <MessagePanelSection>
        <EncodedTextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ButtonsWrapper>
          <StyledEncodeButton onClick={handleEncodeMessage}>
            Encode Message
          </StyledEncodeButton>
          <StyledCleanEncodedTextButton onClick={() => setMessage('')}>
            <MdCleaningServices />
          </StyledCleanEncodedTextButton>
        </ButtonsWrapper>
      </MessagePanelSection>
      <MessagePanelSection>
        <DecodedTextArea value={decodedMessageData?.message ? decodedMessageData?.message : "Can't find message"} readOnly />
        <ButtonsWrapper>
          <StyledDecodeButton onClick={handleDecodeMessage}>
            Decode Message
          </StyledDecodeButton>
          <StyledCleanDecodedTextButton onClick={() => setDecodedMessage('')}>
            <MdCleaningServices />
          </StyledCleanDecodedTextButton>
        </ButtonsWrapper>
      </MessagePanelSection>
    </MessagePanelWrapper>
  );
}

export default MessagePanel;
