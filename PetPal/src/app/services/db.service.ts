import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { SensorData } from '../shared/model.model';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbPath = '/sensorData';

  sensorDataRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) 
  { 
    this.sensorDataRef = db.object('SensorData');
  }

  getSensorData(): AngularFireObject<SensorData> {
    return this.sensorDataRef;
  }
}



