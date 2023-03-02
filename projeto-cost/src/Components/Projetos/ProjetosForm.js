function ProjetoForm(){
    return(
        <div>
            <form>
                <div>
                    <input type="text" placeholder="Informe o nome do Projeto" />
                </div>
                <div>
                    <input type="number" placeholder="Informe o Orçamento Total" />
                </div>
                <div>
                <select name="category_id">
                    <option disabled >selecione a Categoria</option>
                </select>
                </div>
                <div>
                   <input type='submit' placeholder="Enviar Projeto" />
                </div>   
            </form>
        </div>
    )
}

export default ProjetoForm;