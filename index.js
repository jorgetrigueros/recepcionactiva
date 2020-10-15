/*
$(document).ready(function () {
  var stepper = new Stepper($('.bs-stepper')[0]);
  console.log('stepper', stepper);
});*/

/*
var stepper3 = new Stepper(document.querySelector('#stepper3'), {
    animation: true
  })
*/

const FEATURE_HEADING = [
  'Selección de concesionario.<span class="text-muted"></span>',
  'Datos de mi vehículo. <span class="text-muted"></span>',
  'Servicios. <span class="text-muted"></span>',
  'Fecha de entrega. <span class="text-muted"></span>',
  'Resumen. <span class="text-muted"></span>',
];

const FEATURE_CONTENT = [
  'Seleccione el concesionario donde realizará la reparación. Puede encontrar el concesionario usando el buscador de talleres o seleccionándolo del listado de concesionarios autorizados.',
  'Para poder elaborar una oferta de servicio vinculante necesitamos algunos datos de su vehículo.',
  'Seleccione los servicios que quiere realizar.',
  'Seleccione la fecha de entrega en el taller.',
  'Resumen datos del vehículo, personales y servicio a realizar.',
];

const FEATURE_IMG = [
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17522932c40%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17522932c40%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17522932c40%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17522932c40%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17522932c40%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17522932c40%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17522932c40%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17522932c40%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17522932c40%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17522932c40%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
];

const CONCESIONARIOS = [
  {
    name: 'CONCESIONARIO DERCO',
    address: 'Av. la Marina 3333, San Miguel<br>15087, Perú',
    icons: ['car', 'car-painting', 'car-wash'],
    position: { lat: -12.0741646, lng: -77.1029096 },
  },
  {
    name: 'CASSA CONCESIONARIA',
    address: 'Av. la Marina 3423, San Miguel<br>15087, Perú',
    icons: ['car', 'damage', 'electric-car'],
    position: { lat: -12.0738339, lng: -77.1026703 },
  },
  {
    name: 'NISSAN AUTOLAND',
    address: 'Av. la Marina 3380, San Miguel<br>15097 Perú',
    icons: ['car', 'hammer-and-wrench', 'radiator'],
    position: { lat: -12.0735132, lng: -77.1031183 },
  },
  {
    name: 'TOYOTA GRUPO PANA',
    address: 'Av. la Marina 3240, San Miguel<br>15088, Perú',
    icons: ['car', 'flat-tire', 'car-wash'],
    position: { lat: -12.0735771, lng: -77.1023195 },
  },
];

const LINEAS_MANTENIMIENTO = [
  {
    id: 1,
    category: 'mantenimiento',
    name: 'Avería',
    description: 'Lorem ipsum dolor si t amet',
    amount: 400,
  },
  {
    id: 2,
    category: 'mantenimiento',
    name: 'Mantenimiento',
    description: 'Lorem ipsum dolor si t amet',
    amount: 340,
  },
  {
    id: 3,
    category: 'mantenimiento',
    name: 'Sustitución de baterías',
    description: 'Lorem ipsum dolor si t amet',
    amount: 90,
  },
  {
    id: 4,
    category: 'mantenimiento',
    name: 'Cambio de aceite / filtros',
    description: 'Lorem ipsum dolor si t amet',
    amount: 320,
  },
  {
    id: 5,
    category: 'neumaticos',
    name: 'Cambio de neumaticos',
    description: 'Lorem ipsum dolor si t amet',
    amount: 180,
  },
  {
    id: 6,
    category: 'carroceria',
    name: 'Reparación daños carrocería',
    description: 'Lorem ipsum dolor si t amet',
    amount: 190,
  },
  {
    id: 7,
    category: 'carroceria',
    name: 'Pintura carrocería',
    description: 'Lorem ipsum dolor si t amet',
    amount: 500,
  },
  {
    id: 8,
    category: 'mecanica',
    name: 'Avería motor',
    description: 'Lorem ipsum dolor si t amet',
    amount: 400,
  },
  {
    id: 9,
    category: 'mecanica',
    name: 'Sistema eléctrico',
    description: 'Lorem ipsum dolor si t amet',
    amount: 500,
  },
];

class UI {
  currentStep = 0;
  resumeData = {
    concesionario: '',
    vehiculo: {
      matricula: '',
      kms: null,
      vin: null,
    },
    servicios: [],
    cita: {
        dia: null,
        hora: null
    }
  };

  /**
   * innerHTml featureHeading
   * @param {String} content
   */
  setFeatureHeading(currentStep) {
    var featureheading = document.getElementById('featureheading');
    featureheading.innerHTML = FEATURE_HEADING[currentStep];
  }

  /**
   * innerHTml featureContent
   * @param {String} content
   */
  setFeatureContent(currentStep) {
    var featureContent = document.getElementById('featurecontent');
    featureContent.innerHTML = FEATURE_CONTENT[currentStep];
  }

  /**
   * innerHTml featureContent
   * @param {String} content
   */
  setFeatureImg(currentStep) {
    var featureImg = document.getElementById('featureImg');
    featureImg.src = FEATURE_IMG[currentStep];
  }

  /**
   * Carga la lista de concesionarois iniciales
   */
  populateConcesionarios() {
    const row = document.getElementById('listadoconce');

    CONCESIONARIOS.forEach((x) => {
      let htmlIco = '';
      for (var i = 0; i < x.icons.length; i++) {
        htmlIco += `<i class="flaticon-${x.icons[i]}"></i>`;
      }
      const cadHtml = `<div class="row">
                            <div class="col-sm">
                                <div class="card">
                                    <div class="card-body bodytaller">
                                        <h5 class="card-title">${x.name}</h5>
                                        <ul>
                                            ${htmlIco}
                                        </ul>
                                    </div>    
                                </div>
                            </div> 
                            <div class="col-sm">
                                <div class="card">
                                    <div class="card-body bodytaller">
                                        <p class="card-text">
                                            ${x.address}
                                        </p>
                                        <button class="btn btn-outline-primary" onclick="selConcesionario('${x.name}')">Seleccionar concesionario</button>
                                    </div>
                                </div>
                            </div>                            
                        </div>`;
      // row.app = cadHtml;
      row.insertAdjacentHTML('afterend', cadHtml);
    });
  }

  /**
   * Populate lineas de mantenimiento
   */
  populateLineasMatenimiento() {
    LINEAS_MANTENIMIENTO.forEach((x) => {
      const cadLi = `<li class="list-group-item d-flex justify-content-between align-items-center ">
                            <span class="item-repair" data-toggle="tooltip" data-placement="top" title="${x.description}">${x.name}</span>
                            <div class="form-check">
                                <input class="apple-switch" type="checkbox" data-id="${x.id}">
                            </div>
                     </li>`;
      const elem = document.getElementById(`items-${x.category}`);
      if (elem) {
        elem.insertAdjacentHTML('beforeend', cadLi);
      }
    });

    // eventlistener de los checkbox de las lineas de mantenimiento
    const arrChk = document.getElementsByClassName('apple-switch');
    Array.from(arrChk).forEach((element) => element.addEventListener('change', chkRepairChange));
  }

  /**
   * fill json object resume
   */
  fillResume() {
    console.log('this', this);
    const matricula = document.getElementById('inputmatricula').value;
    const kms = document.getElementById('inputKms').value;
    const vin = document.getElementById('inputVin').value;
    const objVehiculo = {
      matricula,
      kms,
      vin,
    };
    this.resumeData.vehiculo = objVehiculo;
  }

  /**
   * fill invoice data
   */
  fillInvoice() {
    const bodyElement = document.getElementById('bodyInvoice');
    this.resumeData.servicios.forEach((x) => {
      const objInfo = LINEAS_MANTENIMIENTO.find((item) => item.id == x);
      if (objInfo) {
        const markupRow = `<tr>
                                    <td>${objInfo.category}</td> 
                                    <td>${objInfo.name}</td>
                                    <td class="text-center">1</td>
                                    <td class="text-right"></td>
                                </tr>`;
        bodyElement.insertAdjacentHTML('beforeend', markupRow);
      }
    });

    // Fill resume
    const elementFechaCita = document.getElementById('fechaCita');
    const elementMatricula = document.getElementById('matvh');
    const elementKms = document.getElementById('kmsvh');
    const elementVin = document.getElementById('vinvh');
    elementFechaCita.innerHTML = ui.resumeData.cita.dia + ' ' +  ui.resumeData.cita.hora;
    elementMatricula.innerHTML = ui.resumeData.vehiculo.matricula;
    elementKms.innerHTML = ui.resumeData.vehiculo.kms;
    elementVin.innerHTML = ui.resumeData.vehiculo.vin;

  }

  /**
   * Set a marker in the map
   * @param {map} map
   * @param {object} opcjeMarkera
   */
  dodajMarker(map, opcjeMarkera) {
    opcjeMarkera.map = map;
    const marker = new google.maps.Marker(opcjeMarkera);
    google.maps.event.addListener(marker, 'click', function (event) {
      // console.log(event.vb.srcElement.attributes);
      const conce = event.vb.srcElement.attributes.title.value;
      selConcesionario(conce);
    });
  }

  /**
   * fill google maps
   */
  fillMapConcesionarios() {
    // The location of Peru / lima
    const derco = { lat: -12.0741646, lng: -77.1029096 };
    // The map, centered at Lima
    const map = new google.maps.Map(document.getElementById('map'), { zoom: 18, center: derco });
    // Colocamos ls markers para cada concesionario
    CONCESIONARIOS.forEach((x) =>
      this.dodajMarker(map, { position: new google.maps.LatLng(x.position.lat, x.position.lng), title: x.name })
    );
  }

  showAlert(message, className) {
    const div = document.createElement('div');
    //Add className
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    //Get Form
    const form = document.querySelector('#book-form');
    //Insert alert
    container.insertBefore(div, form);
    // Timeout after 3 sec
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  setVisibilidadElement(elementId, isVisible) {
     const element = document.getElementById(elementId);
     element.style.display = isVisible ? 'block' : 'none';
  }

  /**
   *
   * @param {string} label
   * @param {string} value
   * @param {HtmlElement} parent
   */
  createOption(label, value, parent) {
    var option = document.createElement('option');
    option.value = value;
    option.text = label;
    parent.appendChild(option);
  }
}

// local functions
function initMap() {
  ui.fillMapConcesionarios();
}

function selConcesionario(conce) {
  ui.resumeData.concesionario = conce;
  const conceElement = document.getElementById('concesionarioSelected');
  conceElement.innerHTML = 'Concesionario seleccionado: <strong>' + conce + '</strong>';
  stepper1.next();
}

/**
 * Agregar al resumen el mantenimiento
 */
function chkRepairChange() {
  const id = this.getAttribute('data-id');
  if (ui.resumeData.servicios.includes(id)) {
    ui.resumeData.servicios = ui.resumeData.servicios.filter((x) => x !== id);
  } else {
    ui.resumeData.servicios.push(id);
  }
}

function selHoraCita(hora) {
    ui.resumeData.cita.hora = hora;
    $('#myModal').modal('hide');
    stepper1.next();
}

function reservarCita() { 
    //ui.setVisibilidadElement('main', false);   
    //ui.setVisibilidadElement('spinner', true);
    setTimeout(function() {
        //ui.setVisibilidadElement('main', true);   
        //ui.setVisibilidadElement('spinner', false);    
        // Mostrar panel
        ui.setVisibilidadElement('alert', true); 
        ui.setVisibilidadElement('botonera-final', false); 
    }, 3500);   
}

//Instantiate UI
const ui = new UI();
var stepper1Node = document.querySelector('#stepper1');
var stepper1 = new Stepper(document.querySelector('#stepper1'));

stepper1Node.addEventListener('show.bs-stepper', function (event) {
  console.warn('show.bs-stepper', event);
  console.log(event.detail.indexStep);
  ui.currentStep = event.detail.indexStep;
  // Feature heading
  ui.setFeatureHeading(ui.currentStep);
  // Feature content
  ui.setFeatureContent(ui.currentStep);
  // feature img
  ui.setFeatureImg(ui.currentStep);
  // fillResume
  ui.fillResume();
  if (ui.currentStep == 4) {
    ui.fillInvoice();
  }
});
// stepper1Node.addEventListener('shown.bs-stepper', function (event) {
//   console.warn('shown.bs-stepper', event);
// });

// Feature heading
ui.setFeatureHeading(ui.currentStep);
// Feature content
ui.setFeatureContent(ui.currentStep);
// feature img
ui.setFeatureImg(ui.currentStep);

// Populate concesionarios and lineas mantenimiento
ui.populateConcesionarios();
ui.populateLineasMatenimiento(ui.resumeData);

document.addEventListener('DOMContentLoaded', function () {
  //   var calendarEl = document.getElementById('calendar');
  //   var calendar = new FullCalendar.Calendar(calendarEl, {
  //     initialView: 'dayGridMonth',
  //     contentHeight: 400,
  //     events: [
  //       {
  //         title: '',
  //         start: '2020-10-14T09:00:00',
  //         end: '2020-10-14T21:00:00',
  //         display: 'background'
  //       },
  //       {
  //         title: '',
  //         start: '2020-10-17T09:00:00',
  //         end: '2020-10-17T21:00:00',
  //         display: 'background'
  //       },
  //     ],
  //   });
  //   calendar.setOption('locale', 'es');
  //   calendar.render();
});

$(document).ready(function () {
  var appointments = new Array();

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  console.log('todayYear', todayYear);
  console.log('todayMonth', todayMonth);
  console.log('todayDay', todayDay);

  var appointment1 = {
    id: 'id1',
    status: 'outOfOffice',
    background: '#f00',
    subject: ' ',
    description: 'George brings projector for presentations.',
    location: '',
    calendar: 'c1',
    start: new Date(todayYear, todayMonth, todayDay, 9, 0, 0),
    end: new Date(todayYear, todayMonth, todayDay, 18, 0, 0),
  };

  var appointment2 = {
    id: 'id2',
    background: '#f00',
    subject: ' ',
    description: '',
    location: '',
    calendar: 'c1',
    start: new Date(todayYear, todayMonth, todayDay + 1, 7, 0, 0),
    end: new Date(todayYear, todayMonth, todayDay + 1, 18, 0, 0),
  };

  appointments.push(appointment1);
  appointments.push(appointment2);

  // prepare the data
  var source = {
    dataType: 'array',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'background', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'calendar', type: 'string' },
      { name: 'start', type: 'date' },
      { name: 'end', type: 'date' },
    ],
    id: 'id',
    localData: appointments,
  };
  var adapter = new $.jqx.dataAdapter(source);
  $('#scheduler').jqxScheduler({
    date: new $.jqx.date(todayYear, todayMonth, todayDay),
    width: 850,
    height: 600,
    source: adapter,
    showLegend: false,
    ready: function () {
      $('#scheduler').jqxScheduler('ensureAppointmentVisible', 'id1');
    },
    resources: {
      colorScheme: 'scheme05',
      dataField: 'calendar',
      source: new $.jqx.dataAdapter(source),
    },
    appointmentDataFields: {
      background: 'background',
      subject: 'subject',
      from: 'start',
      to: 'end',
      id: 'id',
      description: 'description',
      resourceId: 'calendar',
    },
    view: 'weekView',
    views: ['dayView', 'weekView', 'monthView'],
  });
  
  $("#scheduler").on('cellClick', function (event) {
    var args = event.args;
    var cell = args.cell;
    var date = args.date;
    console.log('date', date);
    const cita = date.day() + '/' + date.month() + '/' + date.year();
    ui.resumeData.cita.dia = cita;
    $('#myModal').modal('show');
});  
});



/*
(function ($) {
  fakewaffle.responsiveTabs(['xs', 'sm']);
})(jQuery);*/
