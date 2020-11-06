import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

const Text = () => {
  const { config } = useSelector(
    (state) => ({
      config: state.config
    }),
    shallowEqual
  )
  let { name } = { ...config }
  return (
    <div className="flex flex-col">
      <p className="text-2xl font-bold mb-4">Bem-vindo ao {name}!</p>
      <p className="text-sm font-thin">
        A nossa principal ferramenta foi 100% construída e focada para revolucionar o Varejo, se baseia em mais de 20 anos de experiência neste segmento. Suas funcionalidades incluem Gestão Operacional, Comercial, Financeira, Controladoria e Business Intelligence.
      </p>
      <p className="text-sm font-thin">
        O GSInovar é ideal para empresas que buscam melhorar o desempenho do negócio diminuindo quebras, gerenciando melhor acordos e tendo maior visibilidade e transparência nos resultados.
      </p>
      <p className="text-sm font-thin">
        A implementação do GSInovar traz todas as ferramentas para maximizar o desempenho do seu negócio, e a melhoria dos indicadores de desempenho. A GSRetail implementa, em parceria com você, um Ritual de Gestão atuando na melhoria dos resultados através dos conceitos de melhoria continua e de gestão matricial.
      </p>
    </div>
  )
}
export default Text
