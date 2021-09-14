import React from 'react';
import ReactDom from 'react-dom';

//css file
import './index.css';

//variables in file_task
import { studentList } from './students';
import Student from './Student';
import Header from './header';
import Footer from './footer';

function Studentlist() {

  return (
    <div>
      <div className='header'>
        <Header />
      </div>

      <section className='studentlist'>
        
        {studentList.map((student) => (
          <Student
            key={student.id}
            {...student}
          />
        ))} 
      </section>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

ReactDom.render(<Studentlist />, document.getElementById('root'));