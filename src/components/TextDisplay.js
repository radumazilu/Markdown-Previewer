import React from 'react';
import MarkdownPreview from './MarkdownPreview';

export default class TextDisplay extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      value: '# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n####'
    };
  }

  updateInput(modifiedValue) {
    this.setState({
      initialValue: modifiedValue
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">Your Markdown</h3>
          <textarea rows="25" cols="75" type="text" className="user-input" value={this.state.value} onChange={this.updateInput.bind(this)}/>
        </div>
        <div className="col-md-6">
          <h3 className="text-center">Result</h3>
          <MarkdownPreview markdown={this.state.value} />
        </div>
      </div>
    )
  }
}
