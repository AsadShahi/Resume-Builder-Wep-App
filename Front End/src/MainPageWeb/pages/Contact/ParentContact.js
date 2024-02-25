import React from 'react'
import Contact from './Contact'
import { TranslationProvider } from '../../components/Locales/TranslationContext'
export default function ParentContact() {
  return (
    <TranslationProvider>

        <Contact/>
    </TranslationProvider>
  )
}
