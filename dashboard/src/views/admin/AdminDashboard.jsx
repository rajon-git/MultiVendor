import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import {RiProductHuntLine} from 'react-icons/ri'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Chart from 'react-apexcharts'

const AdminDashboard = () => {
  const state ={
    series:[
      {
        name: "Orders",
        data: [12, 45, 98, 90, 56, 78, 24, 90, 98, 65, 99, 100],
      },
      {
        name: "Revenue",
        data: [12, 45, 98, 97, 56, 7, 24, 90, 98, 6, 99, 19],
      },
      {
        name: "Sellers",
        data: [12, 40, 98, 0, 56, 72, 24, 9, 98, 6, 99, 100],
      },
    ],
    options:{
      color: ["#181ee8","#181ee8"],
      plotOptions:{
        radius:30
      },
      chart:{
        background: 'transparent',
        foreColor: '#d0d2d6'
      },
      dataLables: {
        enabled:false
      },
      stroke:{
        show:true,
        curve: ['smooth','straight','stepline'],
        lineCap: 'butt',
        colors: '#f0f0f0',
        width: .5,
        dashArray: 0
      },
      xaxis:{
        categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      },
      legend:{
        position: 'top'
      }
    }
  }
  return (
    <div className='px-2 md:px-7 py-5'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>$656</h2>
            <span className='text-md font-medium'>Total Sales</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
            <BsCurrencyDollar className='text-[#28c76f] shadow-lg'/>
          </div>
        </div>

        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>28</h2>
            <span className='text-md font-medium'>Products</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl'>
            <RiProductHuntLine className='text-[#cd00e8] shadow-lg'/>
          </div>
        </div>

        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>56</h2>
            <span className='text-md font-medium'>Sellers</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl'>
            <FaUsers className='text-[#00cfe8] shadow-lg'/>
          </div>
        </div>

        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>15</h2>
            <span className='text-md font-medium'>Orders</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
            <AiOutlineShoppingCart className='text-[#7367f0] shadow-lg'/>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-wrap mt-7'>
        <div className='w-full lg:w-7/12 lg:pr-3'>
          <div className='w-full bg-[#283046] p-4 rounded-md'>
            <Chart options={state.options} series={state.series} type='bar' height={350}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard