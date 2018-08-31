const mdLinks = require('./lib/md-links');

describe('mdLinks(path)', () => {
  test('validates file format', () => {
    function validateFileType(pathFile) {
      expect((README.md).toBeTruthy());
    }
  });
  test('validates file path', () => {
    function convertPathToAbsolute(pathFile) {
      expect((absolutePath).toBeAbsolute());
    }
  });
});
