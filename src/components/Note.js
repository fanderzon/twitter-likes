import React from 'react';
import {Card, CardActions, CardText} from 'material-ui/Card';
import ReactMarkdown from 'react-markdown';
import './Note.css';
import Done from 'material-ui/svg-icons/action/done';

const Note = ({note, toggleRead}) => {
  const {title, text, read} = note;
  return (
    <Card
      containerStyle={{
        marginTop: 20
      }}
    >
      <ReactMarkdown className="title" source={title} />
      <CardText>
        {text}
      </CardText>
      <CardActions onClick={() => toggleRead(note)}>
        {
          read ?
          <div className="done" style={{backgroundColor: '#69F0AE'}}><Done color="#00BFA5" /><div>Already read</div></div> :
          <div className="done"><Done color="#999999" /><div>Mark as read</div></div>
        }

      </CardActions>
    </Card>
  );
}

export default Note;
