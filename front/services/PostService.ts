import RepositoryFactory from "@/repositories/RepositoryFactory";

class PostService {
    static async getList() {
        try {
            const res = await RepositoryFactory.post.getList();
            return res.data;
        } catch {
            return []
        }
    }
}

export default PostService