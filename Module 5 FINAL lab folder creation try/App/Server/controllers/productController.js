import fetch from 'node-fetch';

export const getProducts = async(req,res) =>{
    try { 
        const response = await fetch('https://fakestoreapi.com/products'); 
        if (!response.ok) { 
            throw new Error('Network response was not ok'); 
        } 

        const data = await response.json(); res.json(data); } 
        catch (error) { 
            res.status(500).send('Error fetching products'); } 
        };
    