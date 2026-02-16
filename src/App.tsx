import { useState } from "react";
import { BookOpen, Calculator, FlaskConical, Globe, Code, GraduationCap, Mail, Phone, User, CheckCircle, Sparkles } from "lucide-react";

export function App() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const studyMaterials = [
    {
      title: "Mathematics",
      description: "Master algebra, calculus, geometry, and statistics with our comprehensive math program designed for all skill levels.",
      fullDescription: "From basic arithmetic to advanced calculus, our mathematics program covers everything you need to succeed. Includes interactive problem-solving sessions, practice tests, and personalized feedback.",
      icon: Calculator,
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      rating: 4.8,
      reviews: 245,
      price: "$199",
      topics: ["Algebra", "Calculus", "Geometry", "Statistics"],
    },
    {
      title: "Science",
      description: "Explore physics, chemistry, and biology through hands-on experiments and engaging theoretical lessons.",
      fullDescription: "Dive into the wonders of science with our comprehensive program. Conduct virtual and physical experiments, learn scientific methods, and understand how the world works around you.",
      icon: FlaskConical,
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      duration: "16 Weeks",
      level: "Intermediate",
      rating: 4.9,
      reviews: 189,
      price: "$249",
      topics: ["Physics", "Chemistry", "Biology", "Lab Work"],
    },
    {
      title: "Languages",
      description: "Learn English, Arabic, or French with native-speaking instructors and immersive conversation practice.",
      fullDescription: "Become fluent in your chosen language through immersive learning. Our native-speaking instructors provide real-world conversation practice, grammar lessons, and cultural insights.",
      icon: Globe,
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&h=600&fit=crop",
      duration: "20 Weeks",
      level: "All Levels",
      rating: 4.7,
      reviews: 312,
      price: "$179",
      topics: ["English", "Arabic", "French", "Conversation"],
    },
    {
      title: "Computer Science",
      description: "Master programming, web development, and computer fundamentals with industry-relevant projects.",
      fullDescription: "Start your tech journey with our computer science program. Learn popular programming languages, build real projects, and gain skills that employers are looking for in today's digital economy.",
      icon: Code,
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      duration: "24 Weeks",
      level: "Beginner to Intermediate",
      rating: 4.9,
      reviews: 428,
      price: "$299",
      topics: ["Python", "Web Dev", "JavaScript", "Databases"],
    },
  ];

  const features = [
    { title: "Expert Teachers", desc: "Learn from certified professionals" },
    { title: "Flexible Schedule", desc: "Study at your own pace" },
    { title: "Interactive Learning", desc: "Engaging online & offline classes" },
    { title: "Certification", desc: "Get recognized certificates" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbdayjpw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EduCenter
            </span>
          </div>
          <a
            href="#join"
            className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-200"
          >
            Join Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Start Your Learning Journey Today</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Unlock Your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Potential
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our educational center and access world-class study materials, 
              expert instructors, and a supportive learning community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#join"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-indigo-200 transition-all hover:-translate-y-0.5"
              >
                Get Started Free
              </a>
              <a
                href="#courses"
                className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border-2 border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Materials Section */}
      <section id="courses" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Study Materials</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive courses designed to help you master new skills and achieve your academic goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studyMaterials.map((material, index) => {
              const IconComponent = material.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={material.image} 
                      alt={material.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 font-bold rounded-full text-sm">
                        {material.price}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${material.color} flex items-center justify-center mb-2`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {material.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold text-slate-900">{material.rating}</span>
                      </div>
                      <span className="text-slate-400">({material.reviews} reviews)</span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {material.fullDescription}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {material.topics.map((topic, i) => (
                        <span 
                          key={i}
                          className={`px-3 py-1 ${material.bgColor} text-slate-700 text-xs font-medium rounded-full`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-6 py-4 border-t border-slate-100 mb-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">{material.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="text-sm">{material.level}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="#join"
                      className={`block w-full py-3 text-center bg-gradient-to-r ${material.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5`}
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Center?</h2>
            <p className="text-xl text-indigo-100 leading-relaxed mb-8">
              Our Educational Center provides high-quality study materials and courses for students of all ages. 
              We are dedicated to helping students achieve their academic goals through comprehensive learning 
              resources and experienced instructors.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-indigo-200">Students</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-indigo-200">Courses</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-indigo-200">Teachers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="join" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Get Started</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Join Our Center</h2>
              <p className="text-slate-600">
                Fill in your details below and we'll contact you shortly
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 lg:p-10">
              {formStatus === "success" ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Welcome Aboard!</h3>
                  <p className="text-slate-600 mb-8">
                    Your registration has been submitted successfully. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors"
                  >
                    Register Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {formStatus === "error" && (
                    <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl text-center">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Join Now - It's Free"
                    )}
                  </button>

                  <p className="text-center text-sm text-slate-500">
                    By joining, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EduCenter</span>
            </div>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Educational Center. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
