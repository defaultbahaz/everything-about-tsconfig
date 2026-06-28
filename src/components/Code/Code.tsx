import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function Code() {
    return(
        <div>
            <SyntaxHighlighter language='json' style={docco} showLineNumbers>
                
                    "noUnusedLocals": true,
                    "noUnusedParameters": true,
                    "erasableSyntaxOnly": true,
                    "noFallthroughCasesInSwitch": true,
                    "composite": true,
                    "ignoreDeprecations": "6.0"
                
            </SyntaxHighlighter>
        </div>
    )
}