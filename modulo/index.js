class Cliente{
    nome
    #cpf
    endereco
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    // get e set nomes
    get getNomeCaixaBaixa(){
        return this.name.toLowerCase()
    }

    get getNomeCaixaAlta(){
        return this.name.toUpperCase()
    }

    set setNovoNome(novoNome){
        this.nome = novoNome
    }


    // get e set endereco

    get getEnderecoCaixaAlta(){
        return this.endereco.formatarEndereco().toUpperCase()
    }

    get getEnderecoCaixaBaixa(){
        return this.endereco.formatarEndereco().toLowerCase()
    }

    set setNovoEndereco(novoEndereco){
        this.endereco = novoEndereco
    }

    // get e add/pop do telefone

    get getTelefones(){
        return Array.from(this.telefones)
    }

    adicionarTelefone(novoTelefone){
        this.telefones.add(novoTelefone)
    }

    removerTelefone(telefone){
        this.telefone.delete(telefone)
    }

    // get para o atributo privado

    get getCpf(){
        return this.#cpf
    }

}

class Telefone{
    ddd
    numero
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }

    get getDdd(){
        return this.ddd
    }

    set setDdd(novoDdd){
        this.ddd = novoDdd
    }

    get getNumero(){
        return this.numero
    }

    set setNumero(novoNumero){
        this.numero = novoNumero
    }
}

class Endereco{
    estado
    cidade
    rua
    numero
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero      
    }

    // getter e setter estado
    get getEstadoCaixaAlta(){
        return this.estado.toUpperCase()
    }

    get getEstadoCaixaBaixa(){
        return this.estado.toLowerCase()
    }   

    set setNovoEstado(novoEstado){
        this.estado = novoEstado
    }

    // getter e setter cidade

    get getCidadeCaixaAlta(){
        return this.cidade.toUpperCase()
    }

    get getCidadeCaixaBaixa(){
        return this.cidade.toLowerCase()
    }

    set setNovaCidade(novaCidade){
        this.cidade = novaCidade
    }

    // getter e setter rua
    get getRuaCaixaAlta(){
        return this.rua.toUpperCase()
    }

    get getRuaCaixaBaixa(){
        return this.rua.toLowerCase()
    }

    set setNovaRua(novaRua){
        this.rua = novaRua
    }

    // getter e setter numero

    get getNumero(){
        return this.numero
    }

    set setNumero(novoNumero){
        this.numero = novoNumero
    }

    // funcao para retornar endereco bonitinho

    formatarEndereco(){
        return `Estado: ${this.getEstadoCaixaAlta} Cidade: ${this.getCidadeCaixaAlta} Rua: ${this.getRuaCaixaAlta} Numero: ${this.getNumero}`
    }
}

class Empresa{
    razaoSocial
    nomeFantasia
    #cnpj
    endereco
    constructor(razaoSocial, nomeFantasia, cnpj, enderecoEmpresa){
        this.enderecoEmpresa = enderecoEmpresa
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }
    
    // get e set razaoSocial

    get getRazaoSocialCaixaAlta(){
        return this.razaoSocial.toUpperCase()
    }

    get getRazaoSocialCaixaBaixa(){
        return this.razaoSocial.toLowerCase()
    }

    set setNovaRazaoSocial(novaRazaoSocial){
        this.razaoSocial = novaRazaoSocial
    }

    // getter e setter nome fantasia

    get getNomeFantasiaCaixaAlta(){
        return this.nomeFantasia.toUpperCase()
    }

    get getNomeFantasiaCaixaBaixa(){
        return this.nomeFantasia.toLowerCase()
    }

    set setNovoNomeFantasia(novoNomeFanasia){
        this.nomeFantasia  = novoNomeFanasia
    }

    // getter setter cnpj
    get getCnpj(){
        return this.#cnpj
    }

    //getter e setter endereco

    get getEnderecoEmpresaCaixaAlta(){
        return this.enderecoEmpresa.formatarEndereco().toUpperCase()
    }

    get getEnderecoEmpresaCaixaBaixa(){
        return this.enderecoEmpresa.formatarEndereco().toLowerCase()
    }

    set setNovoEnderecoEmpresa(novoEnderecoEmpresa){
        this.enderecoEmpresa = novoEnderecoEmpresa
    }       

    get getClientes(){
        return Array.from(this.clientes)
    }

    adicionarCliente(novoCliente){
        this.clientes.add(novoCliente)
    }

    removerCliente(cliente){
        this.clientes.remove(cliente)
    }

    get getTelefones(){
        return Array.from(this.telefones)
    }

    adicionarTelefone(novoTelefone){
        this.telefones.add(novoTelefone)
    }

    removerTelefone(telefone){
        this.telefones.remove(telefone)
    }

    detalhe(){
        var resultado = `Razão Social: ${this.getRazaoSocialCaixaAlta}
        Nome Fanatsia: ${this.getNomeFantasiaCaixaAlta}
        ===================================
        `

        for(let cliente of this.clientes){
            resultado+= `Nome: ${this.clientes.getNomeCaixaAlta}
            ${this.clientes.getEnderecoCaixaAlta}`
            for (let telefone of cliente.getTelefones){
                resultado += `ddd: ${telefone.getDdd} Número: ${telefone.getNumero}
                `
            }
            resultado += '\n'
        }
        return resultado
    }

}

export {Cliente, Telefone, Endereco, Empresa}