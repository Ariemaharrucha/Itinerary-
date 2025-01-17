import { LandingPage } from "@/features/landing-page"
import { PromptPage } from "@/features/prompt-page"
import { Preview } from "@/features/result-page/preview"

import { BrowserRouter, Routes, Route } from "react-router-dom"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/itinerary-prompt" element={<PromptPage/>} />
        <Route path="/itinerary-preview" element={<Preview/>} />
      </Routes>
    </BrowserRouter>
  )
}