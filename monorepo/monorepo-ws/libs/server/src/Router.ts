import { Router } from 'express';
import { getFavicon, getRobots } from '@qest/express-utils';

export const router = Router()
    // use predefined controllers
    .get('/favicon.ico', getFavicon)
    .get('/robots.txt', getRobots)  
    
    //
    .get('/', (req, res, next) => {
        //
        try {
            res.send({ foo: 'bar' });
        } catch (e) {
            next(e);    
        }
    })        
    
    // some controllers may be throw errors in code
    .get('/throw', (req, res, next) => {
        try {
            new Error('throwed error');
        } catch (e) {
            next(e);
        }
    }); // some route throw error, because there is mistake

