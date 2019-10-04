import axios from 'axios';
import logger from './logging';

const GITHUB_API = 'https://api.github.com';
const REPOSITORIES_PATH = '/user/repos';

let axiosInstance;

const axiosClient = () => {
  if (axiosInstance) {
    return axiosInstance;
  }

  if (!process.env.GITHUB_TOKEN) {
    throw Error('Environment variable GITHUB_TOKEN missing!');
  }

  axiosInstance = axios.create({
    baseURL: GITHUB_API,
    timeout: 10000,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  return axiosInstance;
};

/**
 * A repository object.
 * @typedef {Object<string, any>} Repository
 * @property {string} name The name of the repository.
 * @property {string} url URL to the repository.
 * @property {string} description Project description
 * @property {number} stars Number of users
 */

/**
 * Remove any unnecessary fields from the GitHub repository response.
 * https://developer.github.com/v3/repos/
 * @param repository GitHub repository response object
 * @returns {Repository} object
 */
const transform = (repository) => ({
  name: repository.full_name,
  url: repository.html_url,
  description: repository.description,
  stars: repository.stargazers_count,
});

/**
 * Fetch all GitHub repositories for the authenticated user.
 * Removes private and forked repositories.
 * Maps repositories to internal, simpler data format.
 * Note: returns only the first result, NOT all of the user's repositories.
 * API documentation: https://developer.github.com/v3/repos/
 * @returns {Promise<Repository[]>} List of authenticated user's public repositories
 */
const fetchGitHubRepos = async () => {
  const client = axiosClient();
  logger.info(`Making a request to: ${GITHUB_API}, path: "${REPOSITORIES_PATH}"`);
  const axiosResult = await client.get(REPOSITORIES_PATH);
  const { data } = axiosResult;
  logger.info(`Found ${data.length} repositories`);
  return data
    .filter((repository) => repository.private === false) // TODO Add a filter for forks
    .map((repository) => transform(repository));
};

export default fetchGitHubRepos;
