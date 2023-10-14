import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './CodeDisplay.css';



const Component = ({ codeString }) => {
    return (
        <div>
            <div className='code-display-title'>
                <p id='code-p'>Example code</p>
                <ion-icon name="clipboard-outline"></ion-icon>
            </div>
            <SyntaxHighlighter className="code-display" language="python" style={atomOneDark}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default Component;