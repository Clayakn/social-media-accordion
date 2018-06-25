import React, { Component } from 'react'

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <div className="container">
          <header>
            <h1>Follow Me On Social Media</h1>
          </header>
            <ul className="accordion">
              <li className="tab">
                <div className="social youtube">
                  <a rel="noopener noreferrer" href="insert your youtube here" 
                  target='_blank'>Youtube</a>
                </div>
                <div className="content">
                  <h1>YouTube</h1>
                  <p>Display an invitation to your YouTube Channel here!</p>
                </div>
              </li>
              <li className="tab">
                <div className="social twitter">
                  <a rel="noopener noreferrer" href="insert your twitter here" 
                  target='_blank'>Twitter</a>
                </div>
                <div className="content">
                  <h1>Twitter</h1>
                  <p>Remind visitors to check out your twitter for the latest news about your work</p>
                </div>
              </li>
              <li className="tab">
                <div className="social facebook">
                  <a rel="noopener noreferrer" href="insert your facebook here" 
                  target='_blank'>Facebook</a>
                </div>
                <div className="content">
                  <h1>Facebook</h1>
                  <p>Invite visitors to check out your facebook community page and join up for great discussions</p>
                </div>
              </li>
              <li className="tab">
                <div className="social instagram">
                  <a rel="noopener noreferrer" href="insert your instagram here" 
                  target='_blank'>Instagram</a>
                </div>
                <div className="content">
                  <h1>Instagram</h1>
                  <p>Invite users to review your fantastic image catalog!</p>
                </div>
              </li>
              <li className="tab">
                <div className="social linkedin">
                  <a rel="noopener noreferrer" href="insert your linkedIn here" 
                  target='_blank'>LinkedIn</a>
                </div>
                <div className="content">
                  <h1>LinkedIn</h1>
                  <p>Invite users to check out your professional profile and connect with you!</p>
                </div>
              </li>
              <li className="tab">
                <div className="social github">
                  <a rel="noopener noreferrer" href="insert your github here" 
                  target='_blank'>GitHub</a>
                </div>
                <div className="content">
                  <h1>GitHub</h1>
                  <p>Invite visitors to review and implement your code to improve
                    the open source network!
                  </p>
                </div>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default App
