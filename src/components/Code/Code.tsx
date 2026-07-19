import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import style from './Code.module.css';
import { useMemo, useReducer } from 'react';
type Config = {
  noUnusedLocals: boolean;
  noUnusedParameters: boolean;
  composite: boolean;
};

type Action =
  | { type: "toggle"; key: keyof Config }
  | { type: "reset" };

const initialState: Config = {
  noUnusedLocals: true,
  noUnusedParameters: true,
  composite: true,
};

function reducer(state: Config, action: Action): Config {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        [action.key]: !state[action.key],
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}
export function Code() {
    const [config, dispatch] = useReducer(reducer, initialState)
      const code = useMemo(
        () => JSON.stringify(config, null, 4)
        ,[config]);
    return(
        <div className={style.code}>
            <SyntaxHighlighter id="code" language='json' style={docco} showLineNumbers>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}