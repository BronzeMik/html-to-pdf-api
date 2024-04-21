import express from 'express'
import conversionController from "./controllers/conversion.js";
import cors from 'cors';

const port = 3000;
const corsOptions = {
    origin: '*'
}
class Application {

    useMiddleWare() {
        this.app.use(cors(corsOptions))
        this.app.use(express.json());
        this.app.use('/conversion', conversionController)
    }

    listener() {
        this.app.listen(3000, () => {
            console.log(`Server listening on port ${port}...`)
        })
    }

    async main() {
        this.app = express();    
        this.useMiddleWare();
        this.listener();
    }
}

export default Application
