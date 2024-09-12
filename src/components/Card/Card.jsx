import React from 'react';
import './Card.css'

const Card = ({data}) => {
  return (
    <div className='card'>
     <div class="container">
      <div class="content">
       <div class="task-id">
        {data.id}
       </div>
       <div class="task-title">
        {data.title}
       </div>
       <div class="label">
        <div class="label-content">
         <i class="fas fa-exclamation"></i>
         <span>
            {
                data.tag.map((tg,i) =>(
                    <div className="" key={i}>
                        <div className=""></div>
                        <div className="">
                            {tg}
                        </div>
                    </div>
                ))
            }
         </span>
        </div>
       </div>
      </div>
      <div class="profile">
       <img alt="Profile picture of the user" class="profile-img" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-tL7JPte57wJRTOVuQX6h2iud.png?st=2024-09-12T16%3A18%3A29Z&amp;se=2024-09-12T18%3A18%3A29Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-12T06%3A33%3A09Z&amp;ske=2024-09-13T06%3A33%3A09Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=N7snJ4jwQ7Y1IBUh79LLQ4F9o2%2BGuGm0bIt5tCNa0mg%3D" />
      </div>
     </div>
    </div>
   
  )
}

export default Card