import React from 'react';
import { useParams, Link } from 'react-router';
import SEO from '../components/SEO';
import { FaArrowLeft, FaCalendar, FaUser, FaTag, FaShare, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    title: "10 Resume Mistakes That Are Costing You Job Interviews",
    content: `
      <p>Creating a compelling resume is crucial for landing job interviews, yet many job seekers unknowingly make critical mistakes that prevent them from getting noticed by employers. In this comprehensive guide, we'll explore the most common resume mistakes and provide actionable solutions to help you create a resume that stands out.</p>

      <h2>1. Using an Unprofessional Email Address</h2>
      <p>Your email address is one of the first things recruiters see, and it sets the tone for their perception of your professionalism. Avoid using email addresses like "partygirl123@email.com" or "coolguy2000@email.com".</p>
      
      <p><strong>Solution:</strong> Create a professional email address using your first and last name, such as "john.smith@email.com" or "j.smith@email.com".</p>

      <h2>2. Including Irrelevant Personal Information</h2>
      <p>Many job seekers include unnecessary personal details like age, marital status, or hobbies that don't relate to the job. This information takes up valuable space and can lead to unconscious bias.</p>
      
      <p><strong>Solution:</strong> Focus on professional information that's relevant to the position. Include your name, phone number, email, LinkedIn profile, and city/state.</p>

      <h2>3. Using a Generic Resume for Every Application</h2>
      <p>Sending the same resume to every employer is a missed opportunity to showcase how your skills align with specific job requirements.</p>
      
      <p><strong>Solution:</strong> Customize your resume for each application by highlighting relevant skills and experiences that match the job description.</p>

      <h2>4. Poor Formatting and Design</h2>
      <p>A cluttered, hard-to-read resume will likely be discarded quickly. Inconsistent formatting, multiple fonts, and poor spacing make your resume difficult to scan.</p>
      
      <p><strong>Solution:</strong> Use a clean, professional template with consistent formatting, plenty of white space, and easy-to-read fonts like Arial or Calibri.</p>

      <h2>5. Focusing on Duties Instead of Achievements</h2>
      <p>Many resumes simply list job duties without demonstrating the impact or value the candidate brought to their previous roles.</p>
      
      <p><strong>Solution:</strong> Use action verbs and quantify your achievements. Instead of "Managed social media accounts," write "Increased social media engagement by 150% and grew follower base from 1,000 to 5,000 in 6 months."</p>

      <h2>Conclusion</h2>
      <p>Avoiding these common mistakes can significantly improve your chances of landing job interviews. Remember, your resume is your first impression – make it count. Consider using AI-powered tools like our resume maker to ensure your resume follows best practices and stands out to employers.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "resume-tips",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200",
    readTime: "8 min read",
    tags: ["Resume Tips", "Job Search", "Career Advice", "Professional Development"]
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogPost.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <>
      <SEO 
        title={`${blogPost.title} - AI Resume Maker Blog`}
        description="Learn about the most common resume mistakes that prevent job seekers from landing interviews and discover how to avoid them with expert tips."
      />
      
      <div className="min-h-screen bg-base-100">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/blog" className="btn btn-ghost gap-2">
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Article Meta */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="badge badge-primary">
                  <FaTag className="mr-1" />
                  {blogPost.category}
                </span>
                <span className="text-sm opacity-70">{blogPost.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <FaUser className="text-primary" />
                  <span className="font-medium">{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-secondary" />
                  <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2 mb-8">
                <span className="text-sm font-medium mr-2">Share:</span>
                <button 
                  onClick={() => handleShare('facebook')}
                  className="btn btn-circle btn-sm btn-outline hover:btn-primary"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook />
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="btn btn-circle btn-sm btn-outline hover:btn-secondary"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter />
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="btn btn-circle btn-sm btn-outline hover:btn-accent"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedin />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                className="text-base-content leading-relaxed"
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-base-300">
              <h3 className="text-lg font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span key={index} className="badge badge-outline">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-primary/10 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Your Perfect Resume?</h3>
              <p className="mb-6 text-lg">
                Use our AI-powered resume maker to avoid these common mistakes and create a professional resume that gets results.
              </p>
              <Link to="/generate-resume" className="btn btn-primary btn-lg">
                Generate My Resume
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;