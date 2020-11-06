import React, { useEffect, useState } from 'react'
import Widget1 from '../components/dashboard/widget-1'
import Section from '../components/dashboard/section'
import SectionTitle from '../components/dashboard/section-title'
import dynamic from 'next/dynamic'
import {
  FiActivity,
  FiUsers,
  FiExternalLink,
  FiClock,
  FiAlertCircle
} from 'react-icons/fi'
import { Bar1 } from '../components/dashboard/bar-chart'
import { Pie1 } from '../components/dashboard/pie-chart'
import { Line1 } from '../components/dashboard/line-chart'
import Line2 from '../components/charts/line-2'
import Dropdown1 from '../components/widgets/dropdown-1'
import GridVendas from '../components/dashboard/grid-vendas'
import GridMargem from '../components/dashboard/grid-margem'
import Markets from '../components/dashboard/markets'
import { List } from '../components/dashboard/list'
import Tasks from '../components/tasks'
import { Timeline1 } from '../components/timelines'
import Notification from '../components/dashboard/notification'

const GsMixedChart = dynamic(() => import('../components/charts/gs-mixed-chart'), { ssr: false })

const Index = () => {
  return (
    <>
      {//<SectionTitle title="Overview" subtitle="Dashboard" />
      }
      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">

        {/*widget*/}
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Vendas"
            description={70}
            right={
              <FiActivity size={24} className="stroke-current text-grey-500" />
            }
          />
        </div>

        {/*widget*/}
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Filiais"
            description={(1, 500)}
            right={
              <FiActivity size={24} className="stroke-current text-grey-500" />
            }
          />
        </div>

        {/*widget*/}
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Margem"
            description="40.5%"
            right={
              <FiActivity size={24} className="stroke-current text-grey-500" />
            }
          />
        </div>

        {/*widget*/}
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Meta"
            description="89.9%"
            right={
              <FiActivity size={24} className="stroke-current text-grey-500" />
            }
          />
        </div>

      </div>


      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">

        <div className="w-full lg:w-1/1">
          <Section
            title="Evolução de Vendas e Margens"
            description={<span>Evolução Mensal de Vendas</span>}
            right={<Dropdown1 />}>
            <div className="flex flex-row w-full">
              <GsMixedChart />
            </div>
          </Section>
        </div>

      </div>

      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">

        <div className="w-full lg:w-1/1">
          <Section
            title="Evolução de Vendas e Margens"
            description={<span>Evolução Mensal de Margem</span>}
            right={<Dropdown1 />}>
            <div className="flex flex-row w-full">
              <GsMixedChart />
            </div>
          </Section>
        </div>

      </div>

      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">

        <div className="w-full lg:w-1/1">
          <Section
            title="Evolução de Vendas e Margens"
            description={<span>Participação</span>}
            right={<Dropdown1 />}>
            <div className="flex flex-row w-full">
              <Pie1 />
            </div>
          </Section>
        </div>

      </div>

      <div className="w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
        <Section
          title="Filiais"
          description={<span>Vendas</span>}>
          <div className="flex flex-col w-full">
            <div className="overflow-x-scroll lg:overflow-hidden">
              <GridVendas />
            </div>
          </div>
        </Section>
      </div>

      <div className="w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
        <Section
          title="Filiais"
          description={<span>Margem</span>}>
          <div className="flex flex-col w-full">
            <div className="overflow-x-scroll lg:overflow-hidden">
              <GridMargem />
            </div>
          </div>
        </Section>
      </div>

    </>
  )
}
export default Index
