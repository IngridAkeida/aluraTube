import { useState } from "react";
import Menu from "../src/components/Menu";
import StyledVideo from './styled_component';
import VideoPlayer from "../src/components/videoPlayer";


const Video = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <StyledVideo>
            <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
            <VideoPlayer />
        </StyledVideo>
    )
}

export default Video;