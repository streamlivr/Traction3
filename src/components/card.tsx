// import radialCircle2 from '../assets/RadialCircle2.svg'

import type { ReactNode } from "react";

interface cardProps{
    icon: ReactNode,
    title: string,
    subtitle: string,
}

const Card = ({ title, subtitle, icon}: cardProps) => {
    return (
        <div className='w-full min-h-[200px] flex flex-col justify-center items-center max-w-[300px] h-full px-2 py-3 border border-secondary bg-secondary/20 rounded-2xl relative backdrop-blur-xs'>
            <div className='flex flex-col justify-center items-center'>
                <div className="rounded-full py-3">
                    {icon}
                </div>
                <div className="w-full text-center">
                    <p className='text-2xl font-medium font-barmo'>{title}</p>
                    <p className='text-xs pb-3 pt-1'>{subtitle}</p>
                </div>
            </div>
        </div>
    );
  };

export default Card