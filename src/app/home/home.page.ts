import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../api/user.service';
import { GetapiService } from '../servicio/getapi.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  getdata: any[] = [];

  public form: FormGroup;


  constructor(public _services: GetapiService, public RestServices: RestService, public formBuilder: FormBuilder) { }


  ngOnInit(): void {

    this.form = this.formBuilder.group({

      Nombre: [],
      NombreArchivo: [],
      Ruta: [],
      Archivo: []

    });

    //this.form = this.formBuilder.group({

    //  Nombre: [],
    //  NombreArchivo: [],
    //  Ruta: [],
    //  Archivo: []

    //});


    this._services.getdata<[]>("").subscribe(data => {
      this.getdata = data
      console.log(data)

    }

    )
    

  }

  public Consultar() {

   


    this._services.getdata<[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata)

    }

    )
   
  }

 

  public enviarData() {


    this.RestServices.enviarData('https://alternos.sgc-consultores.com.ve/pruebatour/registro', {

      nombre: this.form.value.Nombre,
      nombrearchivo: this.form.value.NombreArchivo,
      ruta: this.form.value.Ruta,
      archivo: this.form.value.Archivo

    })

      .subscribe(respuesta => {

        console.log("Aspirante Enviado", this.form)
      })

  }

  public archivos: any = []

  capturarFile(event): any {

    const archivoCapturado = event.target.files[0]
    this.archivos.push(archivoCapturado)
    console.log(event.target.files);

  }





}
  


  



