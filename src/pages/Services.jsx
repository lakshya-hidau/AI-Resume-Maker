@@ .. @@
-import React from "react";
+import React from 'react';
+import SEO from '../components/SEO';
+import { Link } from 'react-router';
+import { 
+  FaRobot, 
+  FaFileAlt, 
+  FaChartLine, 
+  FaUsers, 
+  FaGraduationCap, 
+  FaBriefcase,
+  FaCheck,
+  FaStar
+} from 'react-icons/fa';

 function Services() {
   return (
-    <div>Services</div>
+    <>
+      <SEO 
+        title="Our Services - AI Resume Maker"
+        description="Discover our comprehensive resume services including AI-powered resume generation, ATS optimization, career coaching, and professional templates."
+      />
+      
+      <div className="min-h-screen bg-base-100">
+        {/* Hero Section */}
+        <section className="hero min-h-[60vh] bg-gradient-to-br from-secondary/10 to-accent/10">
+          <div className="hero-content text-center">
+            <div className="max-w-4xl">
+              <h1 className="text-5xl font-bold mb-6">Our Services</h1>
+              <p className="text-xl leading-relaxed">
+                Comprehensive career solutions powered by AI to help you land your dream job
+              </p>
+            </div>
+          </div>
+        </section>

+        {/* Main Services */}
+        <section className="py-20 bg-base-100">
+          <div className="container mx-auto px-4">
+            <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
+            
+            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
+              {/* AI Resume Generation */}
+              <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
+                <div className="card-body">
+                  <div className="flex items-center mb-4">
+                    <FaRobot className="text-4xl text-primary mr-4" />
+                    <h3 className="card-title text-2xl">AI Resume Generation</h3>
+                  </div>
+                  <p className="mb-4">
+                    Our advanced AI analyzes your background and creates a tailored, 
+                    professional resume that highlights your unique strengths.
+                  </p>
+                  <ul className="space-y-2 mb-6">
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Personalized content generation
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Industry-specific optimization
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      ATS-friendly formatting
+                    </li>
+                  </ul>
+                  <div className="card-actions justify-end">
+                    <Link to="/generate-resume" className="btn btn-primary">
+                      Try Now
+                    </Link>
+                  </div>
+                </div>
+              </div>

+              {/* Professional Templates */}
+              <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
+                <div className="card-body">
+                  <div className="flex items-center mb-4">
+                    <FaFileAlt className="text-4xl text-secondary mr-4" />
+                    <h3 className="card-title text-2xl">Premium Templates</h3>
+                  </div>
+                  <p className="mb-4">
+                    Choose from our collection of professionally designed templates 
+                    crafted by career experts and hiring managers.
+                  </p>
+                  <ul className="space-y-2 mb-6">
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      50+ professional designs
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Industry-specific layouts
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Mobile-responsive formats
+                    </li>
+                  </ul>
+                  <div className="card-actions justify-end">
+                    <button className="btn btn-secondary">View Templates</button>
+                  </div>
+                </div>
+              </div>

+              {/* Career Analytics */}
+              <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
+                <div className="card-body">
+                  <div className="flex items-center mb-4">
+                    <FaChartLine className="text-4xl text-accent mr-4" />
+                    <h3 className="card-title text-2xl">Career Analytics</h3>
+                  </div>
+                  <p className="mb-4">
+                    Get detailed insights into your resume's performance and 
+                    receive actionable recommendations for improvement.
+                  </p>
+                  <ul className="space-y-2 mb-6">
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      ATS compatibility score
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Keyword optimization
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Industry benchmarking
+                    </li>
+                  </ul>
+                  <div className="card-actions justify-end">
+                    <button className="btn btn-accent">Learn More</button>
+                  </div>
+                </div>
+              </div>
+            </div>
+          </div>
+        </section>

+        {/* Specialized Services */}
+        <section className="py-20 bg-base-200">
+          <div className="container mx-auto px-4">
+            <h2 className="text-4xl font-bold text-center mb-12">Specialized Solutions</h2>
+            
+            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
+              <div className="card bg-base-100 shadow-xl">
+                <div className="card-body">
+                  <div className="flex items-center mb-4">
+                    <FaGraduationCap className="text-3xl text-primary mr-4" />
+                    <h3 className="card-title text-xl">Student & Graduate Resumes</h3>
+                  </div>
+                  <p>
+                    Specialized templates and guidance for students and recent graduates 
+                    entering the job market for the first time.
+                  </p>
+                </div>
+              </div>

+              <div className="card bg-base-100 shadow-xl">
+                <div className="card-body">
+                  <div className="flex items-center mb-4">
+                    <FaBriefcase className="text-3xl text-secondary mr-4" />
+                    <h3 className="card-title text-xl">Executive Resumes</h3>
+                  </div>
+                  <p>
+                    Premium service for C-level executives and senior professionals 
+                    with complex career histories and achievements.
+                  </p>
+                </div>
+              </div>

+              <div className="card bg-base-100 shadow-xl">
+                <div className="card-body">
+                  <div className="flex items-center mb-4">
+                    <FaUsers className="text-3xl text-accent mr-4" />
+                    <h3 className="card-title text-xl">Career Transition</h3>
+                  </div>
+                  <p>
+                    Expert guidance for professionals changing industries or 
+                    career paths, highlighting transferable skills.
+                  </p>
+                </div>
+              </div>

+              <div className="card bg-base-100 shadow-xl">
+                <div className="card-body">
+                  <div className="flex items-center mb-4">
+                    <FaStar className="text-3xl text-warning mr-4" />
+                    <h3 className="card-title text-xl">Personal Branding</h3>
+                  </div>
+                  <p>
+                    Comprehensive personal branding package including LinkedIn 
+                    optimization and cover letter creation.
+                  </p>
+                </div>
+              </div>
+            </div>
+          </div>
+        </section>

+        {/* Pricing Section */}
+        <section className="py-20 bg-base-100">
+          <div className="container mx-auto px-4">
+            <h2 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
+            
+            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
+              {/* Free Plan */}
+              <div className="card bg-base-200 shadow-xl">
+                <div className="card-body">
+                  <h3 className="card-title text-2xl justify-center">Free</h3>
+                  <div className="text-center">
+                    <div className="text-4xl font-bold">$0</div>
+                    <div className="text-sm opacity-70">Forever</div>
+                  </div>
+                  <ul className="space-y-2 my-6">
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      1 AI-generated resume
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Basic templates
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      PDF download
+                    </li>
+                  </ul>
+                  <div className="card-actions justify-center">
+                    <Link to="/generate-resume" className="btn btn-outline w-full">
+                      Get Started
+                    </Link>
+                  </div>
+                </div>
+              </div>

+              {/* Pro Plan */}
+              <div className="card bg-primary text-primary-content shadow-xl transform scale-105">
+                <div className="card-body">
+                  <div className="badge badge-secondary absolute -top-3 left-1/2 transform -translate-x-1/2">
+                    Most Popular
+                  </div>
+                  <h3 className="card-title text-2xl justify-center">Pro</h3>
+                  <div className="text-center">
+                    <div className="text-4xl font-bold">$19</div>
+                    <div className="text-sm opacity-70">per month</div>
+                  </div>
+                  <ul className="space-y-2 my-6">
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Unlimited resumes
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Premium templates
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      ATS optimization
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Career analytics
+                    </li>
+                  </ul>
+                  <div className="card-actions justify-center">
+                    <button className="btn btn-secondary w-full">
+                      Start Free Trial
+                    </button>
+                  </div>
+                </div>
+              </div>

+              {/* Enterprise Plan */}
+              <div className="card bg-base-200 shadow-xl">
+                <div className="card-body">
+                  <h3 className="card-title text-2xl justify-center">Enterprise</h3>
+                  <div className="text-center">
+                    <div className="text-4xl font-bold">Custom</div>
+                    <div className="text-sm opacity-70">Contact us</div>
+                  </div>
+                  <ul className="space-y-2 my-6">
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Everything in Pro
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Team management
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Custom branding
+                    </li>
+                    <li className="flex items-center">
+                      <FaCheck className="text-success mr-2" />
+                      Priority support
+                    </li>
+                  </ul>
+                  <div className="card-actions justify-center">
+                    <Link to="/contact" className="btn btn-outline w-full">
+                      Contact Sales
+                    </Link>
+                  </div>
+                </div>
+              </div>
+            </div>
+          </div>
+        </section>
+      </div>
+    </>
   );
 }

 export default Services;