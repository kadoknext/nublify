import Image from "next/image"
import Link from "next/link"
import imgLogo from '@/public/logo.png'
import { FaFacebookSquare, FaLinkedin, FaPinterest } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
export default function Footer() {
  return (
    <div className=" text-sm text-gray-400 bg-black">
      <footer className='relative overflow-hidden px-4 md:px-20 text-center md:text-left py-15'>
        <div className='container mx-auto'>
          <article className="grid grid-cols-1 md:grid-cols-5 gap-10">

            <div className="flex flex-col gap-4 md:gap-8 text-center md:text-left border-b border-gray-700  md:border-b-0 pb-4 md:pb-0">
              <div className="flex items-center justify-center md:items-left md:justify-start">
                <Link
                  href='/'
                  className='mr-4 flex text-center gap-x-3 cursor-pointer py-1.5 font-bold text-3xl'
                >
                  <Image src={imgLogo} alt='Zeus' width={60} height={60} />
                  ZEUS
                </Link>
              </div>
              <h2>
                Run heavy applications on any device with
                your personal computer on the cloud.
              </h2>
              <p>São Paulo - Brasil</p>
              <div className="flex items-center justify-center md:items-left md:justify-start gap-3">

                <Link href="#" target="_blank"><FaFacebookSquare /></Link>

                <Link href="#" target="_blank"><FaXTwitter /></Link>

                <Link href="#" target="_blank"><RiInstagramFill /></Link>

                <Link href="#" target="_blank"><FaPinterest /></Link>

                <Link href="#" target="_blank"><FaLinkedin /></Link>
                <Link href="https://youtube.com/" target="_blank"><IoLogoYoutube /></Link>

              </div>
              <div className="flex gap-4 items-center justify-center md:items-left md:justify-start">
                <Link href="#">Login</Link>
                <p>|</p>
                <Link href="#">Login</Link>
              </div>

            </div>

            <div className="flex flex-col gap-4 md:gap-8 text-center md:text-left border-b border-gray-700 md:border-b-0 pb-4 md:pb-0 md:pt-2">
              <h2 className="text-sky-500 font-bold">Solutions</h2>
              <ul className="flex flex-col gap-4 md:gap-6">
                <li><Link href="#" className="hover:text-sky-600 underline">Cloud Computer</Link></li>
                <li><Link href="#" className="">Team Workspaces</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Application Streaming</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Pixel Streaming</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Unity Streaming</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Zeus Applications</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 md:gap-8 text-center md:text-left border-b border-gray-700 md:border-b-0 pb-4 md:pb-0 md:pt-2">
              <h2 className="text-sky-500 font-bold">Zeus Computer</h2>
              <ul className="flex flex-col gap-4 md:gap-6">
                <li><Link href="#" className="hover:text-sky-600 underline">Features</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Scalable Performance</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Preinstalled Apps</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Zeus Files</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">iPad & Tablet Support</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Pricing</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 md:gap-8 text-center md:text-left border-b border-gray-700 md:border-b-0 pb-4 md:pb-0 md:pt-2">
              <h2 className="text-sky-500 font-bold">Zeus Teams</h2>
              <ul className="flex flex-col gap-4 md:gap-6">
                <li><Link href="#" className="hover:text-sky-600 underline">Features</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Team Management</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Shared File Manager</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Usage Plans</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Application Usage Monitoring</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Computer Templates</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Permissions</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Pricing</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 md:gap-8 text-center md:text-left border-b border-gray-700 md:border-b-0 pb-4 md:pb-0 md:pt-2">
              <h2 className="text-sky-500 font-bold">Zeus Streams</h2>
              <ul className="flex flex-col gap-4 md:gap-6">
                <li><Link href="#" className="hover:text-sky-600 underline">Features</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Application Streaming</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Unreal Engine Pixel Streaming</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Unity Verified Streaming Solution</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Enhanced Analytics</Link></li>    
                <li><Link href="#" className="hover:text-sky-600 underline">Whitelabel Streaming</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Usage & Budget Limits</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Demo Experiences</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-sky-600 underline">Pricing</Link></li>
              </ul>
            </div>
          </article>

        </div>

      </footer>
      <div className="flex items-center justify-center py-4 border-t border-gray-900">
        <p>Copyright © 2025 Zeus Interactive Streaming Protocol</p>
      </div>
    </div>
  )
} 