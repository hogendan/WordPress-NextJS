import RepositoryFactory from "@/repositories/RepositoryFactory";

class PostService {
    public async getList() {
        const res = await RepositoryFactory.post.getList();
        return res.data
    }
}

export default PostService