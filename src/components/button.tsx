

interface ButtonProps{
    value: string,
    otherStyles?: string,
    position?: string 
}

export const Button = ({ value, otherStyles, position }: ButtonProps) => {

  const handleRedirect = () => {
     window.open("https://app.raphinaai.com", "_blank");
  }
   
    return (
      <div className={`flex items-center ${position ? position : 'justify-center' }`}>
        <button
            className={`px-10 py-3 rounded-3xl text-sm leading-tight cursor-pointer font-barmo z-10 ${otherStyles ? otherStyles : 'text-white bg-secondary'}`}
            onClick={() => handleRedirect()}
            >
            {value}
        </button>
      </div>
    );
  };