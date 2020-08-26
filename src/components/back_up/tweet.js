import React from 'react';

const TweetBox = (props) => {
  return(
    <div className="tweet-body">
      {props.children}
    </div>
  )
}

const Image = (props) => {
  return(
    <img src={props.image} alt="Logo" className="picture">
    </img>
  )
}

const Handle = (props) => {
  return(
    <div className="handle">
      {console.log(props.handle)}
      {props.handle}
    </div>
  )
}

const Name = (props) => {
  return(
    <div className="name">
    {console.log(props)}
      {props.username}
    </div>
  )
}

const Tweet = (props) => {
  return(
    <div className="tweet">
      {props.comment}
    </div>
  )
}

const TweetBody = (props) => {
  return(
    <TweetBox>
      <div className="inner-body">
        <div className="body">
          <div className="inner-body">
            <Name username={props.username}/>
          </div>
          <Tweet comment={props.comment}/>
        </div>
      </div>
    </TweetBox>
  )
}

export { TweetBody }
