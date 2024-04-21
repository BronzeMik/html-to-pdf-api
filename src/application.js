import express from 'express'
import conversionController from "./controllers/conversion.js";
import cors from 'cors';

const port = 3000;

class Application {
    constructor(){
        this.corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200 
    }  
     
}
   
    useMiddleWare() {
        this.app.use(cors(this.corsOptions))
        this.app.use(express.json());
        this.app.use('/conversion', conversionController)
    }

    listener() {
        this.app.listen(port, () => {
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
