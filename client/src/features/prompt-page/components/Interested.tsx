import React from 'react'
import { WizardNavigation } from './WizardNavigation'

export const Interested = () => {
  return (
    <section className=" w-2/3 m-auto ">
      <div className="text-center">
        <h1 className="mt-10 mb-8 text-4xl font-bold ">
          Beritahu kami apa yang Anda minati
        </h1>
        <p className="text-slate-400 text-lg pb-12">
        Pilih semua yang berlaku
        </p>
      </div>

      <div className="mt-20">

      </div>

      <WizardNavigation/>
      
    </section>
  )
}
