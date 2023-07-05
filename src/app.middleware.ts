import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AppMiddleware.name);

  constructor() {}

  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    // Get the request method and URL
    const { method, originalUrl, body, headers } = req;
    this.logger.log('request: ' + method + ' ' + originalUrl);
    this.logger.log(body);
    this.logger.log(headers);

    res.send({ method, originalUrl, body, headers });
  }
}
