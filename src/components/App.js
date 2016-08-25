import React from 'react';
import TextDisplay from './TextDisplay';

export default class App extends React.Component{
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Markdown Preview</h1>
            <hr />
          </div>
        </div>
        <TextDisplay />
      </div>
    )
  }
}
