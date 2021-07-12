let input = prompt('What would like to do?');
//let newTodo = prompt('Enter new todo');
let storeList = ['Read a book', 'Go to school']

while (input.toLowerCase() !== 'quit' && input.toLowerCase() !== 'q') {

    if (input.toLowerCase() === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        storeList.push(newTodo)
        console.log(`${newTodo} added to the list`)
    }
    else if (input.toLowerCase() === 'list') {
        console.log('*******************')
        for (let i = 0; i < storeList.length; i++) {
            console.log(`${i}: ${storeList[i]} `)
        }
        console.log('*******************')
    }
    else if (input.toLowerCase() == 'delete') {
        const deleteNum = parseInt(prompt('Enter the index you want to delete:'));
        if (!Number.isNaN(deleteNum)) {
            const deleted = storeList.splice(deleteNum, 1);
            console.log(`Ok, you deleted ${deleted[0]}`);
        }
        else {
            console.log('Invalid index.')
        }
    }
    input = prompt('What would like to do?')
}
console.log('Ok, you quit the program.')
