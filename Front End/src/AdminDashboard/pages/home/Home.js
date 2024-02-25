import React from 'react'
import Features from '../../componetns/features/Features'
import Chart from '../../componetns/chart/Chart'
import { xAxisData } from '../../datas'
export default function Home() {
  return (

    <div className='home'>

      <Features/>
      <Chart grid title="Mounthly sale" data={xAxisData} dataKey="Sale"/>

    </div>
  )
}
