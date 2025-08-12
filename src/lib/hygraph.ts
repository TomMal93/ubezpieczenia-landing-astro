import { GraphQLClient } from 'graphql-request';
import { POST_BY_SLUG_QUERY, POSTS_QUERY, POSTS_COUNT_QUERY, type HygraphPost } from './queries';

const HYGRAPH_API_URL = import.meta.env.HYGRAPH_API_URL;
const HYGRAPH_TOKEN = import.meta.env.HYGRAPH_TOKEN;

let client: GraphQLClient | null = null;
if (HYGRAPH_API_URL) {
  client = new GraphQLClient(HYGRAPH_API_URL, {
    headers: HYGRAPH_TOKEN ? { Authorization: `Bearer ${HYGRAPH_TOKEN}` } : {},
  });
}

async function request<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!client) throw new Error('NO_HYGRAPH');
  return client.request<T>(query, variables);
}

type PostsResp = { posts: HygraphPost[] };
type PostBySlugResp = { post: HygraphPost | null };
type CountResp = { postsConnection: { aggregate: { count: number } } };

export async function getPosts(first = 12, skip = 0): Promise<HygraphPost[]> {
  try {
    const data = await request<PostsResp>(POSTS_QUERY, { first, skip });
    return data.posts ?? [];
  } catch {
    const { default: posts } = await import('@/mock/posts.json');
    // Paginate lokalnie na mockach
    return (posts as HygraphPost[]).slice(skip, skip + first);
  }
}

export async function getPostBySlug(slug: string): Promise<HygraphPost | null> {
  try {
    const data = await request<PostBySlugResp>(POST_BY_SLUG_QUERY, { slug });
    if (data.post) return data.post;
    throw new Error('Not found');
  } catch {
    const { default: posts } = await import('@/mock/posts.json');
    return (posts as HygraphPost[]).find((p) => p.slug === slug) ?? null;
  }
}

export async function getPostsCount(): Promise<number> {
  try {
    const data = await request<CountResp>(POSTS_COUNT_QUERY);
    return data.postsConnection.aggregate.count ?? 0;
  } catch {
    const { default: posts } = await import('@/mock/posts.json');
    return (posts as HygraphPost[]).length;
  }
}
