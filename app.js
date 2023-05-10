/* Преобразовать пользователя до вида 
{ fullName: 'Вася Пупкин', skillNum: 2 }
*/
const users = [
{
    name: 'Вася',
    surname: 'Пупкин',
    age: 30,
    skills: ['Разработка', 'Dev0ps']
},
{
    name: 'Катя',
    surname: 'Белова',
    age: 18,
    skills: ['Дизайн']
},
]

const result = users.map(stroke => {
    return {
        fullName: `${stroke.name} ${stroke.surname}`,  
        skillNum: stroke.skills.length
    }
})

console.log(result)