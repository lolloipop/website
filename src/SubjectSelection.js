import React, { Component } from 'react';
import subdata from './subjectdata.json';
import "./SubjectSelection.css";

class SubjectSelection extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      subject: [
          {
              name: "",
              teacher: [{
                  name: "",
                  exam: ""
              }]
          }
        ]
    };
  }

  updatebtn(e) {
    ;
  }

  render() {
    return (
      <div>
          {['국어', '수학', '영어', '과학', '사회', '기타'].map(t=><button name={t} className='ripple' onClick={e=>this.setState(subdata.category.find(sub=>sub.name==e.target.name))}>{t}</button>)}
          <h1>{this.state.name}</h1><br />
          {this.state.subject.map(t=><div><h2>{t.name}</h2>{t.teacher.map(tt=><li>{tt.name} ({tt.exam})</li>)}</div>)}

      </div>
    )
  }
}

export default SubjectSelection;