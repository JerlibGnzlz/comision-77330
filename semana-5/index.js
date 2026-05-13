import express from 'express';
import cluster from 'cluster'
import {cpus} from 'os'


const app = express();



const PORT = 3000

app.get("/", (req, res) => {
    res.send("Hello docker")
})


// const ready = async () => {
//     console.log(`server ready on port ${PORT} /pid: ${process.pid}`)
// }
// ready()


const isPramary = cluster.isPrimary
const isWorker = cluster.isWorker


 if(isPramary){
    const numCPUs = cpus().length
    console.log(`numCPUs: ${numCPUs}`)
    console.log(`isPramary: ${isPramary}`)
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
  
 }else{
     console.log(`isWorker ${isWorker}`)
 }





//   app.get("/api/simplex", (req, res) => {
//           let total = 1;
//           for (let i = 1; i < 100; i++) {
//             total = i * i;
//           }
//           return res.send({ total });
//         });


//    app.get("/api/complex", (req, res) => {
//           let total = 1;
//           for (let i = 1; i < 10000000; i++) {
//             total = i * i;
//           }
//           return  res.send({ total });
//         });







app.listen(3000, () => {
    console.log("Server on port http://localhost:3000")
})