/* global describe, beforeAll, afterAll, beforeEach, it, expect */
import fetchGitHubRepos from './github';

process.env.GITHUB_TOKEN = 'fake';

describe.skip('Fetching GitHub repositories', () => {
  it.todo('returns an array of repositories');
  it.todo('transforms repositories correctly');
  it.todo('filters forks away');
  it.todo('filters forks away');
});
