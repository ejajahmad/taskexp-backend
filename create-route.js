import fs from 'fs';

const [, , command, entityName] = process.argv;

if (command === 'create-route') {
    const basePath = `./models/${entityName}`;
    if (!fs.existsSync(basePath)) {
        fs.mkdirSync(basePath, { recursive: true });
    }

    // Create Model
    fs.writeFileSync(`${basePath}/${entityName}.model.js`, `import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    create${entityName}: async (data) => {
        try {
            // Logic for creating ${entityName}
        } catch (error) {
            throw new Error('Error creating ${entityName}');
        }
    },

    getAll${entityName}s: async () => {
        try {
            // Logic for fetching all ${entityName}s
        } catch (error) {
            throw new Error('Error fetching ${entityName}s');
        }
    },
};
`);

    // Create Controller
    fs.writeFileSync(`${basePath}/${entityName}.controller.js`, `import ${entityName}Model from './${entityName}.model.js';

export const create${entityName} = async (req, res) => {
    // Business logic for creating ${entityName}
};

export const get${entityName}s = async (req, res) => {
    // Business logic for fetching ${entityName}s
};
`);

    // Create Route with validation middleware
    fs.writeFileSync(`${basePath}/${entityName}.route.js`, `import express from 'express';
import { body } from 'express-validator';
import { create${entityName}, get${entityName}s } from './${entityName}.controller.js';
import { validate } from '../../middlewares/validationMiddleware.js';

const router = express.Router();

const ${entityName}Validation = [
    body('name').notEmpty().withMessage('Name is required')
];

// Apply validation middleware
router.post('/create', validate(${entityName}Validation), create${entityName});
router.get('/', get${entityName}s);

export default router;
`);

    console.log(`${entityName} route, controller, and model created!`);
}
