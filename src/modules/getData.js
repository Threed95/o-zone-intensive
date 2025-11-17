const getData = () => {

    return fetch('https://test1-7192d-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })

}

export default getData