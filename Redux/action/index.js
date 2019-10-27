import {INCREASE, DECREASE,TRUE,FALSE,SAVE_YEAR,SAVE_CAR, SAVE_GENDER,SAVE_BIRTHDAY} from './type';

export const counterIncrease = () => ({type:INCREASE});
export const counterDecrease = () => ({type:DECREASE});
export const counterTrue = (id) => ({type:TRUE,id});
export const counterFalse = (id) => ({type:FALSE,id});
export const save_Car = (data) => ({type:SAVE_CAR,data});
export const save_Year = (data) => ({type:SAVE_YEAR,data});
export const save_Gender = (data) => ({type:SAVE_GENDER,data});
export const save_Birthday= (data) => ({type:SAVE_BIRTHDAY,data});