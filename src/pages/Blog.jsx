import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router';
import { FaCalendar, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "10 Resume Mistakes That Are Costing You Job Interviews",
      excerpt: "Discover the most common resume mistakes that prevent job seekers from landing interviews and learn how to avoid them.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "resume-tips",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Resume Writing in 2024",
      excerpt: "Explore how artificial intelligence is transforming the way we create resumes and what it means for job seekers.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "ai-technology",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "ATS-Friendly Resume: Complete Guide for 2024",
      excerpt: "Learn how to optimize your resume for Applicant Tracking Systems and increase your chances of getting noticed.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "ats-optimization",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Career Change Resume: How to Highlight Transferable Skills",
      excerpt: "Master the art of showcasing your transferable skills when switching careers with our comprehensive guide.",
      author: "David Kim",
      date: "2024-01-08",
      category: "career-advice",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "The Psychology of Resume Design: What Recruiters Really Notice",
      excerpt: "Understand the psychological factors that influence how recruiters perceive your resume design and content.",
      author: "Lisa Park",
      date: "2024-01-05",
      category: "design-tips",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Remote Work Resume: Essential Skills and Keywords",
      excerpt: "Discover the key skills and keywords that make your resume stand out for remote work opportunities.",
      author: "Alex Thompson",
      date: "2024-01-03",
      category: "remote-work",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'resume-tips', name: 'Resume Tips' },
    { id: 'ai-technology', name: 'AI Technology' },
    { id: 'ats-optimization', name: 'ATS Optimization' },
    { id: 'career-advice', name: 'Career Advice' },
    { id: 'design-tips', name: 'Design Tips' },
    { id: 'remote-work', name: 'Remote Work' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'resume-tips': 'badge-primary',
      'ai-technology': 'badge-secondary',
      'ats-optimization': 'badge-accent',
      'career-advice': 'badge-success',
      'design-tips': 'badge-warning',
      'remote-work': 'badge-info'
    };
    return colors[category] || 'badge-neutral';
  };

  return (
    <>
      <SEO 
        title="Career Blog - AI Resume Maker"
        description="Expert career advice, resume tips, and industry insights to help you land your dream job. Stay updated with the latest trends in AI-powered career tools."
      />
      
      <div className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <section className="hero min-h-[50vh] bg-gradient-to-br from-info/10 to-success/10">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">Career Insights Blog</h1>
              <p className="text-xl leading-relaxed">
                Expert advice, industry trends, and actionable tips to accelerate your career growth
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-base-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`btn btn-sm ${
                    selectedCategory === category.id 
                      ? 'btn-primary' 
                      : 'btn-outline'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {selectedCategory === 'all' && (
          <section className="py-12 bg-base-100">
            <div className="container mx-auto px-4">
              <div className="card lg:card-side bg-base-200 shadow-xl">
                <figure className="lg:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </figure>
                <div className="card-body lg:w-1/2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`badge ${getCategoryColor(blogPosts[0].category)}`}>
                      Featured
                    </span>
                    <span className="text-sm opacity-70">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="card-title text-2xl lg:text-3xl">{blogPosts[0].title}</h2>
                  <p className="text-lg">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-primary" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-secondary" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <Link to={`/blog/${blogPosts[0].id}`} className="btn btn-primary">
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 bg-base-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(selectedCategory === 'all' ? 1 : 0).map(post => (
                <div key={post.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <figure>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`badge badge-sm ${getCategoryColor(post.category)}`}>
                        <FaTag className="mr-1" />
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <span className="text-xs opacity-70">{post.readTime}</span>
                    </div>
                    
                    <h3 className="card-title text-lg">{post.title}</h3>
                    <p className="text-sm opacity-80">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <FaUser className="text-primary" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FaCalendar className="text-secondary" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="card-actions justify-end mt-4">
                      <Link to={`/blog/${post.id}`} className="btn btn-primary btn-sm">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-primary text-primary-content">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest career tips, resume advice, 
              and industry insights delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="join w-full">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input input-bordered join-item flex-1 text-base-content"
                />
                <button className="btn btn-secondary join-item">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;