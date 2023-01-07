import mongoose,{connect} from "mongoose";
mongoose.set("strictQuery", false);

function connects(){
  return connect('mongodb://127.0.0.1:27017/student')
  .then(()=>{
    console.log("Db Connected");
  }).catch((error:any)=>{
    console.log(error);
  })
}
export default connects;