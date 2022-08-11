// just a function to fetch the shopify end point moving this here to clean up code

export const postToShopify = async ({query, variables={},}: { query: string; variables: object;}) => {
    
    try {
        const response = await fetch(`${process.env.URL}`, {
            method: 'POST',
            headers: {
                'X-Shopify-Storefront-Access-Token':`${process.env.TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query, variables}),
        }).then((res) => res.json());
        
        if (response.errors) {
            console.log({errors: response.errors})
        } else if (!response || !response.data){
            console.log({response});
            return 'NO RESULTS FOUND.';
        }

        return response.data; 

    } catch (error) {
        console.log(error) 
    }
}