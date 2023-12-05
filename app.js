const express = require('express')//יבוא
const app = express()//מימוש שרת

const env = require('dotenv')//- בקובץ env להשתמש במשתני מערכת  
env.config()//מימוש
 
const cors=require('cors')
app.use(cors())

const bodyParser = require('body-parser')//יבוא ספריה להמרה לגיסון את מה שמגיע מהקליינט
app.use(bodyParser.json())// מימוש שלו
 

const mongoose = require('mongoose')//התקנת ספריה להתחברות למונגו



mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
    console.log('connect to mongo');
  
}).catch(err => { "myErr" + err })



// חלוקה לשכבות:
// routes-שכבת ההפניות לפונקציות המתאימות בקונטרולרים, מקביל לקונטרולרים בניתוח מערכות
//controllers -  מקביל לBLL- שכבת הלוגיקה
// models- שכבת הסכמות, מקביל לקלאסים - תבנית של אובייקט


// מעכשיו יהיה כך :

// יבוא הראוטרים הקיימים
const userRouter = require('./routes/userRouter')
app.use('/user', userRouter)

const teacherDataRouter = require('./routes/teacherDataRouter')
app.use('/teacherData', teacherDataRouter)

const lessonRouter = require('./routes/lessonRouter')
app.use('/lesson', lessonRouter)

const categoryRouter = require('./routes/categoryRouter')
app.use('/category', categoryRouter)



app.listen(8000, () => {
    console.log('listening- 3030');
})