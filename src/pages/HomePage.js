import { PageLineSeparator, PageSectionName, PageSection } from "../styled/styles"
import { useGetRecommendedPlaylistsQuery } from "../redux/knSoundApi"
import Playlist from "../components/Playlist";
import { StyledPlaylistsWrapper } from "../styled/styles";
import styled from "styled-components";

const StyledText = styled.h4`
  color: white;
`;

function HomePage() {
  const { data: recommendedPlaylists, isLoading: recommendedPlaylistsLoading, error: recommendedPlaylistsError } = useGetRecommendedPlaylistsQuery()

  return (
    <PageSection>
      <PageSectionName>Recommended for you </PageSectionName>
      <PageLineSeparator />

      <StyledPlaylistsWrapper>
        {recommendedPlaylistsLoading && <StyledText>Loading...</StyledText>}
        {recommendedPlaylistsError && <StyledText>Error</StyledText>}
        {recommendedPlaylists && recommendedPlaylists.map((playlist) => (
          <Playlist key={playlist.id} playlist={playlist} />
        ))}
      </StyledPlaylistsWrapper>


    </PageSection>
  )
}

export default HomePage
