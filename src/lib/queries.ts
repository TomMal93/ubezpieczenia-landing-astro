export const POSTS_QUERY = /* GraphQL */ `
  query Posts($first: Int!, $skip: Int!) {
    posts(orderBy: publishedAt_DESC, first: $first, skip: $skip) {
      id
      title
      slug
      excerpt
      tags
      publishedAt
      coverImage {
        url
      }
      content {
        html
      }
    }
  }
`;

export const POST_BY_SLUG_QUERY = /* GraphQL */ `
  query PostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      excerpt
      tags
      publishedAt
      coverImage {
        url
      }
      content {
        html
      }
    }
  }
`;

export type HygraphPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  tags?: string[] | null;
  publishedAt?: string | null;
  coverImage?: { url: string } | null;
  content?: { html?: string | null } | null;
};
