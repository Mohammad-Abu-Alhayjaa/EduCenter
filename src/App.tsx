import { useState } from "react";
import { BookOpen, Calculator, FlaskConical, Globe, Code, GraduationCap, Mail, Phone, User, CheckCircle, Sparkles } from "lucide-react";

export function App() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const studyMaterials = [
    {
      title: "Mathematics",
      description: "Comprehensive math courses covering algebra, calculus, and geometry with interactive problem-solving.",
      icon: Calculator,
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      title: "Science",
      description: "Physics, chemistry, and biology courses with practical experiments and real-world applications.",
      icon: FlaskConical,
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Languages",
      description: "English, Arabic, and French language courses for all levels with native-speaking instructors.",
      icon: Globe,
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Computer Science",
      description: "Programming, web development, and computer basics courses for the digital age.",
      icon: Code,
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
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
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Study Materials</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive courses designed to help you master new skills and achieve your academic goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyMaterials.map((material, index) => {
              const IconComponent = material.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${material.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {material.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {material.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="text-indigo-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more 
                      <span>→</span>
                    </span>
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
