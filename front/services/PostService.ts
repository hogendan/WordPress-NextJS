import RepositoryFactory from "@/repositories/RepositoryFactory";

class PostService {
    static async getList() {
        const res = await RepositoryFactory.post.getList();
        return res.data
    }
}

export default PostService