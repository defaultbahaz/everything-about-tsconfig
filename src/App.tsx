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
      <style>
        {`
          html, body, *, button, a, input,
          .disabled, a:disabled, input:disabled {
            cursor: url('/maincursor.svg'), auto;
          }

          button:hover, a:hover, input:hover, .hover:hover,
          button:focus, a:focus, input:focus, .focus:focus  {
            cursor: url('/hovercursor.svg'), auto;
          }

          input[type="text"], input[type="email"], input[type="password"],
          input[type="search"], textarea, [contenteditable] {
            cursor: url('/textcursor.svg') 12 12, text;
          }
        `}
      </style>
      <Content>
        <Card>{texts.content.texts.title}</Card>
        <Card>
          <CodeHeader></CodeHeader>
          <Code></Code>
        </Card>
      </Content>
      <Footer></Footer>
    </Background>
  )
}

export default App
