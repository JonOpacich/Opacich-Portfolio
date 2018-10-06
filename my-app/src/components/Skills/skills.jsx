import React, { Component } from "react";
import { SkillSection } from "./skillSection";
import { SkillTag } from "./skillTag";

function mapTags(array) {
  return array.map(index => <SkillTag title={index} />);
}

const frontEnd = [
  "React",
  "jQuery",
  "Sass",
  "Typescript",
  "Postman",
  "Heroku",
  "Git",
  "ESLint",
  "Next.js",
  "Gulp",
  "Fullpage.js",
  "Visual Studio",
  "NPM/Yarn",
  "Webpack",
  "Firebase"
];
const design = [
  "Adobe XD",
  "Sketch",
  "Figma",
  "Adobe Illustrator",
  "Inkscape",
  "Bulma",
  "Semantic UI",
  "Bootstrap"
];
const backEnd = [
  "Node.js",
  "Express",
  "RESTful Web Services",
  "HTTP/2",
  "Regular Expressions",
  "Handlebars",
  "Passport",
  "Axios",
  "Sequelize",
  "Mongoose",
  "OAuth",
  "Mocha",
  "Nightmare",
  "Chai",
  "MySQL",
  "MSSQL",
  "MongoDB"
];

export class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="column">
        <div className="skills-container">
          <SkillSection icon="fas fa-3x fa-code" title="Front-End">
            {mapTags(frontEnd)}
          </SkillSection>
          <SkillSection icon="fas fa-3x fa-palette" title="Design">
            {mapTags(design)}
          </SkillSection>
          <SkillSection icon="fas fa-3x fa-database" title="Back-End">
            {mapTags(backEnd)}
          </SkillSection>
        </div>
      </div>
    );
  }
}
