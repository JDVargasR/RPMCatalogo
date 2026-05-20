// ============================================
// BASE DE DATOS DE PRODUCTOS
// ============================================

const productos = {
    Silenciadores: [
        {
            id: 1,
            nombre: "Silenciador Deportivo Premium",
            precio: 259.99,
            imagen: "../Img/Silenciadores/silenciador1.jpg",
            imagenes: [
                "../Img/Silenciadores/silenciador1.jpg",
                "../Img/Silenciadores/silenciador1-2.jpg",
                "../Img/Silenciadores/silenciador1-3.jpg"
            ],
            descripcion: "Silenciador de alta performance con reducción de ruido del 40%. Fabricado en acero inoxidable 304 de grado marino. Compatible con múltiples modelos de vehículos.",
            especificaciones: {
                material: "Acero Inoxidable 304",
                diametro: "2.5 pulgadas",
                peso: "3.2 kg",
                largo: "45 cm",
                garantia: "2 años"
            }
        },
        {
            id: 2,
            nombre: "Silenciador Turbo Rosca",
            precio: 189.99,
            imagen: "../Img/Silenciadores/silenciador2.jpg",
            imagenes: [
                "../Img/Silenciadores/silenciador2.jpg",
                "../Img/Silenciadores/silenciador2-2.jpg"
            ],
            descripcion: "Sistema de escape con entrada de rosca universal. Rendimiento superior con bajo peso. Ideal para tuning.",
            especificaciones: {
                material: "Aluminio y Acero",
                diametro: "2.75 pulgadas",
                peso: "2.8 kg",
                largo: "42 cm",
                garantia: "1.5 años"
            }
        },
        {
            id: 3,
            nombre: "Silenciador Profesional Industrial",
            precio: 329.99,
            imagen: "../Img/Silenciadores/silenciador3.jpg",
            imagenes: [
                "../Img/Silenciadores/silenciador3.jpg"
            ],
            descripcion: "Silenciador profesional para uso intensivo. Reducción máxima de ruido con flujo optimizado.",
            especificaciones: {
                material: "Acero Inoxidable 316",
                diametro: "3 pulgadas",
                peso: "4.5 kg",
                largo: "50 cm",
                garantia: "3 años"
            }
        }
    ],
    Catalizadores: [
        {
            id: 4,
            nombre: "Catalizador D100 OBD I - 1800CC",
            precio: 23500.00,
            imagen: "../Img/Catalizadores/D100/D100_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D100/D100_Frontal.jpeg",
                "../Img/Catalizadores/D100/D100_Horizontal.jpeg",
                "../Img/Catalizadores/D100/D100_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD I, hasta cilindraje 1800CC, ideal para modelos anteriores a 1996.",
            especificaciones: {
                estandar: "Euro 5",
                tipo: "OBD I",
                bocas: "2.5 Pulgadas",
                largo: "12 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        // Placeholder slots para completar: 10 items listos para que cambies carpeta/nombre/imagenes
        {
            id: 16,
            nombre: "Catalizador D200 OBD I - 5100CC",
            precio: 31000.00,
            imagen: "../Img/Catalizadores/D200/D200_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D200/D200_Frontal.jpeg",
                "../Img/Catalizadores/D200/D200_Horizontal.jpeg",
                "../Img/Catalizadores/D200/D200_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD I, hasta cilindraje 5100CC, ideal para modelos anteriores a 1996.",
            especificaciones: {
                estandar: "Euro 5",
                tipo: "OBD I",
                bocas: "2.5 pulgadas",
                largo: "13 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 17,
            nombre: "Catalizador D300 Corto OBD II - 2200CC",
            precio: 36000.00,
            imagen: "../Img/Catalizadores/D300Corto/D300_Corto_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D300Corto/D300_Corto_Frontal.jpeg",
                "../Img/Catalizadores/D300Corto/D300_Corto_Horizontal.jpeg",
                "../Img/Catalizadores/D300Corto/D300_Corto_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 2200CC, ideal para cualquier modelo posterior a 1996.",
            especificaciones: {
                estandar: "Euro 5",
                tipo: "OBD II",
                bocas: "2.5 pulgadas",
                largo: "12 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 19,
            nombre: "Catalizador D400 V6 OBD I - 5100CC",
            precio: 32000.00,
            imagen: "../Img/Catalizadores/D400V6/D400_V6_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D400V6/D400_V6_Frontal.jpeg",
                "../Img/Catalizadores/D400V6/D400_V6_Horizontal.jpeg",
                "../Img/Catalizadores/D400V6/D400_V6_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD I, hasta cilindraje 5100CC, ideal para modelos con motor V6 anteriores a 1996.",
            especificaciones: {
                estandar: "Euro 5",
                tipo: "OBD I",
                bocas: "2.5 pulgadas",
                largo: "15 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 20,
            nombre: "Catalizador D400 V8 OBD I - 5100CC",
            precio: 45000.00,
            imagen: "../Img/Catalizadores/D400V8/D400_V8_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D400V8/D400_V8_Frontal.jpeg",
                "../Img/Catalizadores/D400V8/D400_V8_Horizontal.jpeg",
                "../Img/Catalizadores/D400V8/D400_V8_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD I, hasta cilindraje 5100CC, ideal para modelos con motor V8 anteriores a 1996.",
            especificaciones: {
                estandar: "Euro 5",
                tipo: "OBD I",
                bocas: "2.5 pulgadas",
                largo: "15 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 21,
            nombre: "Catalizador D600 Corto V6 OBD II - 4200CC",
            precio: 42000.00,
            imagen: "../Img/Catalizadores/D600Corto/D600_Corto_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D600Corto/D600_Corto_Frontal.jpeg",
                "../Img/Catalizadores/D600Corto/D600_Corto_Horizontal.jpeg",
                "../Img/Catalizadores/D600Corto/D600_Corto_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 4200CC, ideal para modelos con motor V6 posteriores a 1996.",
            especificaciones: {
                estandar: "Euro 5",
                tipo: "OBD II",
                bocas: "2.5 pulgadas",
                largo: "13 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 22,
            nombre: "Catalizador D600 Largo V6 OBD II - 4200CC",
            precio: 42000.00,
            imagen: "../Img/Catalizadores/D600Largo/D600_Largo_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D600Largo/D600_Largo_Frontal.jpeg",
                "../Img/Catalizadores/D600Largo/D600_Largo_Horizontal.jpeg",
                "../Img/Catalizadores/D600Largo/D600_Largo_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 4200CC, ideal para modelos con motor V6 posteriores a 1996.",
            especificaciones: {
                estandar: "Euro 5",
                tipo: "OBD II",
                bocas: "2.5 pulgadas",
                largo: "13 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 23,
            nombre: "Catalizador D600 con Sensor V6 OBD II - 4200CC",
            precio: 45000.00,
            imagen: "../Img/Catalizadores/D600Sensor/D600_Sensor_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D600Sensor/D600_Sensor_Frontal.jpeg",
                "../Img/Catalizadores/D600Sensor/D600_Sensor_Horizontal.jpeg",
                "../Img/Catalizadores/D600Sensor/D600_Sensor_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 4200CC, ideal para modelos con motor V6 con sensor en el catalizador posteriores a 1996.",
            especificaciones: {
                estandar: "Euro 5",
                tipo: "OBD II",
                bocas: "2.5 pulgadas",
                largo: "13 Pulgadas",
                garantia: "Ante defectos de Fabrica"
                }
        },
        {
            id: 24,
            nombre: "Catalizador D904 Corto V8 OBD II - 6700CC",
            precio: 57000.00,
            imagen: "../Img/Catalizadores/D904Corto/D904_Corto_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D904Corto/D904_Corto_Frontal.jpeg",
                "../Img/Catalizadores/D904Corto/D904_Corto_Horizontal.jpeg",
                "../Img/Catalizadores/D904Corto/D904_Corto_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 6700CC, ideal para modelos con motor V8 posteriores a 1996.",
            especificaciones: {
                estandar: "Euro 5",
                tipo: "OBD II",
                bocas: "2.5 pulgadas",
                largo: "13 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 25,
            nombre: "Catalizador D904 Largo V8 OBD II - 6700CC",
            precio: 57000.00,
            imagen: "../Img/Catalizadores/D904Largo/D904_Largo_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D904Largo/D904_Largo_Frontal.jpeg",
                "../Img/Catalizadores/D904Largo/D904_Largo_Horizontal.jpeg",
                "../Img/Catalizadores/D904Largo/D904_Largo_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 6700CC, ideal para modelos con motor V8 posteriores a 1996.",
            especificaciones: {
                estandar: "Euro 5",
                tipo: "OBD II",
                bocas: "2.5 pulgadas",
                largo: "13 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        }
    ],
    Flexibles: [
        {
            id: 7,
            nombre: "Flexible 1 3/4 * 4 * 8 / Con Nipple",
            precio: 5500.00,
            imagen: "../Img/Flexibles/1344.png",
            imagenes: [
                "../Img/Flexibles/1344.png"
            ],
            descripcion: "Flexible de 1 3/4 * 4 * 8 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "1 3/4 Pulgadas",
                largo: "4 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 8,
            nombre: "Flexible 1 3/4 * 6 * 10 / Con Nipple",
            precio: 6000.00,
            imagen: "../Img/Flexibles/1346.png",
            imagenes: [
                "../Img/Flexibles/1346.png"
            ],
            descripcion: "Flexible de 1 3/4 * 6 * 10 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "1 3/4 Pulgadas",
                largo: "6 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 9,
            nombre: "Flexible 1 3/4 * 8 * 12 / Con Nipple",
            precio: 6500.00,
            imagen: "../Img/Flexibles/1348.png",
            imagenes: [
                "../Img/Flexibles/1348.png"
            ],
            descripcion: "Flexible de 1 3/4 * 8 * 12 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "1 3/4 Pulgadas",
                largo: "8 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 10,
            nombre: "Flexible 2 * 4 * 8 / Con Nipple",
            precio: 6000.00,
            imagen: "../Img/Flexibles/24.png",
            imagenes: [
                "../Img/Flexibles/24.png"
            ],
            descripcion: "Flexible de 2 * 4 * 8 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "2 Pulgadas",
                largo: "4 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 11,
            nombre: "Flexible 2 * 6 * 10 / Con Nipple",
            precio: 6500.00,
            imagen: "../Img/Flexibles/26.png",
            imagenes: [
                "../Img/Flexibles/26.png"
            ],
            descripcion: "Flexible de 2 * 6 * 10 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "2 Pulgadas",
                largo: "6 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 12,
            nombre: "Flexible 2 * 8 * 12 / Con Nipple",
            precio: 7000.00,
            imagen: "../Img/Flexibles/28.png",
            imagenes: [
                "../Img/Flexibles/28.png"
            ],
            descripcion: "Flexible de 2 * 8 * 12 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "2 Pulgadas",
                largo: "8 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 13,
            nombre: "Flexible 2 1/4 * 6 * 10 / Con Nipple",
            precio: 8500.00,
            imagen: "../Img/Flexibles/2146.png",
            imagenes: [
                "../Img/Flexibles/2146.png"
            ],
            descripcion: "Flexible de 2 1/4 * 6 * 10 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "2 1/4 Pulgadas",
                largo: "6 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 14,
            nombre: "Flexible 2 1/4 * 8 * 12 / Con Nipple",
            precio: 9000.00,
            imagen: "../Img/Flexibles/2148.png",
            imagenes: [
                "../Img/Flexibles/2148.png"
            ],
            descripcion: "Flexible de 2 1/4 * 8 * 12 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "2 1/4 Pulgadas",
                largo: "8 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 15,
            nombre: "Flexible 2 1/2 * 6 * 10 / Con Nipple",
            precio: 8500.00,
            imagen: "../Img/Flexibles/2126.png",
            imagenes: [
                "../Img/Flexibles/2126.png"
            ],
            descripcion: "Flexible de 2 1/2 * 6 * 10 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "2 1/2 Pulgadas",
                largo: "6 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 16,
            nombre: "Flexible 2 1/2 * 8 * 12 / Con Nipple",
            precio: 9000.00,
            imagen: "../Img/Flexibles/2128.png",
            imagenes: [
                "../Img/Flexibles/2128.png"
            ],
            descripcion: "Flexible de 2 1/2 * 8 * 12 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "2 1/2 Pulgadas",
                largo: "8 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 17,
            nombre: "Flexible 3 * 6 * 10 / Con Nipple",
            precio: 16000.00,
            imagen: "../Img/Flexibles/36.png",
            imagenes: [
                "../Img/Flexibles/36.png"
            ],
            descripcion: "Flexible de 3 * 6 * 10 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "3 Pulgadas",
                largo: "6 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 18,
            nombre: "Flexible 3 * 8 * 12 / Con Nipple",
            precio: 16000.00,
            imagen: "../Img/Flexibles/38.png",
            imagenes: [
                "../Img/Flexibles/38.png"
            ],
            descripcion: "Flexible de 3 * 8 * 12 con doble malla interna trenzada / Con Nipple",
            especificaciones: {
                estilo: "Doble Malla Interna Trenzada",
                bocas: "3 Pulgadas",
                largo: "8 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 19,
            nombre: "Flexible 2 * 8 / Sin Nipple",
            precio: 9000.00,
            imagen: "../Img/Flexibles/28Especial.png",
            imagenes: [
                "../Img/Flexibles/28Especial.png"
            ],
            descripcion: "Flexible de 2 * 8 con malla externa trensada, ideal para vehiculos con el flexible cruzado / Sin nipple",
            especificaciones: {
                estilo: "Malla Externa Trensada",
                bocas: "2 Pulgadas",
                largo: "8 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 20,
            nombre: "Flexible 2 1/4 * 8 / Sin Nipple",
            precio: 10000.00,
            imagen: "../Img/Flexibles/2148Especial.png",
            imagenes: [
                "../Img/Flexibles/2148Especial.png"
            ],
            descripcion: "Flexible de 2 1/4 * 8 con malla externa trensada, ideal para vehiculos con el flexible cruzado / Sin nipple",
            especificaciones: {
                estilo: "Malla Externa Trensada",
                bocas: "2 1/4 Pulgadas",
                largo: "8 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 21,
            nombre: "Flexible 2 1/2 * 8 / Sin Nipple",
            precio: 11000.00,
            imagen: "../Img/Flexibles/2128Especial.png",
            imagenes: [
                "../Img/Flexibles/2128Especial.png"
            ],
            descripcion: "Flexible de 2 1/2 * 8 con malla externa trensada, ideal para vehiculos con el flexible cruzado / Sin nipple",
            especificaciones: {
                estilo: "Malla Externa Trensada",
                bocas: "2 1/2 Pulgadas",
                largo: "8 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        }
    ],
    Accesorios: [
        {
            id: 10,
            nombre: "V - Band 5 Pulgadas",
            precio: 21000.00,
            imagen: "../Img/Accesorios/VBands/V_Band5/V_Band5.png",
            imagenes: [
                "../Img/Accesorios/VBands/V_Band5/V_Band5.png",
                "../Img/Accesorios/VBands/V_Band5/V_Band5Horizontal.png"
            ],
            descripcion: "Abrazadera V-Band de 5 pulgadas, material de alta calidad para un sellado perfecto en sistemas de escape",
            especificaciones: {
                material: "Acero Inoxidable",
                diametro: "5 Pulgadas",
                contenido: "2 Anillas y 1 Abrazadera",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 11,
            nombre: "V - Band 4 Pulgadas",
            precio: 18000.00,
            imagen: "../Img/Accesorios/VBands/V_Band4/V_Band4.png",
            imagenes: [
                "../Img/Accesorios/VBands/V_Band4/V_Band4.png",
                "../Img/Accesorios/VBands/V_Band4/V_Band4Horizontal.png"
            ],
            descripcion: "Abrazadera V-Band de 4 pulgadas, material de alta calidad para un sellado perfecto en sistemas de escape",
            especificaciones: {
                material: "Acero Inoxidable",
                diametro: "4 Pulgadas",
                contenido: "2 Anillas y 1 Abrazadera",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 12,
            nombre: "V - Band 3 Pulgadas",
            precio: 15000.00,
            imagen: "../Img/Accesorios/VBands/V_Band3/V_Band3.png",
            imagenes: [
                "../Img/Accesorios/VBands/V_Band3/V_Band3.png",
                "../Img/Accesorios/VBands/V_Band3/V_Band3Horizontal.png"
            ],
            descripcion: "Abrazadera V-Band de 3 pulgadas, material de alta calidad para un sellado perfecto en sistemas de escape",
            especificaciones: {
                material: "Acero Inoxidable",
                diametro: "3 Pulgadas",
                contenido: "2 Anillas y 1 Abrazadera",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 26,
            nombre: "V - Band 2 1/2 Pulgadas",
            precio: 13000.00,
            imagen: "../Img/Accesorios/VBands/V_Band212/V_Band212.png",
            imagenes: [
                "../Img/Accesorios/VBands/V_Band212/V_Band212.png",
                "../Img/Accesorios/VBands/V_Band212/V_Band212Horizontal.png"
            ],
            descripcion: "Abrazadera V-Band de 2 1/2 pulgadas, material de alta calidad para un sellado perfecto en sistemas de escape",
            especificaciones: {
                material: "Acero Inoxidable",
                diametro: "2 1/2 Pulgadas",
                contenido: "2 Anillas y 1 Abrazadera",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 27,
            nombre: "V - Band 2 1/4 Pulgadas",
            precio: 12500.00,
            imagen: "../Img/Accesorios/VBands/V_Band214/V_Band214.png",
            imagenes: [
                "../Img/Accesorios/VBands/V_Band214/V_Band214.png",
                "../Img/Accesorios/VBands/V_Band214/V_Band214Horizontal.png"
            ],
            descripcion: "Abrazadera V-Band de 2 1/4 pulgadas, material de alta calidad para un sellado perfecto en sistemas de escape",
            especificaciones: {
                material: "Acero Inoxidable",
                diametro: "2 1/4 Pulgadas",
                contenido: "2 Anillas y 1 Abrazadera",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 28,
            nombre: "V - Band 2 Pulgadas",
            precio: 12500.00,
            imagen: "../Img/Accesorios/VBands/V_Band2/V_Band2.png",
            imagenes: [
                "../Img/Accesorios/VBands/V_Band2/V_Band2.png",
                "../Img/Accesorios/VBands/V_Band2/V_Band2Horizontal.png"
            ],
            descripcion: "Abrazadera V-Band de 2 pulgadas, material de alta calidad para un sellado perfecto en sistemas de escape",
            especificaciones: {
                material: "Acero Inoxidable",
                diametro: "2 Pulgadas",
                contenido: "2 Anillas y 1 Abrazadera",
                garantia: "Ante defectos de Fabrica"
            }
        }
    ],
    Extras: [
        {
            id: 13,
            nombre: "Tips de Escape Cromado",
            precio: 179.99,
            imagen: "../Img/Extras/tips1.jpg",
            imagenes: [
                "../Img/Extras/tips1.jpg"
            ],
            descripcion: "Set de tips de escape cromados. Acabado espejo de alta calidad. Mejora la apariencia del vehículo.",
            especificaciones: {
                material: "Acero Cromado",
                diametro_salida: "3.5 pulgadas",
                acabado: "Cromado Espejo",
                largo: "12 cm"
            }
        },
        {
            id: 14,
            nombre: "Protector de Mofle",
            precio: 49.99,
            imagen: "../Img/Extras/protector1.jpg",
            imagenes: [
                "../Img/Extras/protector1.jpg"
            ],
            descripcion: "Protector térmico para mofle. Evita quemaduras y protege la zona inferior del vehículo.",
            especificaciones: {
                material: "Aluminio + Malla",
                largo: "80 cm",
                ancho: "25 cm",
                temperatura_max: "800°C"
            }
        },
        {
            id: 15,
            nombre: "Spacer y Adaptadores",
            precio: 34.99,
            imagen: "../Img/Extras/adaptadores1.jpg",
            imagenes: [
                "../Img/Extras/adaptadores1.jpg"
            ],
            descripcion: "Kit de spacers y adaptadores universales. Para ajustes precisos en sistemas de escape.",
            especificaciones: {
                material: "Acero Inoxidable",
                tamaños: "Múltiples",
                cantidad: "12 piezas",
                espesor: "0.5-2 mm"
            }
        }
    ]
};

// Exportar para usar en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productos;
}
