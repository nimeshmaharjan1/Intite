import { NextApiRequest, NextApiResponse } from 'next';

import { connectDatabase } from '../../../lib/mongo';

import Product from '../../../models/product';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDatabase();
    const { method, body } = req;
    switch (method) {
        case 'POST':
            try {
                const product = await Product.create(body);
                res.status(201).json({
                    product,
                    message: 'Product has been successfully added.',
                });
            } catch (error) {
                res.status(500).json({ message: 'Please try again something went wrong.' });
            }
        case 'GET':
            res.status(201).send('HEllo muji');
    }
};

export default handler;
