import Congratulations from "../../../../components/Congratulations/Congratulations";
import { useLocalStorage } from "../../../../useLocalStorage";
import { useEffect } from "react";

function Module2_end() {
    const [module, setModule] = useLocalStorage('module', 0);
    const [moduleTitle] = useLocalStorage('moduleTitle', 'Module');

    useEffect(() => {
        setModule(0);
    }, []);

    return (
        <Congratulations moduleTitle={moduleTitle} />
    );
}

export default Module2_end;