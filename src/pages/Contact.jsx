@@ .. @@
-import React from "react";
+import React from 'react';
+import SEO from '../components/SEO';
+import ContactForm from '../components/ContactForm';
+import { 
+  FaMapMarkerAlt, 
+  FaPhone, 
+  FaEnvelope, 
+  FaClock,
+  FaFacebook,
+  FaTwitter,
+  FaLinkedin,
+  FaInstagram
+} from 'react-icons/fa';

 function Contact() {
   return (
-    <div>Contact</div>
+    <>
+      <SEO 
+        title="Contact Us - AI Resume Maker"
+        description="Get in touch with our team. We're here to help you with any questions about our AI resume maker and career services."
+      />
+      
+      <div className="min-h-screen bg-base-100">
+        {/* Hero Section */}
+        <section className="hero min-h-[50vh] bg-gradient-to-br from-accent/10 to-primary/10">
+          <div className="hero-content text-center">
+            <div className="max-w-4xl">
+              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
+              <p className="text-xl leading-relaxed">
+                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
+              </p>
+            </div>
+          </div>
+        </section>

+        {/* Contact Section */}
+        <section className="py-20 bg-base-100">
+          <div className="container mx-auto px-4">
+            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
+              {/* Contact Information */}
+              <div className="space-y-8">
+                <div>
+                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
+                  <p className="text-lg mb-8">
+                    We're here to help you succeed in your career journey. Whether you have questions 
+                    about our services, need technical support, or want to provide feedback, we'd love to hear from you.
+                  </p>
+                </div>

+                {/* Contact Details */}
+                <div className="space-y-6">
+                  <div className="flex items-center space-x-4">
+                    <div className="bg-primary/10 p-3 rounded-full">
+                      <FaMapMarkerAlt className="text-primary text-xl" />
+                    </div>
+                    <div>
+                      <h3 className="font-semibold">Address</h3>
+                      <p>123 Innovation Drive, Tech Valley, CA 94025</p>
+                    </div>
+                  </div>

+                  <div className="flex items-center space-x-4">
+                    <div className="bg-secondary/10 p-3 rounded-full">
+                      <FaPhone className="text-secondary text-xl" />
+                    </div>
+                    <div>
+                      <h3 className="font-semibold">Phone</h3>
+                      <p>+1 (555) 123-4567</p>
+                    </div>
+                  </div>

+                  <div className="flex items-center space-x-4">
+                    <div className="bg-accent/10 p-3 rounded-full">
+                      <FaEnvelope className="text-accent text-xl" />
+                    </div>
+                    <div>
+                      <h3 className="font-semibold">Email</h3>
+                      <p>hello@airesume.com</p>
+                    </div>
+                  </div>

+                  <div className="flex items-center space-x-4">
+                    <div className="bg-success/10 p-3 rounded-full">
+                      <FaClock className="text-success text-xl" />
+                    </div>
+                    <div>
+                      <h3 className="font-semibold">Business Hours</h3>
+                      <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
+                      <p>Saturday - Sunday: 10:00 AM - 4:00 PM PST</p>
+                    </div>
+                  </div>
+                </div>

+                {/* Social Media */}
+                <div>
+                  <h3 className="font-semibold mb-4">Follow Us</h3>
+                  <div className="flex space-x-4">
+                    <a href="#" className="btn btn-circle btn-outline hover:btn-primary">
+                      <FaFacebook className="text-xl" />
+                    </a>
+                    <a href="#" className="btn btn-circle btn-outline hover:btn-secondary">
+                      <FaTwitter className="text-xl" />
+                    </a>
+                    <a href="#" className="btn btn-circle btn-outline hover:btn-accent">
+                      <FaLinkedin className="text-xl" />
+                    </a>
+                    <a href="#" className="btn btn-circle btn-outline hover:btn-info">
+                      <FaInstagram className="text-xl" />
+                    </a>
+                  </div>
+                </div>
+              </div>

+              {/* Contact Form */}
+              <div>
+                <ContactForm />
+              </div>
+            </div>
+          </div>
+        </section>

+        {/* FAQ Section */}
+        <section className="py-20 bg-base-200">
+          <div className="container mx-auto px-4">
+            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
+            
+            <div className="max-w-4xl mx-auto">
+              <div className="collapse collapse-plus bg-base-100 mb-4">
+                <input type="radio" name="faq-accordion" defaultChecked />
+                <div className="collapse-title text-xl font-medium">
+                  How does the AI resume generation work?
+                </div>
+                <div className="collapse-content">
+                  <p>
+                    Our AI analyzes your input description and uses advanced natural language processing 
+                    to generate a professional resume tailored to your experience and career goals. 
+                    The system considers industry best practices and ATS requirements.
+                  </p>
+                </div>
+              </div>

+              <div className="collapse collapse-plus bg-base-100 mb-4">
+                <input type="radio" name="faq-accordion" />
+                <div className="collapse-title text-xl font-medium">
+                  Is my personal information secure?
+                </div>
+                <div className="collapse-content">
+                  <p>
+                    Yes, we take data security very seriously. All personal information is encrypted 
+                    and stored securely. We never share your data with third parties without your 
+                    explicit consent.
+                  </p>
+                </div>
+              </div>

+              <div className="collapse collapse-plus bg-base-100 mb-4">
+                <input type="radio" name="faq-accordion" />
+                <div className="collapse-title text-xl font-medium">
+                  Can I edit the generated resume?
+                </div>
+                <div className="collapse-content">
+                  <p>
+                    Absolutely! After the AI generates your resume, you can edit any section, 
+                    add or remove information, and customize the formatting to match your preferences.
+                  </p>
+                </div>
+              </div>

+              <div className="collapse collapse-plus bg-base-100 mb-4">
+                <input type="radio" name="faq-accordion" />
+                <div className="collapse-title text-xl font-medium">
+                  What file formats are supported?
+                </div>
+                <div className="collapse-content">
+                  <p>
+                    You can download your resume in PDF format, which is the most widely accepted 
+                    format by employers and ATS systems. We're working on adding more formats soon.
+                  </p>
+                </div>
+              </div>
+            </div>
+          </div>
+        </section>
+      </div>
+    </>
   );
 }

 export default Contact;