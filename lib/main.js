import React from 'react'
import Comment from 'comment'

export default React.createClass({

  getInitialState(){
    return{
      coments: [
        {
          image: "https://s-media-cache-ak0.pinimg.com/736x/a1/1c/15/a11c1520acc0ee6fc250c84a00c62e15.jpg",
          name: "Joelle Van Dyne",
          text: "What passes for hip cynical transcendence of sentiment is really some kind of fear of being really human, since to be really human is probably to be unavoidably sentimental and naïve and goo-prone and generally pathetic.",
          timestamp: "Today 9:04am"
        },
        {
          image: "https://a2-images.myspacecdn.com/images03/32/7ee6d29b3fc941199ce863bb5b221726/300x300.jpg",
          name: "Remy Marathe",
          text: "It did what all ads are supposed to do: create an anxiety relievable by purchase.",
          timestamp:"Today 9:13am"
        },
        {
          image: "http://66.media.tumblr.com/tumblr_m5ifphlUqz1qzikspo1_1280.jpg",
          name: "Michael Pemulis",
          text: "And Lo, for the Earth was empty of Form, and void. And Darkness was all over the Face of the Deep. And We said: 'Look at that fucker Dance.",
          timestamp:"Today 6:16pm"
        },
      ]
    }
  },

  render() {
    return (
      <main className="feedWrapper">
        <div className="itemWrapper">
          <section className="articleWrapper">
            <heading>
              <a href="#">
                <img src="http://images.nymag.com/arts/books/reviews/davidfosterwallace110411_560.jpg"
                     alt="ProfileImage"
                     className="article__heading--authorProfileImage"/>
              </a>
              <div className="article__heading--text">
                <a href="#">
                  <h2 className="article__heading--authorProfileName">
                    David Foster Wallace
                  </h2>
                </a>
                <span className="article__timestamp">
                  "Yesterday 10:79pm"
                </span>
              </div>
            </heading>
            <p className="article__content">
              Deployed a sensitive-slash-pained expression spanked pink of the head of his thingie small act of bureaucratic kindness every morning at exactly 8:34 AM cliffish nexus. Combination thud and kertwang an absolute goddamned travesty that is not wholly true experialist shuffle, mordant pith (and royal we). A day of Managed Fun pretty much, whose urgency transcends the sum-urgency of the discrete parts, by this juncture espial.
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
            {
              this.state.comments.map((comment) => {
                return <Comment image={comment.image} name={comment.name} text={comment.text} timestamp={comment.timestamp}
              })
            }
          </section>
        </div>

      </main>
    )
  }
})
