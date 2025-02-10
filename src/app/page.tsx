import React from 'react'
import "../styles/index.css";
import Body from "../components/Hero/index"
import TestimonySlider from "../components/Template";
import Opsi from '@/components/Common/Opsi';
import Payment from '@/components/Pricing';
import Partner from '@/components/Partner';

export default function page() {
  return (
    <div>
        <Body />
        <Partner />
        <Opsi />
        <Payment />
        <TestimonySlider />
    </div>
  )
}
