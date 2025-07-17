import type { ReactNode } from "react";

interface cardProps{
    icon: string,
    title: string,
    children: ReactNode,
    direction?: 'left' | 'right'
}

const Card2 = ({ title, children, icon, direction }: cardProps) => {
    return (
       <div className="w-full grid grid-rows-[auto_1fr_auto] md:grid-cols-3 gap-5 max-md:place-items-center">
            <div className={`md:col-span-2 flex flex-col justify-center max-md:h-fit h-full shadow-2xl shadow-secondary/40 border border-secondary bg-secondary/10 backdrop-blur-[2.5px] max-md:max-w-xl rounded-3xl p-8 space-y-2 ${direction == 'left' ? 'md:order-2 order-1' : ''}`} style={{
            }} data-aos="fade-up-left">
                <p className="text-2xl md:text-4xl font-medium font-barmo pb-2">{title}</p>
                {children}
            </div>
            <div className={`${direction == 'left' ? 'md:order-1 order-2' : ''} w-full max-w-xl  `} data-aos="fade-up-right">
                <img src={icon} alt="" className="min-w-full h-full max-sm:h-[200px] rounded-3xl object-cover border shadow-2xl shadow-secondary/40 border-secondary"/>
            </div>
       </div>
    );
  };

export default Card2