const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

function mdLinks(path) {
  const validateExtension = validateFileType(path);
  if (validateExtension) {
    const absolutePath = convertPathToAbsolute(path);
    console.log(absolutePath);
  }
};

function validateFileType(pathFile) {
  const correctFormat = '.md';
  const extension = (pathFile.substring(pathFile.lastIndexOf('.')).toLowerCase());
  if (correctFormat !== extension) {
    console.log('Incorrect Format, file must be MARKDOWN (.md)');
  } else {
    console.log('File format verified');
    return true;
  }
}
function convertPathToAbsolute(pathFile) {
  absolutePath = path.resolve(pathFile);
  console.log(absolutePath);
  return absolutePath;
};
function readCompleteFile(pathFile) {
  fs.readFile(pathFile, 'utf-8', (err, data) => {
    let dataLine = data.split('\n');
    let dataExtractLine = dataLine.map(element => {
    const linePosition = (dataLine.indexOf(element) + 1);
    return displayLink(pathFile, element, linePosition);
    });

  });
};
function displayLink(pathFile, markdown, position) {
  const links = [];

 {
  validateLink(links);
  return links;

  links.push({
    href: href,
    text: text,
    title: title,
    line: position,
    path: pathFile
  });
};
};
function validateLink(links) {
  links.forEach(element => {
    let url = element.href;
    fetch(url).then(response => response
    ).then(data => {
      console.log(data.status + ' ' + data.statusText);
    }).catch(error => {
      console.error('ERROR ' + error.status);
    });
  });
};
module.exports = md-links;

module.exports = {
  mdLinks,
  validateFileType,
  convertPathToAbsolute,
  readCompleteFile,
  displayLink,
  validateLink
};
