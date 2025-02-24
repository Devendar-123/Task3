import Child from "./child"
const Parent1 = ()=>{
    const images = [
        {images:"image2.jpg",id:1},
        {images:"image3.jpg",id:2},
        {images:"image4.jpg",id:3},
        {images:"image5.jpg",id:4},
        {images:"image6.jpg",id:5},
        {images:"image7.jpg",id:6},
        {images:"image 1.jpg",id:7},
        {images:"Bridges.jpg",id:8},
        {images:"Taj Mahal.jpg",id:9},
    ]
        const videos =[
        {videos:"Video1.mp4",id:10},
        {videos:"Video2.mp4",id:11},
    ]

    const audios=[
        {audios:"Audio 1.mp3",id:12},
        {audios:"Audio 2.mp3",id:13},
    ]
        
        
        
    
    return(
        <div className="parent">
            <Child images={images}
                audios={audios}
                videos={videos}
            />
        </div>
    );
}
export default Parent1