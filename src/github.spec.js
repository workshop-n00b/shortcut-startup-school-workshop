/* global describe, beforeAll, afterAll, beforeEach, it, expect */
import fetchGitHubRepos from './github';

process.env.GITHUB_TOKEN = 'fake';

describe.skip('Fetching GitHub repositories', () => {
  it.skip('finds repositories', async () => {
    // TODO Needs mocking calls!
    const repos = await fetchGitHubRepos();
    expect(repos.length).toBeGreaterThan(0);
  });
  it.todo('transforms repositories correctly');
  it.todo('filters forks away');
  it.todo('filters forks away');
});
