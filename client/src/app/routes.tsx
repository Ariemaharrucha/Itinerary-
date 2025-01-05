import { PromptPage } from "@/features/prompt-page/components"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PromptPage/>} />
      </Routes>
    </BrowserRouter>
  )
}