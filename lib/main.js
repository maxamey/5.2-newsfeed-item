import React from 'react'
import Comment from 'comment'

export default React.createClass({
  render() {
    return (
      <main className="feedWrapper">
        <div className="itemWrapper">
          <section className="articleWrapper">
            <heading>
              <a href="#">
                <img src="" alt="article__heading--authorProfileImage"/>
              </a>
              <div className="article__heading--text">
                <a href="#">
                  <h2 className="article__heading--authorProfileName">

                  </h2>
                </a>
                <span className="article__timestamp">
                </span>
              </div>
            </heading>
            <p className="article__content">
            </p>
            <footer className="article__heading--footer">
              <span>
                Like
              </span>
              <span>
                Comment
              </span>
            </footer>
          </section>
          <section className="commentsWrapper">

          </section>
        </div>

      </main>
    )
  }
})
