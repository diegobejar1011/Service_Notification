import { Request, Response} from 'express';
import { NotifyService } from '../../application/services/notifyService';

export class NotifyController {
    constructor(private readonly notifyService: NotifyService){}
    async execute(req: Request, res: Response) {
        try {
            const parameters = req.body;
            console.log(parameters);
            await this.notifyService.execute(parameters);
            return res.status(200).json('Notify');
        } catch (error: any) {
            return res.status(500).json(error.message);
        }
    }
}