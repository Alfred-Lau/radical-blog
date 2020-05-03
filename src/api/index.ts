import request from '../utils/request';

const API_MAP = {
  GET_ARTICLES_LIST: '/api/blog'
};

export default {
  getArticles: async () => {
    const res = await request(API_MAP.GET_ARTICLES_LIST);
    return res;
  }
};
