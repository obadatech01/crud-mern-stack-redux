import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  address: String,
  phone: String
});

const EmployeeModel = mongoose.model('EmployeeModel', employeeSchema);

export default EmployeeModel;