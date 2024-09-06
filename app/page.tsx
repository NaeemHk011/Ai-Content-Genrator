
import { Button } from "@/components/ui/button";
import Eyes from "@/components/ui/Eyes";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="bg-slate-50">
            <div className="flex items-center justify-between h-12 w-full bg-[#00cdac] url-(">
                <div className="flex"> <Image className="pl-2" src={'./logo.svg'} alt="logo" width={60} height={50} />
                    <h1 className="pl-2 font-semibold text-white">Content Generator Ai</h1></div>
                <Link href={'/dashboard'}> <Button className="bg-slate-50 h-8 rounded text-[#00cdac] hover:bg-slate-200 m-3">Get Started</Button></Link>
            </div>
            <div className="flex flex-col items-center justify-center h-96 mt-10 bg-slate-50">
                <Eyes />
                {/* Centered Heading */}
                <h1 className="text-4xl font-bold mb-4">
                    Lets Generate Content <span className="text-[#00cdac]">Through Ai</span>
                </h1>

                {/* Paragraph below the heading */}
                <p className="text-md text-gray-800 mb-2 text-center max-w-md">
                    This is an AI where you can Generate Content in seconds.        </p>
                <Link href={'/dashboard'}><Button className="bg-[#00cdac] h-8 rounded text-white hover:bg-green-400 m-3">Get Started</Button></Link>



                {/* Developer Name and Social Links */}
                <div className="bottom-5 text-center">
                    <p className="text-sm text-gray-800">Developed by 💞 Naeem Hussain</p>

                    {/* Social Media Links */}
                    <div className="flex justify-center space-x-8 mt-2">
                        <a href="https://github.com/NaeemHk011" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-600">
                            GitHub
                        </a>
                        <a href="https://www.facebook.com/Naeemh11" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-600">
                            Facebook
                        </a>
                        <a href="https://www.linkedin.com/in/naeem-frontend-dev/" target="_blank" rel="noopener noreferrer" className="flex gap-1  hover:text-gray-600">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
