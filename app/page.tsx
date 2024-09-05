import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center p-3 h-12 bg-primary w-full bg-[#00cdac] url-(">
        <Image src={'./logo.svg'} alt="logo" width={60} height={50} />
        <h1>Content Generator Ai</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
        {/* Centered Heading */}
        <h1 className="text-4xl font-bold mb-4">
          Lets Generate Content <span className="text-[#00cdac]">Through Ai</span>
        </h1>

        {/* Paragraph below the heading */}
        <p className="text-lg text-gray-800 mb-6 text-center max-w-md">
          This is an AI where you can Generate Content in seconds.        </p>

        {/* Get Started Button */}
        <button className="px-6 py-3 bg-[#00cdac] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
          Get Started
        </button>

        {/* Developer Name and Social Links */}
        <div className="absolute bottom-5 text-center">
          <p className="text-sm text-gray-800">Developed by Naeem Hussain</p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://github.com/NaeemHk011" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
              GitHub
            </a>
            <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
              Twitter
            </a>
            <a href="https://linkedin.com/in/your_linkedin_handle" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
