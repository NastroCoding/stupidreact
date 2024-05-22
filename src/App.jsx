import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'

function App() {

  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
