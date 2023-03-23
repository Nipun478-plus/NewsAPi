import React, { use } from 'react'
export default function newsCard(props) {
  return (
      <div className="card" style={{width: "18rem"}}>
            <img src={props.post.urlToImage} alt={props.post.title} className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
                <a href={props.post.url} className="card-link">Read More</a>
              </div>
          </div>
  )
}