import styled from 'styled-components';
import {
  PageSection,
  PageLineSeparator,
  PageSectionName,
} from '../styled/styles';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserDetails } from '../redux/user/userActions';

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

const RecentActivitySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 2;
  padding: 10px;
`;

function ProfilePage() {
  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  return (
    <PageSection>
      <PageSectionName>My profile</PageSectionName>
      <PageLineSeparator />
      <ProfilePageWrapper>
        <UserDetailSection>
          <UserDetailAvatar src='/avatar.png' alt="image" />
          <UserDetailUsername>{userInfo?.username}</UserDetailUsername>
          <UserDetailEmail>{userInfo?.email}</UserDetailEmail>
        </UserDetailSection>
        <RecentActivitySection>
          {userInfo?.username}
          <PageSectionName>My recent activity</PageSectionName>
        </RecentActivitySection>
      </ProfilePageWrapper>
    </PageSection>
  );
}

export default ProfilePage;
