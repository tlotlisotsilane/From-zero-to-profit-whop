import { useState, useEffect } from 'react';  
import Head from 'next/head';  
  
export default function HomePage() {  
  const [user, setUser] = useState(null);  
  
  return (  
    <>  
      <Head>  
        <title>From Zero to Profit - Escape the 9-5 Trap</title>  
        <meta name="description" content="Learn affiliate marketing, freelancing, content creation, and digital products to build your path to financial freedom." />  
        <link rel="icon" href="/favicon.ico" />  
      </Head>  
  
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">  
        {/* Navigation */}  
        <nav className="px-6 py-4">  
          <div className="max-w-7xl mx-auto flex justify-between items-center">  
            <div className="text-2xl font-bold text-white">  
              From Zero to Profit  
            </div>  
            <div className="space-x-4">  
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors">  
                Get Started Free  
              </button>  
            </div>  
          </div>  
        </nav>  
  
        {/* Hero Section */}  
        <div className="max-w-7xl mx-auto px-6 py-20">  
          <div className="text-center">  
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">  
              Escape the <span className="text-yellow-400">9-5 Trap</span>  
            </h1>  
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">  
              Master 4 proven income streams: Affiliate Marketing, Freelancing, Content Creation, and Digital Products  
            </p>  
              
            {/* Course Modules Preview */}  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">  
              {modules.map((module, index) => (  
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">  
                  <div className="text-4xl mb-4">{module.icon}</div>  
                  <h3 className="text-xl font-semibold mb-2">{module.title}</h3>  
                  <p className="text-blue-100 text-sm">{module.description}</p>  
                </div>  
              ))}  
            </div>  
  
            {/* CTA Section */}  
            <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">  
              <h2 className="text-3xl font-bold text-white mb-4">  
                Start Your Journey Today  
              </h2>  
              <p className="text-blue-100 mb-6">  
                Get instant access to Module 1 + 5K Blueprint Lead Magnet  
              </p>  
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors">  
                Join Free Community  
              </button>  
            </div>  
          </div>  
        </div>  
      </div>  
    </>  
  );  
}  
  
const modules = [  
  {  
    icon: "🎯",  
    title: "Foundation & Mindset",   
    description: "Build the right foundation for your profit journey"  
  },  
  {  
    icon: "💰",  
    title: "Affiliate Marketing",  
    description: "Learn to earn through strategic partnerships"  
  },  
  {  
    icon: "🚀",   
    title: "Freelancing Freedom",  
    description: "Build a sustainable freelance business"  
  },  
  {  
    icon: "📱",  
    title: "Content Creation",  
    description: "Monetize your knowledge and creativity"  
  }  
];  
