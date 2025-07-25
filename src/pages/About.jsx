@@ .. @@
-import React from 'react'
+import React from 'react';
+import SEO from '../components/SEO';
+import { FaRocket, FaUsers, FaAward, FaHeart } from 'react-icons/fa';
 
 function About() {
   return (
-    <div>About</div>
-  )
+    <>
+      <SEO 
+        title="About Us - AI Resume Maker"
+        description="Learn about our mission to help job seekers create professional resumes with AI technology. Discover our story, values, and commitment to your career success."
+      />
+      
+      <div className="min-h-screen bg-base-100">
+        {/* Hero Section */}
+        <section className="hero min-h-[60vh] bg-gradient-to-br from-primary/10 to-secondary/10">
+          <div className="hero-content text-center">
+            <div className="max-w-4xl">
+              <h1 className="text-5xl font-bold mb-6">About AI Resume Maker</h1>
+              <p className="text-xl leading-relaxed">
+                We're on a mission to democratize career success by making professional resume creation 
+                accessible to everyone through the power of artificial intelligence.
+              </p>
+            </div>
+          </div>
+        </section>
+
+        {/* Story Section */}
+        <section className="py-20 bg-base-100">
+          <div className="container mx-auto px-4">
+            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
+              <div>
+                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
+                <div className="space-y-4 text-lg">
+                  <p>
+                    Founded in 2024, AI Resume Maker was born from a simple observation: 
+                    talented individuals were being overlooked because their resumes didn't 
+                    effectively showcase their potential.
+                  </p>
+                  <p>
+                    Our team of career experts, AI researchers, and designers came together 
+                    to create a solution that combines cutting-edge technology with proven 
+                    recruitment insights.
+                  </p>
+                  <p>
+                    Today, we've helped thousands of job seekers land their dream positions 
+                    by creating resumes that truly represent their unique value proposition.
+                  </p>
+                </div>
+              </div>
+              <div className="relative">
+                <img 
+                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
+                  alt="Team collaboration" 
+                  className="rounded-2xl shadow-2xl"
+                />
+              </div>
+            </div>
+          </div>
+        </section>

+        {/* Values Section */}
+        <section className="py-20 bg-base-200">
+          <div className="container mx-auto px-4">
+            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
+            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
+              <div className="card bg-base-100 shadow-xl">
+                <div className="card-body items-center text-center">
+                  <FaRocket className="text-4xl text-primary mb-4" />
+                  <h3 className="card-title">Innovation</h3>
+                  <p>We continuously push the boundaries of what's possible with AI technology.</p>
+                </div>
+              </div>
+              
+              <div className="card bg-base-100 shadow-xl">
+                <div className="card-body items-center text-center">
+                  <FaUsers className="text-4xl text-secondary mb-4" />
+                  <h3 className="card-title">Accessibility</h3>
+                  <p>Professional resume creation should be available to everyone, regardless of background.</p>
+                </div>
+              </div>
+              
+              <div className="card bg-base-100 shadow-xl">
+                <div className="card-body items-center text-center">
+                  <FaAward className="text-4xl text-accent mb-4" />
+                  <h3 className="card-title">Excellence</h3>
+                  <p>We strive for the highest quality in everything we do, from code to customer service.</p>
+                </div>
+              </div>
+              
+              <div className="card bg-base-100 shadow-xl">
+                <div className="card-body items-center text-center">
+                  <FaHeart className="text-4xl text-error mb-4" />
+                  <h3 className="card-title">Empathy</h3>
+                  <p>We understand the challenges of job searching and design with compassion.</p>
+                </div>
+              </div>
+            </div>
+          </div>
+        </section>

+        {/* Team Section */}
+        <section className="py-20 bg-base-100">
+          <div className="container mx-auto px-4">
+            <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
+            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
+              <div className="card bg-base-200 shadow-xl">
+                <figure className="px-10 pt-10">
+                  <img 
+                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
+                    alt="Sarah Johnson" 
+                    className="rounded-xl w-32 h-32 object-cover"
+                  />
+                </figure>
+                <div className="card-body items-center text-center">
+                  <h3 className="card-title">Sarah Johnson</h3>
+                  <p className="text-primary font-semibold">CEO & Co-Founder</p>
+                  <p>Former HR executive with 15+ years of recruitment experience.</p>
+                </div>
+              </div>
+              
+              <div className="card bg-base-200 shadow-xl">
+                <figure className="px-10 pt-10">
+                  <img 
+                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" 
+                    alt="Michael Chen" 
+                    className="rounded-xl w-32 h-32 object-cover"
+                  />
+                </figure>
+                <div className="card-body items-center text-center">
+                  <h3 className="card-title">Michael Chen</h3>
+                  <p className="text-secondary font-semibold">CTO & Co-Founder</p>
+                  <p>AI researcher and former Google engineer specializing in NLP.</p>
+                </div>
+              </div>
+              
+              <div className="card bg-base-200 shadow-xl">
+                <figure className="px-10 pt-10">
+                  <img 
+                    src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400" 
+                    alt="Emily Rodriguez" 
+                    className="rounded-xl w-32 h-32 object-cover"
+                  />
+                </figure>
+                <div className="card-body items-center text-center">
+                  <h3 className="card-title">Emily Rodriguez</h3>
+                  <p className="text-accent font-semibold">Head of Design</p>
+                  <p>Award-winning UX designer passionate about accessible design.</p>
+                </div>
+              </div>
+            </div>
+          </div>
+        </section>

+        {/* Stats Section */}
+        <section className="py-20 bg-primary text-primary-content">
+          <div className="container mx-auto px-4">
+            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
+              <div>
+                <div className="text-4xl font-bold mb-2">50K+</div>
+                <div className="text-lg">Resumes Created</div>
+              </div>
+              <div>
+                <div className="text-4xl font-bold mb-2">85%</div>
+                <div className="text-lg">Interview Rate</div>
+              </div>
+              <div>
+                <div className="text-4xl font-bold mb-2">4.9/5</div>
+                <div className="text-lg">User Rating</div>
+              </div>
+              <div>
+                <div className="text-4xl font-bold mb-2">24/7</div>
+                <div className="text-lg">Support Available</div>
+              </div>
+            </div>
+          </div>
+        </section>
+      </div>
+    </>
+  );
 }

-export default About
+export default About;