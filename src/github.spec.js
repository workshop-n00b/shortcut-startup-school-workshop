/* global describe, beforeAll, afterAll, beforeEach, it, expect */
import fetchGitHubRepos from './github';

process.env.GITHUB_TOKEN = 'fake';

describe.skip('Fetching GitHub repositories', () => {
  it.todo('should return an array of repositories');
  it.todo('should transform repositories as expected');
  it.todo('should not return private repositories');
});
