


export async function fetchApi() {


    const url = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records';
    const options = {
        method: 'GET',
        
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }};

