const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://bolajiakanji21:Unde5085@2@bolaji.l6yuhxc.mongodb.net/?retryWrites=true&w=majority&appName=Bolaji/playground')
.then(() => console.log('connected to mongodb'))
.catch(err => console.error('could not connect to mongodb'))
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