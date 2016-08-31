import React from 'react'

export default React.createClass({
  render(){
    return (
      <div className="commentWrapper">
        <a href="#">
          <img src={this.props.image}
               alt="ProfileImage"
               className="commenter__profileImage"/>
        </a>
        <div className="comment__contentAndFooter">
          <div className="commentContentBlock">
            <span className="comment__content">
              <span className="commenter__profileName">
                {this.props.name}
              </span>
              {this.props.text}
            </span>
          </div>
          <footer className="comment__footer">
            <label className="comment__footer--likeCounter">
              3
            </label>
            <time className="comment__footer--timestamp">{this.props.timestamp}
            </time>
          </footer>
        </div>
      </div>
    )
  }
})
