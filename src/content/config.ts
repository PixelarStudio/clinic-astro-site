import { defineCollection, z } from 'astro:content';

const especialidades = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    descriptionLarge: z.string(),
    horarios: z.string(),
    practicas: z.string(),
    profesionales: z.array(z.object({
      nombre: z.string().optional(),
      especialidad: z.string().optional(),
      matricula: z.string().optional(),
      horarios: z.string().optional(),
    })),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    imagen: z.string().optional(),

  }),
});

export const collections = { 
  especialidades };

