import './App.css'
import { Background } from '@/layouts/Background'
import { Content } from '@/layouts/Content'
import { Footer } from '@/layouts/Footer'
import { Card } from '@/components/Card/Card'
import { Code } from '@/components/Code/Code'
import { CodeHeader } from '@/components/Code/CodeHeader'
import texts from '@/locales/en.json';


function App() {

  return (
    <Background>
      <Content>
        <Card>{texts.content.texts.title}</Card>
        <Card>
          <CodeHeader/>
          <Code></Code>
        </Card>
      </Content>
      <Footer/>
    </Background>
  )
}

export default App
