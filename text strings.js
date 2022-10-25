
let user = 'Rodrigo '
let lastName = 'Lopez'

//estudiante
let student = user + lastName

//estudiante mayuscula
let studentMayus = student.toUpperCase()

//estudiante minuscula
let studentMinus = student.toLocaleLowerCase()

//numero de letras contando los espacios
let numChart = student.length

//primera letra del nombre
let capital = user.charAt(0)

//ultima letra del apellido
let final = lastName.slice(-1)

//eliminación de espacios en variable estudiante
let together = student.split(' ').join('')


//el nombre está contenido en el avariable estudiante?
let include =  student.includes(user)



