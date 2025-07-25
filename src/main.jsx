@@ .. @@
 import { StrictMode } from "react";
 import { createRoot } from "react-dom/client";
 import "./index.css";
 import { BrowserRouter, Route, Routes } from "react-router";
+import { HelmetProvider } from "react-helmet-async";
 import About from "./pages/About";
 import Home from "./pages/Home";
 import Root from "./pages/Root";
 import Services from "./pages/Services";
 import Contact from "./pages/Contact";
 import GenerateResume from "./pages/GenerateResume";
+import Blog from "./pages/Blog";
+import BlogPost from "./pages/BlogPost";
+import Login from "./pages/Login";
+import ScrollToTop from "./components/ScrollToTop";
 import { Toaster } from "react-hot-toast";

 createRoot(document.getElementById("root")).render(
   <StrictMode>
-    <BrowserRouter>
-      <Toaster />
-      <Routes>
-        <Route path="/" element={<Root />}>
-          <Route path="" element={<Home />} />
-          <Route path="about" element={<About />} />
-          <Route path="services" element={<Services />} />
-          <Route path="contact" element={<Contact />} />
-          <Route path="generate-resume" element={<GenerateResume />} />
-        </Route>
-      </Routes>
-    </BrowserRouter>
+    <HelmetProvider>
+      <BrowserRouter>
+        <Toaster position="top-right" />
+        <ScrollToTop />
+        <Routes>
+          <Route path="/" element={<Root />}>
+            <Route path="" element={<Home />} />
+            <Route path="about" element={<About />} />
+            <Route path="services" element={<Services />} />
+            <Route path="contact" element={<Contact />} />
+            <Route path="blog" element={<Blog />} />
+            <Route path="blog/:id" element={<BlogPost />} />
+            <Route path="login" element={<Login />} />
+            <Route path="generate-resume" element={<GenerateResume />} />
+          </Route>
+        </Routes>
+      </BrowserRouter>
+    </HelmetProvider>
   </StrictMode>
 );