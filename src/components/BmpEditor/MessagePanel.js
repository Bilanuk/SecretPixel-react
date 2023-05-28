import { useEncodeMessageMutation } from '../../redux/SecretPixelApi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MessagePanel() {
  const [encodeMessage, { data, error, isLoading }] = useEncodeMessageMutation();
  const [message, setMessage] = useState('');
  const currentImageId = useSelector((state) => state.bmpEditor.currentImageId);
  const dispatch = useDispatch();

  const handleEncodeMessage = () => {
    encodeMessage({
      id: currentImageId,
      message: message,
    });
  };

  return (
    <div>
      <h1>Message Panel</h1>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleEncodeMessage}>Encode Message</button>
    </div>
  );
}

export default MessagePanel;
