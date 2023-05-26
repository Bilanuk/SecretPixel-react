import styled from "styled-components";
import { PageSection, PageLineSeparator, PageSectionName, StyledPlaylistsWrapper } from "../styled/styles";
import Playlist from "../components/Playlist";
import { useGetMyPlaylistsQuery } from "../redux/knSoundApi";
import { useSelector } from 'react-redux'
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { getUserDetails } from '../redux/user/userActions'
import Modal from 'react-modal';
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { useCreatePlaylistMutation } from "../redux/knSoundApi";
import { useGetRecentPlaylistsQuery } from "../redux/knSoundApi";

const ProfilePageWrapper = styled(PageSection)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const UserDetailSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  flex: 1;
  height: 400px;
`;

const UserDetailAvatar = styled.img`
  width: 70%;
  aspect-ratio: 1/1;
  border-radius: 5px;
`;

const UserDetailUsername = styled.h3`
  color: white;
`;

const UserDetailEmail = styled.h4`
  color: white;
`;

const NewsFeedSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 2;
  padding: 10px;
`;

const AddPlaylistButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #5f0c36;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  height: 100%;
`;

const CloseModalButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #5f0c36;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const ControlButtonsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled.button`
  width: 20%;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #5f0c36;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const SubmitInput = styled.input`
  width: 20%;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #5f0c36;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const StyledText = styled.h4`
  color: white;
`;

function ProfilePage() {
  const { userInfo } = useSelector((state) => state.user)

  const [modalIsOpen, setIsOpen] = useState(false);

  const [createPlaylist, { data, isLoading, error }] = useCreatePlaylistMutation();

  const { data: recentPlaylists, isLoading: recentPlaylistsLoading, error: recentPlaylistsError } = useGetRecentPlaylistsQuery();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDetails());
  }, [])

  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      playlist: { title: "My playlist", tracks: [{ title: "Track 1", track: {} }] },
    }
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "playlist.tracks"
    }
  );

  const onSubmit = (data) => {
    const submit_data = {
      title: data.playlist.title,
      tracks: data.playlist.tracks.map((track) => {
        return {
          title: track.title,
          track: track.track[0]
        }
      })
    }

    const new_data = new FormData();

    buildFormData(new_data, submit_data);

    createPlaylist(new_data);

    setIsOpen(false);
  };

  function buildFormData(formData, data, parentKey) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;

      formData.append(parentKey, value);
    }
  }

  return (
    <PageSection>
      <PageSectionName>My profile</PageSectionName>
      <PageLineSeparator />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '500px',
            height: '500px',
            backgroundColor: '#1f1f1f',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '20px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <ModalContent>
          <UserDetailUsername>Upload Tracks:</UserDetailUsername>
          <CloseModalButton onClick={() => setIsOpen(false)}>X</CloseModalButton>

          <input
            type="text"
            {...register("playlist.title")}
          />

          <ul>
            {fields.map((item, index) => {
              return (
                <li key={item.id}>
                  <input
                    type="text"
                    required
                    {...register(`playlist.tracks.${index}.title`)}
                  />

                  <input
                    type="file"
                    accept="audio/*"
                    required
                    {...register(`playlist.tracks.${index}.track`)}
                  />

                  <button type="button" onClick={() => remove(index)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>

          <ControlButtonsWrapper>
            <StyledButton type="button" onClick={() => append({ title: "new track" })}>
              Append
            </StyledButton>
            <SubmitInput type="submit" onClick={handleSubmit(onSubmit)} />
          </ControlButtonsWrapper>

        </ModalContent>
      </Modal>
      <ProfilePageWrapper>
        <UserDetailSection>
          <UserDetailAvatar src="/avatar.jpg" alt="image" />
          <UserDetailUsername>{userInfo?.username}</UserDetailUsername>
          <UserDetailEmail>{userInfo?.email}</UserDetailEmail>
        </UserDetailSection>
        <NewsFeedSection>
          <AddPlaylistButton onClick={() => setIsOpen(true)}>Add playlist</AddPlaylistButton>
          {userInfo?.username}
          <PageSectionName>My recent uploads</PageSectionName>
          <StyledPlaylistsWrapper>
            {recentPlaylistsLoading ? (
              <StyledText>Loading...</StyledText>
            ) : recentPlaylistsError ? (
              <StyledText>Error</StyledText>
            ) : (
              recentPlaylists?.map((playlist) => (
                <Playlist
                  key={playlist.id}
                  playlist={playlist}
                />
              ))
            )}
  


          </StyledPlaylistsWrapper>
        </NewsFeedSection>
      </ProfilePageWrapper>
    </PageSection>
  )
}

export default ProfilePage
