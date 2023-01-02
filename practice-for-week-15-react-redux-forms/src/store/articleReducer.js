import articles from "../data/data.json";

const LOAD_ARTICLES = "article/loadArticles";
const ADD_ARTICLE = "article/addArticle";

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};
export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      let oldEntries = state.entries;
      return { ...state, entries: [...oldEntries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;
