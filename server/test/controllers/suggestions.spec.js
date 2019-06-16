const { expect } = require('chai');
const db = require('../../db');
const suggestionController = require('../../controllers/suggestions');

describe('suggestion Controller', () => {
  beforeEach(async () => {
    await db.query('DELETE FROM suggestions');
    const response = await db.query("INSERT INTO suggestions (name, suggestion_type, suggestion) VALUES('test', 'post', 'test suggestion') RETURNING *");
    [this.suggestion] = response.rows;
  });

  context('getSuggestions', () => {
    it('should get all suggestions', async () => {
      const response = await suggestionController.getSuggestions();
      expect(response).to.be.an('array').with.length(1);
      const [suggestion] = response;
      expect(suggestion.id).to.equal(this.suggestion.id);
    });
  });

  context('createSuggestion', () => {
    it('should create a suggestion', async () => {
      const response = await suggestionController.createSuggestion({
        name: 'Kenny',
        suggestionType: 'blog',
        suggestion: 'Add new features like suggestion!',
      });
      expect(response).to.be.an('array').with.length(1);
      const [suggestion] = response;
      expect(suggestion.name).to.equal('Kenny');
      expect(suggestion.suggestion_type).to.equal('blog');
      expect(suggestion.suggestion).to.equal('Add new features like suggestion!');
    });
    it('should throw an error if no name', async () => {
      try {
        await suggestionController.createSuggestion({
          name: null,
          suggestionType: 'blog',
          suggestion: 'Add new features like suggestion!',
        });
        throw new Error('Should have thrown!');
      } catch (err) {
        expect(err.message).to.equal('No name specified');
      }
    });
    it('should throw an error if no suggestion', async () => {
      try {
        await suggestionController.createSuggestion({
          name: 'Kenny',
          suggestionType: 'blog',
          suggestion: null,
        });
        throw new Error('Should have thrown!');
      } catch (err) {
        expect(err.message).to.equal('No suggestion specified');
      }
    });
    it('should throw an error if no suggestion type', async () => {
      try {
        await suggestionController.createSuggestion({
          name: 'Kenny',
          suggestionType: null,
          suggestion: 'Add new features like suggestions!',
        });
        throw new Error('Should have thrown!');
      } catch (err) {
        expect(err.message).to.equal('No suggestion type specified');
      }
    });
  });

  context('deleteSuggestion', () => {
    it('should delete a suggestion', async () => {
      const response = await suggestionController.deleteSuggestion({
        id: this.suggestion.id,
      });
      expect(response).to.be.an('array').with.length(1);
      const suggestions = await suggestionController.getSuggestions();
      expect(suggestions).to.be.an('array').with.length(0);
    });
    it('should throw an error if no id', async () => {
      try {
        await suggestionController.deleteSuggestion({
          id: null,
        });
        throw new Error('Should have thrown!');
      } catch (err) {
        expect(err.message).to.equal('No id specified');
      }
    });
  });
});
