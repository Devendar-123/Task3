import "./child.css"
const Child = (props)=>{
    return(
        <div>
            
            <div className="child">
            {props.images.map((image,id)=>(
                <img src={`/Images/${image.images}`} alt={id} />
            ))}
            </div>

            
            <div className="video">
                {props.videos.map((video)=>(
                    <video src={`/Images/${video.videos}`} controls>Video</video>
                ))}
            </div>

            <div className="audio">
                {props.audios.map((audio)=>(
                    <audio src={`/Images/${audio.audios}`} controls>Audio</audio>
                ))}
            </div>
        </div>
    );
}
export default Child