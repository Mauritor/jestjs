const array = [1, 3, 4,  6, 8, 9, 12, 25, 66, 77, 101, 125, 2035];
const k = 12;

const buscar = (array, k)=>{
    array.forEach(num => {
        if (num === k) {
            const res = array.find(elem => elem > num)
            console.log(res);
            return res
        }
    })
}
buscar(array, k);

module.exports = buscar