import { PromptPage } from "@/features/prompt-page/components"
import { Preview } from "@/features/result-page/components/preview"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PromptPage/>} />
        <Route path="/itinerary_preview" element={<Preview/>} />
      </Routes>
    </BrowserRouter>
  )
}