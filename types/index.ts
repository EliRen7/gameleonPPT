import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    link: string;
}

export interface SearchGameProps{
    game: string;
    setGame: (game:string) => void; 
}

export interface GameCardProps{
    title: string;
    description: string;
    imagePath: string;
    imageSkills: string[];
    skills: string[];
    modal: string;
    link: string;
}


