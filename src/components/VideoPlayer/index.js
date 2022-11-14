import { useRouter } from "next/router";
import StyledVideoPlayer from './styled_component'

const VideoPlayer = () => {
    const router = useRouter();
    return (
        <StyledVideoPlayer>
            <div>
                <iframe
                width="896"
                height="504"
                src={`https://www.youtube.com/embed/${router.query.v}`}
                title="Youtube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
                <h2 className="title">{router.query.title}</h2>
            </div>
            <a className="backButton" href="/">Voltar á página inicial</a>
        </StyledVideoPlayer>
    )
}

export default VideoPlayer;