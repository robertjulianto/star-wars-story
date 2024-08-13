import { createRoot } from 'react-dom/client'
import './index.css'
import PersonsPage from './pages/persons_page.tsx'
import PersonDetailPage from './pages/person_detail_page.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageContextProvider from './contexts/page_context.tsx'
import AudioContextProvider from './contexts/audio_context.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonsPage />,
  },
  {
    path: "/detail/:personId",
    element: <PersonDetailPage />
  },
])


createRoot(document.getElementById('root')!).render(
  <PageContextProvider>
    <AudioContextProvider>
      <RouterProvider router={router} />
    </AudioContextProvider>
  </PageContextProvider>,
)
