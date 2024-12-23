import React, {useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { getAlluploadVideoAPI, getCategoryAPI, updateCategoryAPI } from '../../service/allAPI'

import Videocard from './Videocard'




function View({uploadVideoResponse,setDropVideoResponse}) {
const[allVideos,setAllVideos]=useState([])
const[deleteVideoResponse,setDeleteVideoResponse]=useState([])

useEffect(()=>{
  getAlluploadVideo()
  setDeleteVideoResponse(false)
},[uploadVideoResponse,deleteVideoResponse])
 

const getAlluploadVideo= async()=>{
 const result= await getAlluploadVideoAPI()
 console.log(result);
 if (result.status==200){
  setAllVideos(result.data)
 }else{
  setAllVideos([])
  console.log("API Failed");

 }

}
const VideodragOver =(e)=>{
 e.preventDefault()

}
const videoDrop=async(e)=>{
  const {VideoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
  console.log(VideoId,categoryId);
  const {data} =await getCategoryAPI()
  console.log(data)
  const selectedCategory=data.find(item=>item.id==categoryId)
  let result=selectedCategory.allVideos.filter(Video=>Video.id!==VideoId)
  console.log(result);

  let {id,categoryName}= selectedCategory
  let newCategory = {id,categoryName,allVideos:result}
  console.log(newCategory);
  const res = await updateCategoryAPI(categoryId,newCategory)
  setDropVideoResponse(res)
  
  

}






  return (

    <div>
    <Row droppable="true" onDragOver={(e)=>VideodragOver(e)} onDrop={e=>videoDrop(e)}>
      {
        allVideos?.length>0?allVideos.map(video=>(
       <Col sm={12} md={4} lg={3}>
          <Videocard video={video}
          setDeleteVideoResponse={setDeleteVideoResponse}/>
          </Col>
        )):<p>Nothing to display</p>
        
      }
    </Row>
      
    </div>
  )
}

export default View
