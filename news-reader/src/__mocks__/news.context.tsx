
const mockFetchStoryIds = jest.fn();
const mockFetchStoryDetails = jest.fn();

const NewsContext = {
  fetchStoryIds: mockFetchStoryIds,
  fetchStoryDetails: mockFetchStoryDetails,
};

export default NewsContext;