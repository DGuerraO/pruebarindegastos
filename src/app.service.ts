import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  // EJERCICIO 1
  async getConvertedAmount(from, to, amount) {
    try {
      const URL = `https://free.currconv.com/api/v7/convert?q=${from}_${to},${to}_${from}&compact=ultra&apiKey=cacb99669510e1d11e20`;
      const response = await axios.get(URL);
      const d = response.data;
      const exchangeTo = d[`${to}_${from}`];
      const convertedAmount = (amount/exchangeTo).toFixed(2);
      const objResponse = this.output({ from, to, convertedAmount });
      return objResponse;    
    } catch (err) {
      console.error(err);
    }
  }

  // EJERCICIO 2
  getDaysUntilMyBirthday(birthdate) {
    // Trabajar input fecha
    let f = birthdate.split('-');
    let date = new Date(f[2], f[1], f[0]);

    let day = date.getUTCDate();
    let month = date.getUTCMonth();
    let year = date.getUTCFullYear();

    // Calcular fecha cumpleaños
    let today = new Date();
    let myBirthday = new Date(today.getUTCFullYear(), month - 1, day);

    // Verificar si cumpleaños ya pasó
    if (today.getTime() > myBirthday.getTime()) {
      myBirthday.setFullYear(myBirthday.getFullYear()+1);
    }

    // Calcular diferencia de tiempo
    let diff = myBirthday.getTime() - today.getTime();

    // Transformar segundos a días
    let days = Math.floor(diff/(1000*60*60*24));

    return this.output({ daysRemaining: days });
  }

  // EJERCICIO 3
  getTheNumber(first, second) {
    let final: string = '';
    for (let i = 1; i <= second; i++) {
      final = final + (first*i);
    }

    let largo = final.length;

    // Evaluar si el largo del string es mayor a 9, si lo es el string es cortado en 9 dígitos.
    if (largo > 9) {  
      final = final.slice(0, 9);    
    }

    return this.output({ finalNumber: final });
  }

  output(data) {
    return JSON.stringify(data);
  }
}
