const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('connected to mongodb'))
.catch(err => console.errpr('could not connect to mongodb'))
const courseSchema = new mongoose.Schema({
    name: String,
    author: String
})

const Course = mongoose.model('course', courseSchema);
async function createCourse() {
const course = new Course({
    name: 'Node.js Course',
    author: 'Mosh'
})

const result = await course.save()
console.log(result)
}
createCourse()