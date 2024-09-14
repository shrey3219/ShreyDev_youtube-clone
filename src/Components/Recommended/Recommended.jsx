import React ,{useState,useEffect} from "react";
import "./Recommended.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import API_KEY from "../../data";
import { Valueconverter } from "../../Valueconverter";
import { Link } from "react-router-dom";

const Recommended = ({categoryId}) => {
   
  const [apiData,setApiData] =useState([]);
  const fetchData = async() =>{
   const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=47&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));
  }
  useEffect(()=>{
    fetchData(); 
  },[])


  return (
    <div className="recommended">
      {apiData.map((items,index)=>{
        return (
          <Link to={`/video/${items.snippet.categoryId}/${items.id}`} key={index} className="side-video-list">
          <img src={items.snippet.thumbnails.medium.url} alt="" />
          <div className="vid-info">
            <h4>{items.snippet.title}</h4>
            <p>{items.snippet.channelTitle}</p>
            <p>{Valueconverter(items.statistics.viewCount)} views</p>
          </div>
          </Link>
        )
      })} 
    </div>
  );
};

export default Recommended;
