import { CategoriaInterface } from "../../categoria/model/categoria.interface"

export interface ProdutoInterface{
    id: number| null
    descricao: string
    nome: string
    numero: string
    dataExclusao: Date
    imgProduto: string
    valor: number
    categoria: CategoriaInterface
}