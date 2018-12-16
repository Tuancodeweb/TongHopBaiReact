import React, { Component } from 'react'

export class Footer_B extends Component {
  render() {
    return (
      <div>
        {/* Footer */}
            <footer>
            <div className="container-fluid">
            <div className="row KLI">
                <div className="col-md-4">
                <span className="copyright">Bản quyền 2018 Kim Tan</span>
                </div>
                <div className="col-md-4">
                <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                    <a href="#">
                            <i className="material-icons">
                            verified_user
                            </i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href="#">
                            <i className="material-icons">
                            theaters
                            </i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href="#">
                            <i className="material-icons">
                            visibility
                            </i>
                    </a>
                    </li>
                </ul>
                </div>
                <div className="col-md-4">
                <ul className="list-inline quicklinks">
                    <li className="list-inline-item">
                    <a href="#">Github</a>
                    </li>
                    <li className="list-inline-item">
                    <a href="#">REPOSITORY</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </footer>

      </div>
    )
  }
}

export default Footer_B
