import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { 
    setIsPlaying,
    setDuration,
    setTrackProgress,
    setTrackIndex,
    setTrack,
    setIsPlaylistShown
} from '../../redux/player/playerSlice';
import TrackCardPlaylist from "./TrackCardPlaylist";

const TrackCardWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 260px;
    height: 100%;
    background-color: white;
    padding: 0 5px 0 0;
    margin: 0;
    gap: 5px;
    user-select: none;
`;

const TrackImageWrapper = styled.div`
    aspect-ratio : 1 / 1;
    height: 100%;
`;

const TrackTitleWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

`;

const TrackTitle = styled.h3`
    position: absolute;
    text-overflow: ellipsis;
    left: 0;
    top: 10px;
    color: black;
`;

const TrackAuthor = styled.h4`
    position: absolute;
    bottom: 5px;
    color: gray;
`;

 const TrackImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
`;

export default function TrackCard() {
    const {
        isPlaying: currentIsPlaying,
        volume: currentVolume,
        duration: currentDuration,
        trackProgress: currentTrackProgress,
        trackIndex: currentTrackIndex,
        isPlaylistShown,
        track: {
            id: track_id,
            title: track_title,
            image_url: track_image,
            track_url: track_url,
            author: {
                id: author_id,
                username: author_name
             } = {
                id: 0,
                username: "Unknown",
            },
        }
    } = useSelector((state) => state.player)

    const {
        id: playlsit_id,
        title: playlist_title,
        image_url: playlist_image,
        tracks: playlist_tracks
    } = useSelector((state) => state.playlist)

    const dispatch = useDispatch()





    const truncateTitle = (title) => {
        const truncateLength = 18;

        if (title?.length > truncateLength) {
            return title.slice(0, truncateLength) + '...';
        }
        return title;
    }

    const handleTrackClick = () => {
        dispatch(setIsPlaylistShown(!isPlaylistShown))
    }

    return(
        <TrackCardWrapper onClick={() => handleTrackClick()}>
            <TrackImageWrapper>
                <TrackImage src={track_image} />
            </TrackImageWrapper>
            <TrackTitleWrapper>
                <TrackTitle>{truncateTitle(track_title)}</TrackTitle>
                <TrackAuthor>{author_name}</TrackAuthor>
            </TrackTitleWrapper>
            { true && <TrackCardPlaylist /> }
        </TrackCardWrapper>
    )
}
