const getData = (str) => {

        return fetch(
                `https://goods-76d0d-default-rtdb.firebaseio.com/goods.json? ${str ? `search=${str}` : ''}`)
        .then((response) => {
            return response.json()
        })

}

export default getData