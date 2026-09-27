import { createClient } from '@sanity/client';
import  { createImageUrlBuilder}  from '@sanity/image-url';

const client = createClient({
  projectId: '1ye12c69', 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});

const builder = createImageUrlBuilder(client);

export const urlFor = source => builder.image(source);

export default client;

//sanity core add http://localhost:3000