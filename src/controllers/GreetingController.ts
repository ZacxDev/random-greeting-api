import { Request, Response } from 'express';
import GreetingService from 'Services/GreetingService';

export default class GreetingController {
  /**
   * @param {Request} req The request object containing all of the data sent to us by the client.
   * @param {Response} res The response object used for sending data back to the client.
   */
  static randomGreeting(req: Request, res: Response): Response {
    const greetingService = new GreetingService;
    const greeting = greetingService.getRandomGreeting();
    return res.status(200).json({ greeting });
  }
}
