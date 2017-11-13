import React, {Component} from 'react';

class ProjectList extends Component {
  state = {
    display: 'none',
    top:0,
    left:0,
    transform: 'translate(0px)',
  }

  handleMouseOn = (e) => {
  const left = e.target.offsetLeft
  const top = e.target.offsetTop
  this.state.display === 'none'
  ?this.setState(state => ({display: 'block', top:top, left:left}))
  :this.setState(state => ({display: 'none'}))
  }

  handleMouseOut = () => {
  this.state.display === 'none'
  ?this.setState(state => ({display: 'block', top:0, left:0}))
  :this.setState(state => ({display: 'none'}))
  }
  handleEnterButton = () => {
    this.setState(state => ({transform: 'translate(15px)'}))
  }
  handleExitButton = () => {
    this.setState(state => ({transform: 'translate(0px)'}))
  }

  render() {
    const projects = [
      {
        name: 'Readable: A Content and Comment App',
        skills: 'Redux - Webpack - Babel - Fetch API - NPM -Git',
        description: 'A social content and discussion web application that allows users to submit content in addition to voting and commenting. Leveraged React to build a dynamic user interface, as well as Redux to manage global application state.',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510338371/readable_xmfcm6.jpg',
        url:'',
      },
      {
        name: 'MyReads: A Book Lending App',
        skills: 'React - ES6 - JavaScript - HTML - CSS - Webpack - Babel - Fetch API - NPM - Git - Asynchronous JavaScript',
        description: 'A responsive web application that allows users to select and categorize books into a virtual bookshelf. Leveraged React to support a dynamic user interface that interacts with an API server and client library.',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510338374/myreads_jmoppo.jpg',
        url:'',
      },
      {
        name: 'Mobile FlashCards: ',
        skills: 'Redux - React Native - Expo - Babel - NPM - Git',
        description: 'A cross-platform (iOS and Android) mobile application that allows users to create and organize collections of flashcards. Leveraged React Native to manage infinite lists, routing, and user input.',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510343123/Capture_d_e%CC%81cran_2017-11-10_a%CC%80_11.45.01_AM_squayn.png',
        url:'',
      },
      {
        name: 'Neighborhood Map App',
        skills: 'Javascript - HTML - CSS - Knockout - AJAX - Javascript frameworks',
        description: 'A single-page web application, using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from theYelp APIs.',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510339218/map_kfabpe.jpg',
        url:'https://milbad.github.io/neighborhood-map/'
      },
      {
        name: 'Classic Arcade Game Clone',
        skills: 'Javascript - Object-Oriented Programming - HTML5 Canvas',
        description: 'A video game using an HTML5 Canvas and the best practices in Object Oriented JavaScript.',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510339420/arcadeGame_s5j7pg.jpg',
        url:'https://milbad.github.io/arcade-game/'
      },
      {
        name: 'Simon Game',
        skills: 'HTML - CSS - Javascript',
        description: 'description test 6',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510339769/simon_ij6thp.jpg',
        url:'',
      },
      {
        name: 'Recipes Box',
        skills: 'React - HTML - CSS - Javascript',
        description: 'Recipe box',
        image:'http://res.cloudinary.com/dmtewfk2q/image/upload/v1510376038/Capture_d_e%CC%81cran_2017-11-10_a%CC%80_8.53.25_PM_cnszm2.png',
        url:'https://milbad.github.io/recipes-box/',
      },
    ]
    const {display, top, left, transform} = this.state
    const trans ='transform 1s'
    return(
      <div className='container-content-projects'>
        <h2>My Work</h2>
        {projects.map((project) => (
          <div key={project.name} className = 'project'>
          <div  key={project.name}>
            <h3>{project.name}</h3>
            <div className='skills'>{project.skills}</div>
          </div>
          <div className='project-description'>
            <div  onMouseEnter={(event) => this.handleMouseOn(event)} alt= {project.name} className= 'icon-project' style={{backgroundImage: `url(${project.image})`}}></div>
            <div className='project-description-text'>
              <div>{project.description}</div>
              <div className='project-url'>{project.url}</div>
            </div>
          </div>
        </div>
        ))}
    </div>
  )
}
}
export default ProjectList;
