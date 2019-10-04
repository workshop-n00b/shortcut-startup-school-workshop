/* global describe, beforeAll, afterAll, beforeEach, it, expect */
import unmock, { transform } from 'unmock';
import fetchGitHubRepos from './github';

process.env.GITHUB_TOKEN = 'fake';

let githubv3;

describe('Fetching GitHub repositories', () => {
  beforeAll(() => {
    // Activate Unmock to intercept requests
    unmock.on();
    // Access the `githubv3` service added from `@unmock/githubv3` package
    githubv3 = unmock.services.githubv3;
  });

  afterAll(() => {
    unmock.off();
  });

  it('returns an array of repositories', async () => {
    const repos = await fetchGitHubRepos();
    expect(Array.isArray(repos)).toBe(true);
  });
  it.todo('transforms repositories correctly');
  it.todo('filters forks away');
  it.todo('filters forks away');
});
