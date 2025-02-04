import React from 'react'
import "../styles/index.css";
import Body from "../components/Hero/index"
import TestimonySlider from "../components/Template";
import Opsi from '@/components/Common/Opsi';
import Payment from '@/components/Common/Payment';
import Partner from '@/components/Partner';

export default function page() {
  return (
    <div>
        <Body />
        <Opsi />
        <Payment />
        <TestimonySlider />
        <Partner />
    </div>
  )
}
