import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './CodeDisplay.css';



const Component = () => {
    const codeString = `
    def scan_ports(ip: str) -> bool:
        client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        established = False

        for port in range(1, 65535):
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client_socket:
                try:
                    client_socket.settimeout(0.5)
                    client_socket.connect((ip, port))

                    if not established:
                        print("PORT\t  STATE\t SERVICE")
                        established = True

                    open_ports.append(port)

                    try:
                        service = socket.getservbyport(port)
                        print(f"{port}/tcp".ljust(9), "open\t", service)
                    except:
                        print(f"{port}/tcp".ljust(9), "open\t", "unknown")
                except:
                    pass

        return established
    `
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