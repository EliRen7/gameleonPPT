'use client'
import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'




const CustomButton = ({title, containerStyles,handleClick, btnType, textStyles, rightIcon, link}: CustomButtonProps) => {
  if (link) {
    return (
      <Link href={link} legacyBehavior>
        <a className={`custom-btn ${containerStyles}`} target="_blank">
          <span className={`flex-1 ${textStyles}`}>
            {title}
          </span>
          {rightIcon && (
            <div className='relative w-6 h-6'>
              <Image 
                src={rightIcon}
                alt='right-icon'
                fill
                className='object-contain'
              />
            </div>
          )}
        </a>
      </Link>
    );
  }

  return (
    <button 
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image 
            src={rightIcon}
            alt='right-icon'
            fill
            className='object-contain'
          />
        </div>
      )}
      
    </button>
  );
}

export default CustomButton;




