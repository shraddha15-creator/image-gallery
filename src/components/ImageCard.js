import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    
    return (
        <div className="max-w-sm rounded bg-gray-400 p-3 overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="pic" className="w-full shadow-md" />
         <div className="px-6 py-4">
           <div className="font-bold text-gray-800 text-xl mb-2">
             Photo By {image.user}
           </div>
           <ui>
             <li>
               <strong>Views: </strong>
                    {image.views}
             </li>
             <li>
               <strong>Downloads: </strong>
                    {image.downloads}
             </li>
             <li>
               <strong>Likes: </strong>
                    {image.likes}
             </li>
           </ui>
         </div>
         <div className="px-6 py-4 space-x-2 space-y-2 ">
           {tags.map((tag,index) => (<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
               #{tag}
           </span>
           ))}
           
         </div>
       </div>
    )
}

export default ImageCard;   
