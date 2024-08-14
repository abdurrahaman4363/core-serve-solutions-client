import BlogHeader from "../BlogHeader/BlogHeader";
// import BlogSection from "../BlogSection/BlogSection";
import MoreBlog from "../MoreBlog/MoreBlog";
import SingleGuideBanner from "../SingleGuideBanner/SingleGuideBanner";

const SingleGuide = () => {
    return (
        <div>
            <SingleGuideBanner></SingleGuideBanner>
            <BlogHeader></BlogHeader>
            {/* <BlogSection></BlogSection> */}
            <MoreBlog></MoreBlog>
        </div>
    );
};

export default SingleGuide;