import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categories =[
            {id:1, nome: "Lazer", description: "Cinema, parques, praia, etc"},
            {id:2, nome: "Saúde", description: "Plano de saúde e Rémedios"},
            {id:3, nome: "Moradia", description: "Pagamentos de Contas da Casa"},
            {id:4, nome: "Salário", description: "Recebimento Mensal"},
            {id:5, nome: "Freelas", description: "Trabalhos como freelancer"}
        ];

        return { categories}
    }
}