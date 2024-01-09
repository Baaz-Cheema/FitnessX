import BlogBody from "../components/blogInfo/BlogBody";
import BlogHero from "../components/blogInfo/BlogHero";
import { useParams } from "react-router-dom";
import { blogPosts, blogTitles } from "../UI/blogposts";

export default function Blog() {
    const params = useParams()
    const paramName = params.blogName
    const pathExists = blogTitles.includes(paramName)
    const data = blogPosts.filter(a => a.title === paramName)[0]
    if (!pathExists) {
        throw new Error('djasndkja')
    }

    return (
        <>
            <BlogHero data={data} />
            <BlogBody data={data} />
        </>
    )
}