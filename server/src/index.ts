
import express, { Request, Response } from 'express';

const main = async () => {
    const app = express();
    
    app.get('/', (_: Request, res: Response) => {
        res.send('Hello World');
      });
      app.listen(8000, () => {
        console.log('The application is listening on port 8000!');
      });

}

main().catch((err) => {
    console.log(err);
});