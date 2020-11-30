test('Validacion de un objeto', () => { 
    const data = {username: 'Raul Rocco'}
    const dataTwo = {username: 'Raul'}

     expect(data).toEqual({username: 'Raul Rocco'})
     expect(data).not.toEqual(dataTwo)
})