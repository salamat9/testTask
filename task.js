const tank = [
    { id: 1, type: 'mango', price: 35 },
    { id: 2, type: 'mango', price: 77 },
    { id: 3, type: 'potato', price: 84 },
    { id: 4, type: 'potato', price: 25 },
    { id: 5, type: 'mango', price: 33 },
    { id: 6, type: 'apple', price: 50 },
    { id: 7, type: 'mango', price: 89 },
    { id: 8, type: 'apple', price: 60 },
    { id: 9, type: 'mango', price: 51 },
    { id: 10, type: 'apple', price: 82 },
];

// Задача 1: Написать функцию, создающую новый массив из исходного.
// В новом массиве должны быть удалены удалены все объекты с type: 'mango', а для 'apple' цены (значение поля price) умножены на 3.
function processTank(tank) {
    const newTank = tank.filter(item => item.type !== 'mango');
    return newTank.map(item => item.type === 'apple' ? { ...item, price: item.price * 3 } : item);
};

// Задача 2: Написать функцию, меняющую исходный массив: удалить все объекты с type: 'potato', а для 'apple' цены умножены на 2.
function modifyTank(tank) {
    const newTank = tank.filter(item => item.type !== 'potato');
    return newTank.map(item => item.type === 'apple' ? { ...item, price: item.price * 2 } : item);
};

// Я написал третью функцию, потому что эти функции делают одно и тоже, и можно написать общую функцию, в реальной разработке
// лучше не писать дублируещиеся функции, так будет переполняться кодовая база, также придется тестировать две функции вместо одной.
function handleTank({ tank, toRemove, toMultiple, toMultipleBy }) {
    console.log(toRemove);
    const newTank = tank.filter(item => item.type !== toRemove);
    return newTank.map(item => item.type === toMultiple ? { ...item, price: item.price * toMultipleBy } : item);
}

const newTank1 = processTank(tank);
console.log("Результат задачи 1:", newTank1);

const newTank2 = modifyTank(tank);
console.log("Результат задачи 2:", newTank2);

const newTank3 = handleTank({ tank, toRemove: 'mango', toMultiple: 'apple', toMultipleBy: 3 })
console.log("Результат задачи 1 с общей функцией:", newTank1);

const newTank4 = handleTank({ tank, toRemove: 'potato', toMultiple: 'apple', toMultipleBy: 2 })
console.log("Результат задачи 2 с общей функцией:", newTank2);
