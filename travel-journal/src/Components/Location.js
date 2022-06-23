import React from 'react'

export default function Location(props) {
  
  return (
    <div className='location-card'>
      <div className='location-card-left'>
        <img src={props.location.imageUrl} />
      </div>
      <div className='location-card-right'>
        <div className='right-header'>
        <h4>📍 {props.location.location}</h4>
        <a href={props.location.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.location.title}</h1>
        <p><b>{props.location.startDate} - {props.location.endDate}</b></p>
        <p>{props.location.description}</p>
      </div>
    </div>
  )
}
