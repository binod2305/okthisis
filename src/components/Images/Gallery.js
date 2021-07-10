import React,{ useEffect, useState } from 'react'
import { Image } from './Image';
import { Api, getSearchedImages } from '../Api/Api';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import './styles1.css'

export const Gallery = ({query}) =>{
    const [imgList, setImgList] = useState([]);
    useEffect(() => {
        Api().then( (data) => {
            console.log(data);
            // setImgList(data);
        }); 
        
    },[])

    useEffect( async () => {
        if(query.trim() === " " ){
            return;
        }
        const data = await getSearchedImages(query);
        setImgList(data);  
        console.log(); 
    },[query]);


    return(
        <center>
        <div>
            {imgList.length === 0 ? <h2> No images found </h2> : null}
            <Masonry className="col">
            {imgList.map( (img) => {  
                return(
                    <Image src={img.urls.thumb} key ={img.id} ></Image>
                );
            })}
            </Masonry>

        </div>
        </center>
    )
}

export default Gallery;