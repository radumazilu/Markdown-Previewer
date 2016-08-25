import React from 'react';
import marked from 'marked';

export default class MarkdownPreview extends React.Component{
 createMarkup() {
   return {
       __html: marked(this.props.markdown)};
 };

 render() {
   return(
     <div dangerouslySetInnerHTML={this.createMarkup()} />
   )
 }
}
