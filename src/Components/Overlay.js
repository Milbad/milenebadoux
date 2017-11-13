import React, {Component} from 'react';

class Overlay extends Component {

  handleMouseOut = (e) => {
  console.log(e.clientX)
  console.log(e.position)
  }
  render() {
    const projects = [
      {
        name: 'Readable: A Content and Comment App',
        skills: ['Redux', 'Webpack', 'Babel', 'Fetch API', 'NPM', 'Git'],
        description: 'Built a social content and discussion web application that allows users to submit content in addition to voting and commenting. Leveraged React to build a dynamic user interface, as well as Redux to manage global application state.',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510264987/bubbles_fwc9nn.jpg',
      },
      {
        name: 'MyReads: A Book Lending App',
        skills: ['React', 'ES6' ,'JavaScript' ,'HTML' ,'CSS', 'Webpack', 'Babel' ,'Fetch API' ,'NPM', 'Git' ,'Asynchronous JavaScript'],
        description: 'description test 2',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510264976/book_dbb6xw.jpg',
      },
      {
        name: 'Mobile FlashCards: ',
        skills: ['Redux', 'React Native', 'Expo', 'Babel', 'NPM', 'Git'],
        description: 'description test 3',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510265824/flashcards_w8dtiy.jpg',
      },
      {
        name: 'Neighborhood Map App',
        skills: ['Javascript', 'HTML', 'CSS', 'Knockout', 'AJAX', 'Javascript frameworks'],
        description: 'description test 4',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510264984/neighboroodMap_hpurhd.jpg',
      },
      {
        name: 'Classic Arcade Game Clone',
        skills: ['Javascript', 'Object-Oriented Programming', 'HTML5 Canvas'],
        description: 'description test 5',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510265215/remote_cbn1ih.jpg',
      },
      {
        name: 'Simon Game',
        skills: ['HTML', 'CSS', 'Javascript'],
        description: 'description test 6',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510266863/simon_wckwh5.jpg',
      },
    ]

    return(
      <div className='container-content-projects'>
        <h2>My Work</h2>
        <div className='projects'>
        {projects.map((project) => (
          <div className = 'project' key={project.name}>
          <h3>{project.name}</h3>
          <div className='skills'>{project.skills.map((skill) => (
            <div key={skill}>{skill}</div>
          ))}
        </div>
        <div  onMouseOut={(event) => this.handleHover(event)} alt= {project.name} className= 'icon-project' style={{backgroundImage: `url(${project.image})`}}></div>
      </div>
      ))}
    </div>
  </div>
  )
}
}
export default Overlay;
