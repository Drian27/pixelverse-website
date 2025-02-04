import React from 'react'
import "../styles/index.css";
import Body from "../components/Hero/index"
import TestimonySlider from "../components/Template";
import Opsi from '@/components/Common/Opsi';
import Payment from '@/components/Common/Payment';
import Partner from '@/components/Partner';
import Proses from '@/components/Common/Proses';

export default function page() {
  return (
    <div>
        <Body />
        <Opsi />
        <Payment />
        <TestimonySlider />
        <Proses />
        <Partner />
    </div>
  )
}
