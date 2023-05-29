import { useGetRecentEncodedMessagesQuery, useGetRecnetDecodedMessagesQuery } from '../../redux/SecretPixelApi';

function RecentMessages() {
  const { data: encodedMessages, isFetching: isFetchingEncodedMessages } = useGetRecentEncodedMessagesQuery();
  const { data: decodedMessages, isFetching: isFetchingDecodedMessages } = useGetRecnetDecodedMessagesQuery();

  if (isFetchingEncodedMessages || isFetchingDecodedMessages) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Recent Encoded Messages</h3>
      <ul>
        {encodedMessages?.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
      <h3>Recent Decoded Messages</h3>
      <ul>
        {decodedMessages?.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecentMessages;