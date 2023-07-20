import graphqlRequest from "./graphqlRequest";

interface CommentBody {
  author: string;
  authorEmail: string;
  content: string;
  postId: string;
  parentId?: string; // Added parentId field for replies
}
export async function createComment(body: CommentBody) {
  const parentValue = body.parentId ? `"${body.parentId}"` : null;

  const mutation = {
    query: `mutation {
      createComment(
        input: {
          author: "${body.author}",
          authorEmail: "${body.authorEmail}",
          clientMutationId: "uniqueId",
          content: "${body.content}",
          commentOn: ${parseInt(body.postId)},
          parent: ${parentValue}
        }
      ) {
        success
      }
    }`,
  };

  const resJson = await graphqlRequest(mutation);

  return resJson;
}

interface Avatar {
  url: string;
  height: number;
  width: number;
}

interface AuthorNode {
  name: string;
  avatar: Avatar | null;
}

export interface CommentNode {
  content: string;
  author: {
    node: AuthorNode | null;
  };
  date: string;
  parentId: string;
  id: string;
  replies?: {
    nodes: CommentNode[];
  };
}

export async function getComments(slug: string) {
  const query = {
    query: `query getComments {
        post(id: "${slug}", idType: SLUG) {
          comments(where: { parentIn: "null" }) {
            nodes {
              content
              author {
                node {
                  name
                  avatar {
                    url
                    height
                    width
                  }
                }
              }
              date
              parentId
              
              id
              replies {
                nodes {
                  content
                  author {
                    node {
                      name
                      avatar {
                        url
                        height
                        width
                      }
                    }
                  }
                  date
                  parentId
                  id
                }
              }
            }
          }
          commentCount
        }
      }`,
  };

  const resJson = await graphqlRequest(query);
  const post = resJson.data.post;

  return {
    comments: post.comments.nodes as CommentNode[],
    commentCount: post.commentCount as number,
  };
}
