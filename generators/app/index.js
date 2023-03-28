'use strict';
const glob = require('glob');
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Wait for it~`
      )
    );
  }

  writing() {
    glob.sync('**/*', { cwd: this.templatePath() }).map(file => {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
    });
    glob.sync('**/.*', { cwd: this.templatePath() }).map(file => {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
    });
  }
};
