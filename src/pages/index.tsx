import { Button } from "../components/button"
import NavBar from "../components/navbar"
import ClayLogo from "../assets/claylogo.png"
import FeedHiveLogo from "../assets/feedhivelogo.png"
import MetaLogo from "../assets/meta.png"
import NotionLogo from "../assets/Notion.png"
import RootDataLogo from "../assets/rootdatalogo.png"
import SmartLeadAILogo from "../assets/smartleadlogo.png"
import { Crosshair, Zap, ShieldCheck, Eye, LayoutGrid } from 'lucide-react';
import Card from "../components/card"
import chart1 from '../assets/chart1.png'
// import chart2 from '../assets/chart2.png'
import ShootingStarsBackground from "../components/ShootingStarsBackground"
import Card2 from "../components/card2"
import startupPic from '../assets/startup.jpg'
import ecosystemPic from '../assets/ecosystem.jpg'
import protocolPic from '../assets/protocol.jpg'
import gomuLogo from '../assets/gomu.jpeg'
import scrollLogo from '../assets/scroll.png'
import bouncebitLogo from '../assets/bouncebit.jpeg'
import { Link } from "react-router-dom"
import trIcon from "../assets/tr 1.png"


const Index = () => {
  return (
    <div className="h-full w-full bg-black text-white min-h-[100dvh]">
      <ShootingStarsBackground/>
      <div className="relative w-full px-">
        <NavBar />
       <div className="px-4">
           <div className="flex max-lg:flex-col gap-10 justify-center items-center pt-32 md:pt-42 pb-10 px-6 w-full max-w-7xl mx-auto">
          <div className="md:max-w-xl lg:max-w-xl md:px-4 backdrop-blur-[3px]">
            <p className="text-4xl md:text-5xl lg:text-6xl font-barmo pb-5 max-lg:text-center">
              The Growth Engine for Web3
            </p>
            <p className="text-sm md:text-xl leading-relaxed max-lg:text-center">Crypto Go-To-Market Engine for Startups, Protocols & Ecosystems.</p>
            <p className="text-sm md:text-xl leading-relaxed max-lg:text-center">Empowering Web3 founders with outcome-driven GTM systems from pre-launch to protocol expansion</p>
            <div className="flex justify-center items-center lg:justify-start py-5 gap-4">
              <Button value="Get Started" otherStyles="max-sm:text-xs bg-secondary"/>
              <Button value="Learn More" otherStyles="max-sm:text-xs bg-none border-secondary border-2 text-primary"/>
            </div>
          </div>
          <div className="">
            <img src={chart1} alt="" className="w-[500px] rounded-xl border border-white"/>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto mb-20 mt-10 md:px-4 backdrop-blur-[2px] overflow-x-auto">
          <p className="py-2 text-center text-lg font-barmo text-[rgb(85,85,85)]">
            Trusted by the most popular brands
          </p>
          <div className="max-xl:scroll-container">
            <div className="lg:scroll-text2 scroll-text">
              <div className="flex items-center gap-10">
                <div className="shrink-0">
                  <img src={NotionLogo} alt="Notion" className="h-15" />
                </div>
                <div className="shrink-0">
                  <img src={ClayLogo} alt="Clay" className="h-30" />
                </div>
                <div className="shrink-0">
                  <img src={MetaLogo} alt="Meta" className="h-25" />
                </div>
                <div className="shrink-0">
                  <img src={SmartLeadAILogo} alt="SmartLeadAI" className="h-14" />
                </div>
                <div className="shrink-0">
                  <img src={RootDataLogo} alt="RootData" className="h-25" />
                </div>
                <div className="shrink-0">
                  <img src={FeedHiveLogo} alt="FeedHive" className="h-14" />
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="w-full max-w-6xl mx-auto py-10 lg:py-20 my-10 border border-secondary bg-secondary/20 backdrop-blur-sm p-6 rounded-xl z-10">
          <div className="items-center justify-center flex max-sm:flex-col gap-8 md:gap-16 z-10">
            <p className="font-barmo text-3xl md:text-5xl lg:text-7xl">ABOUT TRACTION3</p>
            <p className="leading-loose max-sm:text-sm lg:text-xl">
              Traction3 was born from the frustrations of Web3 founders drowning in noise from Telegram airdrop bots to influencer hype cycles. We realized Web3 lacked a structured GTM engine. Traction3 brings modern go-to-market execution to the on-chain world by combining outbound systems, KOL activation, dev ecosystem growth, and automation into one GTM motion.
            </p>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto py-10"> 
          <p className="font-barmo text-3xl md:text-4xl pt-14">Why TRACTION3 Works?</p>
          <div className="flex flex-wrap justify-center items-center gap-5 py-10 max-w-6xl mx-auto">
            <Card title="Precision" subtitle="Data-backed decisions over guesswork" icon={<Crosshair size={60}/>}/>
            <Card title="Velocity" subtitle=" Fast GTM execution with quality" icon={<Zap size={60}/>}/>
            <Card title="Ownership" subtitle="We don't just advise, we help you execute your GTM plan fully." icon={<ShieldCheck size={60}/>}/>
            <Card title="Transparency" subtitle="Clear dashboards, KPIs and measurable outcomes" icon={<Eye size={60}/>}/>
            <Card title="Alignment" subtitle="GTM systems built to match founder ambition" icon={<LayoutGrid size={60}/>}/>
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto py-10">
          <p className="font-barmo text-3xl md:text-5xl pt-14 text-center">GTM Packages Built for Web3</p>
          <div className="space-y-6 py-10">
            <Card2 title="Startup Pack" icon={startupPic} direction="left">
              <p className="">Perfect for MVP-stage teams ready to launch their first GTM motion.</p>
              <ul className="list-disc space-y-2 text-sm">
                <li>
                  GTM audit & strategy
                </li>
                <li>Clay + Smartlead setup</li>
                <li>DevRel programs</li>
                <li>Lead generation system</li>
                <li>Outbound automation</li>
                <li>Basic KPI tracking</li>
              </ul>
            </Card2>
            <Card2 title="Ecosystem Pack" icon={ecosystemPic}>
              <p className="">Comprehensive GTM engine with KOL activation and DevRel systems.</p>
              <ul className="list-disc space-y-2 text-sm">
                <li>
                  Everything in Startup Pack
                </li>
                <li>KOL engine & activation</li>
                <li>DevRel programs</li>
                <li>Paid acquisition loops</li>
                <li>Content flywheel</li>
                <li>Advanced analytics</li>
              </ul>
            </Card2>
            <Card2 title="Protocol Pack" icon={protocolPic} direction="left">
              <p className="">Full-scale GTM engineering with advisory and growth workshops.</p>
              <ul className="list-disc space-y-2 text-sm">
                <li>
                 Everything in Ecosystem Pack
                </li>
                <li>GTM advisory & strategy</li>
                <li>DevRel programs</li>
                <li>Funnel mapping & optimization</li>
                <li>Executive coaching</li>
                <li>Custom automation</li>
              </ul>
            </Card2>
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto py-10 md:px-4">
          <div className="flex max-md:flex-col gap-5 justify-between items-center">
            <p className="font-barmo text-4xl max-md:text-center md:max-w-sm">Trust, But Verify Our Past Web3 Works</p>
            <p className="font-extralight max-md:text-center text-sm md:max-w-sm">We have worked with various web3 projects, Here are some reviews and testimonials of our previous works</p>
          </div>
          <div className="flex max-md:flex-col gap-10 pt-10 md:space-x-2 justify-around md:pt-20 items-center">
            <div className="flex flex-col justify-center items-center max-w-[280px]">
              <img src={gomuLogo} alt="" className="w-12 rounded-full"/>
              <p className="font-barmo text-3xl pt-1 pb-3">Gomu</p>
              <p className="text-center">317% Demo lift in 21 days through optimized founder narrative and demo flows</p>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[280px]">
              <img src={scrollLogo} alt="" className="w-12 rounded-full"/>
              <p className="font-barmo text-3xl pt-1 pb-3">Scroll</p>
              <p className="text-center">1000+ Developers onboarded in 60 days via structured DevRel programs</p>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[280px]">
              <img src={bouncebitLogo} alt="" className="w-12 rounded-full"/>
              <p className="font-barmo text-3xl pt-1 pb-3">BounceBit</p>
              <p className="text-center">$8M BD pipeline generated from systematic outbound engine</p>
            </div>
          </div>
          <div className="py-10 mt-20">
            <p className="font-barmo text-4xl text-center">Real founders, Real Wins.</p>
            <div className="flex max-md:flex-col justify-center items-center gap-5 py-10">
              <div className="border shadow-2xl shadow-secondary/40 border-secondary backdrop-blur-xs bg-secondary/10 p-5 flex gap-4 justify-center items-center rounded-2xl max-w-lg">
                <div>
                  <img src={bouncebitLogo} alt="" className="rounded-full w-64"/>
                </div>
                <div>
                  <p className="max-sm:text-sm">"We 3x'd our waitlist in 14 days with Traction3's outbound engine. Their systematic approach to GTM is exactly what Web3 needs."</p>
                  <p className="font-barmo text-xl pt-2">Gloria</p>
                  <p className="font-extralight text-xs">BounceBit</p>
                </div>
              </div>
              <div className="border border-secondary shadow-2xl shadow-secondary/40 backdrop-blur-xs bg-secondary/10 p-5 flex gap-4 justify-center items-center  rounded-2xl max-w-lg">
                 <div>
                  <img src={gomuLogo} alt="" className="rounded-full w-64"/>
                </div>
                <div>
                  <p className="max-sm:text-sm">"Traction3 nailed our founder narrative and demo flows. The results speak for themselves - 317% demo lift in just 21 days."</p>
                  <p className="font-barmo text-xl pt-2">Sam</p>
                  <p className="font-extralight text-xs">Gomu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto py-20 px-2 shadow-2xl shadow-white/10 sm:px-8 flex justify-center items-center flex-col bg-gradient-to-bl from-secondary/40 via-primary/40 to-secondary/40 backdrop-blur-xs rounded-3xl space-y-8">
          <p className="font-barmo max-md:text-3xl text-4xl max-w-xl text-center">Join the next generation of Web3 projects building with us</p>
          <p className="text-gray-300 max-w-xl text-center">From audit to activation, we help you scale your go-to-market motion like a protocol, not an expirement</p>
          <Button value="Book Your Growth Plan" otherStyles="py-4 bg-secondary"/>
        </div>

        {/* Footer */}
        <div className='pt-20 lg:px-20 max-w-6xl mx-auto px-10 '>
            <div className='flex flex-col sm:flex-row justify-between items-center pb-10'>
              <div className='flex flex-col justify-center items-start'>
                <div className="flex-shrink-0 flex items-center justify-center gap-1.5">
                  {/* <img className="h-7 md:h-9 w-auto ps-2" src={logoFUll} alt="Logo" /> */}
                  <p className="font-barmo text-4xl max-sm:text-3xl">TRACTION</p>
                  <div>
                    <img src={trIcon} alt="" className="w-8.5 max-sm:w-7" />
                  </div>
                </div>
              </div>
              <div className='max-sm:pt-8'>
                <p className='text-center pb-4 text-xs font-semibold text-[#94989E]'>Connect With Us</p>
                <div>
                  <div className='flex justify-center items-center gap-x-5'>
                    <div>
                      <a href="https://t.me/streamlivr" className='hover:text-primary'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                        </svg>
                      </a>
                    </div>
                    <div>
                      <a href="https://discord.gg/VZApzENZ" className=' hover:text-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/></svg>
                      </a>
                  </div>
                <div>
              <a href="https://x.com/streamlivr_app" className=' hover:text-primary'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/streamlivr" className=' hover:text-primary'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
              </a>
            </div>
            <div>
              <a href="https://medium.com/@streamlivrapp" className=' hover:text-primary'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/>
              </svg>
              </a>
            </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className='bg-[#262626] h-[1px] w-full'></div>
            <div className='flex flex-col sm:flex-row gap-2 justify-between items-center pt-5 pb-5'>
              <p className='text-[#999999] text-sm'>&copy; 2024 Traction3 ltd. All Rights Reserved</p>
              <div className='flex justify-center items-center gap-x-2'>
                <p className='text-[#999999] max-sm:text-xs text-sm'>
                  <Link to="/terms-of-service" className='hover:text-primary'>Terms of Use</Link>
                </p>
                <div className='h-5 w-[1px] bg-[#262626]'></div>
                <p className='text-[#999999] max-sm:text-xs text-sm'>
                  <Link to='/privacy-policy' className='hover:text-primary'>Privacy Policy</Link>
                </p>
                <div className='h-5 w-[1px] bg-[#262626]'></div>
                <p className='text-[#999999] max-sm:text-xs text-sm'>
                  <Link to='/refund-policy'  className='hover:text-primary' >Refund Policy</Link>
                </p>
              </div>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Index