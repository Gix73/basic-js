const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(value){
    let tableData = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.arr = [];
    for(let i = 0; i < tableData.length; i++){
      this.arr[i] = [];
        for(let j = 0; j < tableData.length; j++){
          this.arr[i][j]= tableData[j];  
        }
      tableData = tableData.substr(1, tableData.length-1) + tableData[0];
    }

    if(value == false){
      this.reversed = 1;
    }else if(value == true || value == "undefined"){
      this.reversed = 0;
    }
  }

  encrypt(message, key) {
    if(message == undefined || key == undefined){
      throw new Error;
    }else{
      message = message.toUpperCase();
      key = key.toUpperCase();
      let newkey="";
      let counter = 0;
      this.newMessage = "";
      for (let i = 0; i < message.length; i++){
        if(counter >= key.length){
          counter = 0;
        }
        if(message[i]== " "){
          newkey += " ";
        }else{
          newkey += key[counter++];
        }
      }

      for(let i = 0; i < newkey.length; i++){
        if(this.arr[0].indexOf(message[i]) == -1){
          this.newMessage += message[i];
        }else{
          this.newMessage += this.arr[this.arr[0].indexOf(message[i])][this.arr[0].indexOf(newkey[i])];
        }
      }
    }
    if(this.reversed == 1){
      return this.newMessage.split("").reverse().join("");
    }else{
      return this.newMessage;
    }
    
  }    

  decrypt(encryptedMessage, key) {
    if(encryptedMessage == undefined || key == undefined){
      throw new Error;
    }else{
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
      let newkey="";
      let counter = 0;
      this.newMessage = "";
      for (let i = 0; i < encryptedMessage.length; i++){
        if(counter >= key.length){
          counter = 0;
        }
        if(encryptedMessage[i]== " "){
          newkey += " ";
        }else{
          newkey += key[counter++];
        }
      }

      for(let i = 0; i < newkey.length; i++){
        if(this.arr[0].indexOf(encryptedMessage[i]) == -1){
          this.newMessage += encryptedMessage[i];
        }else{
          this.newMessage += this.arr[0][this.arr[this.arr[0].indexOf(newkey[i])].indexOf(encryptedMessage[i])];
        }
      } 
    }
    if(this.reversed == 1){
      return this.newMessage.split("").reverse().join("");
    }else{
      return this.newMessage;
    }
  }

};

module.exports = VigenereCipheringMachine;
