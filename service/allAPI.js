import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"



//upload a video

export const uploadVideoAPI= async (video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}

//get all video
export const getAlluploadVideoAPI= async ()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}

//get a video
export const getAVideoAPI= async (id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}


//delete a video

export const deleteVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}

//add history
export const addHistoryAPI = async (video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

// get history
export const getHistoryAPI = async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

//delete A history
export const deleteHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}

//add category
export const addCategoryAPI = async (category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}



//get category
export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}


//delete category
export const deleteCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

//update category
export const updateCategoryAPI = async (id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}
