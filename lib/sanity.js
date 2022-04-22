import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: '5jmr8bbt',
    dataset: 'production',
    apiVersion: '2022-04-19',
    token: 
        'skHBPAkytJEG7yKkboit6T6ju3VPprOl1g3v3mLdPI0Zo65kBIjhYXjI3pzkOoNQJuGln7C5zwlEMEHfjCddeQDbLVp7ZfYPXTXXDFYQMkf0YZp4hkdoEvQ4nQKngOttKcFHHsQ8GiZd7jsHKpJc4vJfWiBRAqnL5o451rkMhZukm5qdDGlv',
    useCdn: false
})