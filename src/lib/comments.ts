import graphqlRequest from "./graphqlRequest";

interface commentBody {
  author: string;
  authorEmail: string;
  content: string;
  postId: string;
}
export async function createComment(body: commentBody) {
  const mutation = {
    query: `mutation createComment(
      $author: String = "${body.author}", 
      $authorEmail: String = "${body.authorEmail}", 
      $clientMutationId: String = "uniqueId", 
      $commentOn: Int = ${parseInt(body.postId)}, 
      $content: String = "${body.content}") {
      createComment(
        input: {
          author: $author, 
          authorEmail: 
          $authorEmail, 
          clientMutationId: $clientMutationId, 
          content: $content, 
          commentOn: $commentOn
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
}
export async function getComments(slug: string) {
  const query = {
    query: `query getComments {
        post(id: "${slug}", idType: SLUG) {
          comments(where: {parentIn: "null"}) {
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
