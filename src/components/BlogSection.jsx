import React from "react";
import BlogCard from "./BlogCard";

function BlogSection() {

  const blogs = [
    {
      image:
        "https://www.upskillacademy.tech/storage/blogs/01KC22VA045BSSPNPSDFFZ2XEX.jpg",
      category: "Microsoft Office",
      title:
        "Master Essential Computer Skills with the ICDL Program",
      date: "Dec 09, 2025",
      description:
        "Build your digital skills in just 6 months at Upskill Bootcamp.",
    },

    {
      image:
        "https://www.upskillacademy.tech/storage/blogs/01KC22RW83ERM5M7PY56C5HDMV.jpg",
      category: "Graphic Design",
      title:
        "Master Graphic Design in 6 Months at Upskill",
      date: "Dec 09, 2025",
      description:
        "Turn your creativity into a professional career.",
    },

    {
      image:
        "https://www.upskillacademy.tech/storage/blogs/01KC22JYDQXNYB3P4GK0G9YHSQ.jpg",
      category: "Entrepreneurship",
      title:
        "Meet the Founder of Upskill Learning Center",
      date: "Dec 09, 2025",
      description:
        "Learn more about Upskill Learning Center and its mission.",
    },

    {
      image:
        "https://www.upskillacademy.tech/storage/blogs/01KC227ABCC3S9PMZYW5E0YXQ2.png",
      category: "Backend Development",
      title:
        "Full Stack Developer vs DevOps Engineer",
      date: "Dec 09, 2025",
      description:
        "Key differences between Full Stack Development and DevOps.",
    },

    {
      image:
        "https://www.upskillacademy.tech/storage/blogs/01KC21DHHW71B5RY854XDRFWSR.jpg",
      category: "Backend Development",
      title:
        "Backend Development Program at Upskill",
      date: "Dec 09, 2025",
      description:
        "Learn the skills needed to become a backend developer.",
    },

    {
      image:
        "https://www.upskillacademy.tech/storage/blogs/01KC213R5V97RQWF4SSHXNR5SB.jpg",
      category: "Frontend Development",
      title:
        "Learn Front-End Development at Upskill Online Academy",
      date: "Dec 09, 2025",
      description:
        "Learn HTML, CSS, JavaScript, React and more.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 pb-24">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog) => (
          <BlogCard
            key={blog.title}
            image={blog.image}
            category={blog.category}
            title={blog.title}
            date={blog.date}
            description={blog.description}
          />
        ))}

      </div>

    </section>
  );
}

export default BlogSection;