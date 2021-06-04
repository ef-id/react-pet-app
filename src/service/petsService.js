const url = 'http://localhost:5000/pets';

export const getAll = (category = '') => {

    let petUrl = url + (category ? `?category=${category}` : ''); 

    return fetch(petUrl)
            .then(res => res.json())
            .catch(error => console.log(error))
}

export const getOne = (petId) => {
    
    return fetch(`${url}/${petId}`)
            .then(res => res.json())
            .catch(error => console.log(error))
}