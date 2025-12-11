import BlogCard from "../cards/blog-card";

export default function Inspirations() {
  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col justify-center">
      <h2 className="uppercase font-extrabold text-4xl mb-8 text-center">get inspired</h2>
      <div className="">
        <BlogCard/>
      </div>
    </div>
  );
}
