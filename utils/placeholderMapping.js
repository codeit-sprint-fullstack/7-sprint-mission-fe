// utils/placeholderMapping.js
import placeHolder from "@/public/assets/logos/panda_question.svg";

const PLACEHOLDER_IMAGE = placeHolder;

/**
 * articles 배열에 기본 이미지 URL을 추가
 * @param {Array} articles - API로부터 받은 article 객체 배열
 * @returns {Array} placeholder image가 보장된 article 배열
 */
export function mapArticlesWithPlaceholder(articles = []) {
  return articles.map((article) => ({
    ...article,
    image: article.image || PLACEHOLDER_IMAGE,
  }));
}
