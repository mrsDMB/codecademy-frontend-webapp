const apiKey = 'TWaqEC-vJSFU9rZTylGoFf5rJ3uo2Z1nboXo0-_QwDdPhpa1aAqDNCHdlUVrjrEl0KwIykldHX6oqKzcw503iiKBq4Gt4_KVSy1heh7E3e-pfpTezveraQMqw90OW3Yx';

const Yelp = {
    
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            { headers: 
                { Authorization: `Bearer ${apiKey}` }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (jsonResponse.businesses){
                    return jsonResponse.businesses.map(business => {
                        return {
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.reviewCount  
                        };
                    });
                } else {
                    console.log("No search results.");
                }
            });
    }
};

export default Yelp;