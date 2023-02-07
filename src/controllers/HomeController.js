import Cliente from '../models/Cliente.js'

class HomeController {
    async index(req, res) {
        const novoCliente = await Cliente.create({
            nome: 'Gabriel Arthur',
            instagram: 'bielzinonthetrack',
            email: 'gabrielarthur4146@gmail.com',
            nascimento: '2000-11-11',
            telefone: '47 98848 2219'
        });
        res.json(novoCliente)
    }
}

export default new HomeController();