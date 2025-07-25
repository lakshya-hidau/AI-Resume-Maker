import React from "react";
import { Link } from "react-router";
import SEO from "../components/SEO";
import { FaRocket, FaUsers, FaAward, FaStar, FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  return (
    <>
      <SEO />
      
      <div className="bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-secondary rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-accent rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-primary rounded-full"></div>
        </div>
        
        <div className="hero-content text-center">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Create Your Perfect Resume with AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-base-content/80 leading-relaxed">
              Transform your career story into a compelling resume that gets you hired. 
              Our AI analyzes your background and creates a tailored, professional resume in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/generate-resume" className="btn btn-primary btn-lg gap-2 hover-lift">
                <FaRocket />
                Create My Resume
                <FaArrowRight />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                View Examples
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-base-content/60">
              <div className="flex items-center gap-2">
                <FaUsers className="text-primary" />
                <span>50,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-warning" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAward className="text-success" />
                <span>85% Interview Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-base-100" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our AI Resume Maker?</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Experience the future of resume creation with cutting-edge AI technology 
              that understands what employers want.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaRocket className="text-3xl text-primary" />
                </div>
                <h3 className="card-title text-xl mb-3">AI-Powered Generation</h3>
                <p className="text-base-content/80">
                  Advanced AI analyzes your background and creates personalized, 
                  professional content that highlights your unique strengths and achievements.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">📄</span>
                </div>
                <h3 className="card-title text-xl mb-3">ATS-Optimized Templates</h3>
                <p className="text-base-content/80">
                  Choose from professionally designed templates that pass through 
                  Applicant Tracking Systems and catch recruiters' attention.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="card-title text-xl mb-3">Industry-Specific Optimization</h3>
                <p className="text-base-content/80">
                  Tailored content and formatting for your specific industry, 
                  ensuring your resume speaks the language employers understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-base-content/70">
              Create your professional resume in just 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-content">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Describe Yourself</h3>
              <p className="text-base-content/70">
                Tell us about your experience, skills, and career goals in your own words.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary-content">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Creates Your Resume</h3>
              <p className="text-base-content/70">
                Our AI analyzes your input and generates a professional, tailored resume.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-content">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Download & Apply</h3>
              <p className="text-base-content/70">
                Review, customize if needed, and download your resume to start applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-base-content/70">
              Join thousands who've landed their dream jobs with our AI resume maker
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-warning" />
                  ))}
                </div>
                <p className="text-lg mb-4">
                  "I was struggling to write my resume after a career change. This AI tool 
                  perfectly captured my transferable skills and helped me land 3 interviews 
                  in the first week!"
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                        alt="John Doe"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">John Doe</h4>
                    <p className="text-sm text-base-content/70">Software Engineer at Google</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-warning" />
                  ))}
                </div>
                <p className="text-lg mb-4">
                  "As a recent graduate, I had no idea how to write a professional resume. 
                  The AI understood my limited experience and created something that 
                  impressed every recruiter I met with."
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100"
                        alt="Jane Smith"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Jane Smith</h4>
                    <p className="text-sm text-base-content/70">Marketing Manager at Microsoft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="mb-8 text-xl max-w-3xl mx-auto opacity-90">
            Join over 50,000 successful job seekers who've transformed their careers 
            with our AI-powered resume maker. Your perfect resume is just minutes away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/generate-resume" className="btn btn-secondary btn-lg gap-2">
              <FaRocket />
              Start Creating Now
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default LandingPage;