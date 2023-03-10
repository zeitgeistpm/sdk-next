import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Accounts } from './components/Accounts'
import { Unsubscriber } from './components/Unsubscribe'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Accounts />
      </ChakraProvider>
    </QueryClientProvider>
  )
}
export default App
