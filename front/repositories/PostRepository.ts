import Repository from "./Repository";

class PostRepository {
    static getList() {
        return Repository(`query PostListQuery {
            posts {
                edges {
                node {
                    title
                    content
                    id
                    date
                }
                }
            }
            }`).getWp();
    }
}

export default PostRepository