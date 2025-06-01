export const PATH = {
  index() {
    return "/";
  },
  course: {
    index() {
      return "/course";
    },
    react() {
      //return `${this.index()}/react-frontend-development`;
      return `react-frontend-development`;
    },
    slug() {
      return ":courseSlug";
    },
  },
  wishlist: {
    index() {
      return "/wishlist";
    },
  },
  question() {
    return "/questions";
  },
};
