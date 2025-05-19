import { useState } from "react";
function Taskform ({onAdd}) {
    const [text, setText] = useState (" ");

    const formEnviado = (e) =>{
        e.preventDefault();
        if (text.trim)
        onAdd(text);
        setText("");
    }
};

return (
< form onSubmit={formEnviado}>
<input
    type="text"
    placeholder="Digite uma tarefa"
    value={text}
    onChange={(e)=> setText(e.target.value)} />
    <button type="submit"> Adicionar </button>
</form>
);
export default Taskform;
