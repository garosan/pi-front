export const DUMMY_AUDITS = [
  {
    auditId: 'WNS-1667',
    title: 'Plaza Central (id_visit: 75)',
    country: 'MEX',
    status: 'Pending',
    subTitle: 'Calibración / Round 4 2022 (Calibration Audit)',
    dateDisplay: '2022-10',
  },
  {
    auditId: 'WNS-1675',
    title: 'PLAZA CITADINA MULTIPLAZA LINDAVISTA (id_visit: 203)',
    country: 'MEX',
    status: 'Pending',
    subTitle: 'Auditoria Operativa / Round 1 2023 (Standard)',
    dateDisplay: '2023-01',
  },
  {
    auditId: 'WNS-12345',
    title: 'PLAZA LA FE No. 2023 San Nicolás de los Gza. (id_visit: 123)',
    country: 'MEX',
    status: 'Pending',
    subTitle: 'Auditoria de Relleno / Round 5 2023 (Standard)',
    dateDisplay: '2023-01',
  },
];

export const AUDIT_DISTINTIVO_H = [
  {
    id: 1,
    category: '1. Recepción de Alimentos',
    criteriaItems: [
      {
        id: 1,
        criteriaItem: 'a) Pisos, paredes y techos de fácil limpieza y en buen estado.',
        itemStatus: '',
        important: false,
      },
      {
        id: 2,
        criteriaItem: 'b) Coladeras en buen estado y sin estancamientos. Ausencia de malos olores.',
        itemStatus: '',
        important: false,
      },
      {
        id: 3,
        criteriaItem: 'c) Cuenta con iluminación que permite verificar el estado de las materias primas.',
        itemStatus: '',
        important: false,
      },
      { id: 4, criteriaItem: 'd) Focos o fuentes de luz con protección.', itemStatus: '', important: false },
      {
        id: 5,
        criteriaItem:
          'e) Báscula completa, limpia y sin presencia de oxidación en la parte de contacto con los alimentos. Se desinfecta antes y después de su uso.',
        itemStatus: '',
        important: false,
      },
      {
        id: 6,
        criteriaItem:
          'f) Envases de alimentos limpios e íntegros: libres de rupturas, abolladuras, sin señales de insectos o materia extraña con fecha de caducidad o consumo preferente vigente.',
        itemStatus: '',
        important: false,
      },
      {
        id: 7,
        criteriaItem:
          'g) Los termómetros para medir la temperatura interna de los alimentos se ajustan todos los días por punto de congelación del agua, cuando se caen o cuando se cambia bruscamente de temperatura.',
        subItems: ['1. Se verifica su funcionamiento', '2. Se limpian y desinfectan antes de su uso.'],
        itemStatus: '',
        important: false,
      },
      {
        id: 8,
        criteriaItem:
          'h) La entrega de productos se planea de antemano y se inspecciona inmediatamente de acuerdo a las características organolépticas establecidas en el inciso 5.8',
        itemStatus: '',
        important: false,
      },
      {
        id: 9,
        criteriaItem:
          'i) *Verifican las temperaturas para cada producto (llevan registros): Refrigerados máximo a 4°C / Congelados a -18°C o inferior.',
        itemStatus: '',
        important: true,
      },
      {
        id: 10,
        criteriaItem: 'j) No hay alimentos o recipientes con alimentos colocados sobre el piso.',
        itemStatus: '',
        important: false,
      },
      {
        id: 11,
        criteriaItem:
          'k) El área del vehículo del proveedor que está en contacto con los alimentos se mantiene limpia.',
        itemStatus: '',
        important: false,
      },
      {
        id: 12,
        criteriaItem: 'l) Los alimentos congelados se reciben sin signos de descongelación o recongelación.',
        itemStatus: '',
        important: false,
      },
      {
        id: 13,
        criteriaItem:
          'm) Los productos perecederos que se reciban enhielados, no están en contacto directo con el hielo.',
        itemStatus: '',
        important: false,
      },
    ],
    observations: '',
  },
  {
    id: 2,
    category: '2. Almacenamiento',
    criteriaItems: [
      {
        id: 1,
        criteriaItem: 'a) Pisos, paredes y techos de fácil limpieza y en buen estado.',
        itemStatus: '',
        important: false,
      },
      {
        id: 2,
        criteriaItem: 'b) Coladeras en buen estado y sin estancamientos. Ausencia de malos olores.',
        itemStatus: '',
        important: false,
      },
      {
        id: 3,
        criteriaItem: 'c) Cuenta con iluminación que permite verificar el estado de las materias primas.',
        itemStatus: '',
        important: false,
      },
      {
        id: 4,
        criteriaItem:
          'd) Cuenta con ventilación. En caso de ser natural cuenta con mallas de protección en buen estado.',
        itemStatus: '',
        important: false,
      },
      {
        id: 5,
        criteriaItem: 'e) Focos o fuentes de luz con protección.',
        itemStatus: '',
        important: false,
      },
      {
        id: 6,
        criteriaItem: 'f) Sin materias primas, alimentos o recipientes colocados en el piso.',
        itemStatus: '',
        important: false,
      },
      {
        id: 7,
        criteriaItem: 'g) Anaqueles de superficie inerte, limpios y en buen estado.',
        itemStatus: '',
        important: false,
      },
      {
        id: 8,
        criteriaItem: 'h) *Se aplica el procedimiento PEPS. (alimentos fechados e identificados)',
        itemStatus: '',
        important: true,
      },
      {
        id: 9,
        criteriaItem: 'i) Recipientes y envases limpios de superficie inerte, en buen estado, cubiertos y en orden.',
        itemStatus: '',
        important: false,
      },
      {
        id: 10,
        criteriaItem: 'j) Latas sin abombamientos, abolladuras o corrosión.',
        itemStatus: '',
        important: false,
      },
      {
        id: 11,
        criteriaItem: 'k) Alimentos sin presencia o rastro de plaga o mohos.',
        itemStatus: '',
        important: false,
      },
      {
        id: 12,
        criteriaItem:
          'l) Los alimentos rechazados están marcados y separados del resto de los alimentos, teniendo para ello un área específica e identificada.',
        itemStatus: '',
        important: false,
      },
    ],
    observations: '',
  },
  {
    id: 3,
    category: '3. Manejo de Productos Químicos',
    criteriaItems: [
      { id: 1, criteriaItem: 'a) Área limpia, seca y en orden.', itemStatus: '', important: false },
      {
        id: 2,
        criteriaItem: 'b) *Plaguicidas identificados, en su envase original y almacenados bajo llave.',
        itemStatus: '',
        important: true,
      },
      { id: 3, criteriaItem: 'Subquestion 2.2', itemStatus: '', important: false },
      {
        id: 4,
        criteriaItem: null,
        subItems: [
          '1. Productos químicos en recipientes exclusivos, etiquetados y cerrados.',
          '2. Control estricto en la distribución y uso de los mismos.',
          '3. Indicar su toxicidad, empleo y medidas en caso de contacto o ingestión.',
          '',
        ],
        itemStatus: '',
        important: false,
      },
    ],
    observations: '',
  },
  {
    id: 4,
    category: '4. Refrigeración',
    subCategories: [
      {
        subCategoryName: '4.1 Refrigeradores',
        subCategoryItems: [
          {
            id: 1,
            subCategoryItem: 'a) *Temperatura interna de los alimentos máximo a 4°C.',
            status: '',
            important: true,
          },
          {
            id: 2,
            subCategoryItem:
              'b) Los termómetros para medir la temperatura de los alimentos se ajustan todos los días por punto de congelación del agua, cuando se caen o cuando se cambia bruscamente de temperatura.',
            subItems: ['1. Se verifica su funcionamiento', '2. Se limpian y desinfectan antes de su uso.'],
            status: '',
            important: false,
          },
          {
            id: 3,
            subCategoryItem: 'c) Termómetro de la unidad limpio, visible, funcionando y en buen estado.',
            status: '',
            important: false,
          },
          {
            id: 4,
            subCategoryItem: 'd) Equipo limpio y en buen estado. (puertas, empaques, anaqueles y componentes)',
            status: '',
            important: false,
          },
          {
            id: 5,
            subCategoryItem:
              'e) Alimentos en recipientes íntegros, limpios y cerrados, conforme al apéndice normativo. No se guardan diferentes tipos de alimentos en un mismo recipiente.',
            status: '',
            important: false,
          },
          {
            id: 6,
            subCategoryItem: 'f) *Se aplica el procedimiento PEPS. (alimentos fechados e identificados)',
            status: '',
            important: true,
          },
          {
            id: 7,
            subCategoryItem: 'g) Alimentos crudos colocados en la parte inferior del refrigerador.',
            status: '',
            important: false,
          },
          {
            id: 8,
            subCategoryItem: 'h) Registros de temperaturas internas de los alimentos.',
            status: '',
            important: false,
          },
          {
            id: 9,
            subCategoryItem: 'i) Registros de temperaturas de la unidad.',
            status: '',
            important: false,
          },
          {
            id: 10,
            subCategoryItem:
              'j) Los focos o fuentes de luz cuentan con protección o son de material que impida astillamiento.',
            status: '',
            important: false,
          },
        ],
      },
      {
        subCategoryName: '4.2 Cámaras de refrigeración',
        subCategoryItems: [],
      },
    ],
    observations: '',
  },
  {
    id: 5,
    category: '5. Congelación',
    categoryQuestions: [
      { id: 1, question: 'Subquestion 2.1', answer: '' },
      { id: 2, question: 'Subquestion 2.2', answer: '' },
      // ... other subquestions
    ],
    observations: '',
  },
  {
    id: 6,
    category: '6. Área de Cocina y Bar',
    categoryQuestions: [
      { id: 1, question: 'Subquestion 2.1', answer: '' },
      { id: 2, question: 'Subquestion 2.2', answer: '' },
      // ... other subquestions
    ],
    observations: '',
  },
  {
    id: 7,
    category: '7. Preparación de Alimentos',
    categoryQuestions: [
      { id: 1, question: 'Subquestion 2.1', answer: '' },
      { id: 2, question: 'Subquestion 2.2', answer: '' },
      // ... other subquestions
    ],
    observations: '',
  },
  {
    id: 8,
    category: '8. Área de Servicio',
    categoryQuestions: [
      { id: 1, question: 'Subquestion 2.1', answer: '' },
      { id: 2, question: 'Subquestion 2.2', answer: '' },
      // ... other subquestions
    ],
    observations: '',
  },
  {
    id: 9,
    category: '9. Agua y Hielo',
    categoryQuestions: [
      { id: 1, question: 'Subquestion 2.1', answer: '' },
      { id: 2, question: 'Subquestion 2.2', answer: '' },
      // ... other subquestions
    ],
    observations: '',
  },
  {
    id: 10,
    category: '10. Servicios Sanitarios para Empleados',
    criteriaItems: [
      { id: 1, criteriaItem: 'a) Área limpia.', itemStatus: '', important: false },
      {
        id: 2,
        criteriaItem: 'b) Cuenta con:',
        subItems: [
          'Lavabo.',
          'Agua corriente.',
          'Jabón antibacterial líquido.',
          'Cepillo en solución desinfectante',
          'Toallas desechables o secador de aire para manos.',
          'Bote para basura provisto de una bolsa de plástico y tapa oscilante, de pedal o cualquier otro dispositivo o acción que evite contaminación.',
          'Rótulos o ilustraciones donde se haga hincapié en el lavado de manos después del uso de sanitario.',
        ],
        itemStatus: '',
        important: false,
      },
      {
        id: 2,
        criteriaItem: 'c) El WC cuent con:',
        subItems: [
          'Agua corriente.',
          'Papel sanitario.',
          'Bote para basura provisto de una bolsa de plástico y tapa oscilante, de pedal o cualquier otro dispositivo o acción que evite contaminación.',
        ],
        itemStatus: '',
        important: false,
      },
      {
        id: 2,
        criteriaItem: 'd) Cuenta con casilleros o un área específica para colocar objetos personales.',
        itemStatus: '',
        important: false,
      },
    ],
    observations: '',
  },
  {
    id: 11,
    category: '11. Manejo de la basura',
    criteriaItems: [
      {
        id: 1,
        criteriaItem:
          'a) Área general de basura limpia y separada del área de alimentos. Contenedores limpios e identificados, en buen estado con tapa. (Con bolsa de plástico según el caso)',
        itemStatus: '',
        important: false,
      },
      {
        id: 2,
        criteriaItem:
          'b) Los botes de basura están identificados por tipo de desecho orgánico e inorgánico cuentan con bolsa de plástico y están tapados mientras no estén en uso continuo.',
        itemStatus: '',
        important: false,
      },
      {
        id: 3,
        criteriaItem:
          'c) Se evita la acumulación excesiva de basura, en las áreas de manejo de alimentos. Los depósitos se lavan y desinfectan al final dela jornada.',
        itemStatus: '',
        important: false,
      },
    ],
    observations: '',
  },
  {
    id: 12,
    category: '12. Control de Plagas',
    criteriaItems: [
      { id: 1, criteriaItem: 'a) *Ausencia de plagas.', itemStatus: '', important: true },
      {
        id: 2,
        criteriaItem: 'b) Se tiene contratado un servicio profesional para el control de plagas presentando: ',
        subItems: [
          '1. Licencia federal sanitaria expedida por la autoridad correspondiente',
          '2. Hojas de seguridad del plaguicida utilizado y registro de COFEPRIS.',
          '3. Programa de control de plagas.',
          '4. Registros e informes que amparen el servicio durante los últimos tres meses.',
          '5. Contrato de servicio vigente.',
        ],
        itemStatus: '',
        important: false,
      },
      {
        id: 3,
        criteriaItem:
          'c) Ausencia de trampas con cebos y eliminador de insectos de choque eléctrico, en el área de manejo de alimentos.',
        itemStatus: '',
        important: false,
      },
    ],
    observations: '',
  },
  {
    id: 13,
    category: '13. Personal',
    criteriaItems: [
      { id: 1, criteriaItem: 'a) Apariencia pulcra.', itemStatus: '', important: false },
      { id: 2, criteriaItem: 'b) Uniforme limpio y completo.', itemStatus: '', important: false },
      {
        id: 3,
        criteriaItem: 'c) Cabello completamente cubierto con cofia, red o turbante.',
        itemStatus: '',
        important: false,
      },
      {
        id: 4,
        criteriaItem: 'd) Manos limpias, uñas recortadas, sin esmalte, ni decoración.',
        itemStatus: '',
        important: false,
      },
      {
        id: 5,
        criteriaItem:
          'e) *El personal afectado con infecciones respiratorias, gastrointestinales o cutáneas, no labora en el área de preparación y servicio de alimentos.',
        itemStatus: '',
        important: true,
      },
      {
        id: 6,
        criteriaItem:
          'f) El personal no utiliza celulares, joyas (reloj, pulseras, anillos, aretes, etc.), u otro objecto ornamental en cara, orejas, cuello, manos, ni brazos.',
        itemStatus: '',
        important: false,
      },
      {
        id: 7,
        criteriaItem:
          'g) El personal cuenta con capacitación impartida por un consultor con registro vigente ante la SECTUR.',
        itemStatus: '',
        important: false,
      },
      {
        id: 8,
        criteriaItem: 'h) El personal demuestra la competencia en el manejo higiénico de alimentos.',
        itemStatus: '',
        important: false,
      },
      {
        id: 9,
        criteriaItem: 'i) El personal no fuma, come, masca o bebe en el área de preparación de alimentos.',
        itemStatus: '',
        important: false,
      },
    ],
    observations: '',
  },
];
