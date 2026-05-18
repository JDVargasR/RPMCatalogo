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
            nombre: "Catalizador D300 Corto OBD II - 2800CC",
            precio: 36000.00,
            imagen: "../Img/Catalizadores/D300Corto/D300_Corto_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D300Corto/D300_Corto_Frontal.jpeg",
                "../Img/Catalizadores/D300Corto/D300_Corto_Horizontal.jpeg",
                "../Img/Catalizadores/D300Corto/D300_Corto_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 2800CC, ideal para cualquier modelo posterior a 1996.",
            especificaciones: {
                estandar: "Euro 5",
                tipo: "OBD II",
                bocas: "2.5 pulgadas",
                largo: "12 Pulgadas",
                garantia: "Ante defectos de Fabrica"
            }
        },
        {
            id: 18,
            nombre: "Catalizador D300 Largo OBD II - 2800CC",
            precio: 36000.00,
            imagen: "../Img/Catalizadores/D300Largo/D300_Largo_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D300Largo/D300_Largo_Frontal.jpeg",
                "../Img/Catalizadores/D300Largo/D300_Largo_Horizontal.jpeg",
                "../Img/Catalizadores/D300Largo/D300_Largo_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 2800CC, ideal para cualquier modelo posterior a 1996.",
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
            precio: 32000.00,
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
            nombre: "Catalizador D600 Corto V6 OBD II - 5100CC",
            precio: 42000.00,
            imagen: "../Img/Catalizadores/D600Corto/D600_Corto_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D600Corto/D600_Corto_Frontal.jpeg",
                "../Img/Catalizadores/D600Corto/D600_Corto_Horizontal.jpeg",
                "../Img/Catalizadores/D600Corto/D600_Corto_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 5100CC, ideal para modelos con motor V6 posteriores a 1996.",
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
            nombre: "Catalizador D600 Largo V6 OBD II - 5100CC",
            precio: 42000.00,
            imagen: "../Img/Catalizadores/D600Largo/D600_Largo_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D600Largo/D600_Largo_Frontal.jpeg",
                "../Img/Catalizadores/D600Largo/D600_Largo_Horizontal.jpeg",
                "../Img/Catalizadores/D600Largo/D600_Largo_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 5100CC, ideal para modelos con motor V6 posteriores a 1996.",
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
            nombre: "Catalizador D600 con Sensor V6 OBD II - 5100CC",
            precio: 42000.00,
            imagen: "../Img/Catalizadores/D600Sensor/D600_Sensor_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D600Sensor/D600_Sensor_Frontal.jpeg",
                "../Img/Catalizadores/D600Sensor/D600_Sensor_Horizontal.jpeg",
                "../Img/Catalizadores/D600Sensor/D600_Sensor_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 5100CC, ideal para modelos con motor V6 con sensor en el catalizador posteriores a 1996.",
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
            nombre: "Catalizador D904 Corto V8 OBD II - 7100CC",
            precio: 57000.00,
            imagen: "../Img/Catalizadores/D904Corto/D904_Corto_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D904Corto/D904_Corto_Frontal.jpeg",
                "../Img/Catalizadores/D904Corto/D904_Corto_Horizontal.jpeg",
                "../Img/Catalizadores/D904Corto/D904_Corto_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 7100CC, ideal para modelos con motor V8 posteriores a 1996.",
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
            nombre: "Catalizador D904 Largo V8 OBD II - 7100CC",
            precio: 57000.00,
            imagen: "../Img/Catalizadores/D904Largo/D904_Largo_Frontal.jpeg",
            imagenes: [
                "../Img/Catalizadores/D904Largo/D904_Largo_Frontal.jpeg",
                "../Img/Catalizadores/D904Largo/D904_Largo_Horizontal.jpeg",
                "../Img/Catalizadores/D904Largo/D904_Largo_Superior.jpeg"
            ],
            descripcion: "Catalizador OBD II, hasta cilindraje 7100CC, ideal para modelos con motor V8 posteriores a 1996.",
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
            nombre: "Tubo Flexible Acero Inoxidable",
            precio: 89.99,
            imagen: "../Img/Flexibles/flexible1.jpg",
            imagenes: [
                "../Img/Flexibles/flexible1.jpg"
            ],
            descripcion: "Tubo flexible corrugado en acero inoxidable. Resistente a vibraciones y corrosión. Disponible en varios diámetros.",
            especificaciones: {
                material: "Acero Inoxidable 304",
                diametro: "2.5 pulgadas",
                largo: "60 cm",
                grosor_pared: "0.8 mm",
                temperatura_max: "600°C"
            }
        },
        {
            id: 8,
            nombre: "Tubo Flexible Presurizado",
            precio: 129.99,
            imagen: "../Img/Flexibles/flexible2.jpg",
            imagenes: [
                "../Img/Flexibles/flexible2.jpg"
            ],
            descripcion: "Tubo flexible de alta presión con refuerzo interior. Ideal para sistemas turbo.",
            especificaciones: {
                material: "Acero + Caucho",
                diametro: "3 pulgadas",
                largo: "75 cm",
                presion_max: "3 bar",
                temperatura_max: "500°C"
            }
        },
        {
            id: 9,
            nombre: "Tubo Flexible Universal",
            precio: 69.99,
            imagen: "../Img/Flexibles/flexible3.jpg",
            imagenes: [
                "../Img/Flexibles/flexible3.jpg"
            ],
            descripcion: "Tubo flexible universal adaptable. Compatible con múltiples conexiones.",
            especificaciones: {
                material: "Acero Galvanizado",
                diametro: "2.25 pulgadas",
                largo: "50 cm",
                grosor_pared: "0.6 mm",
                temperatura_max: "400°C"
            }
        }
    ],
    Accesorios: [
        {
            id: 10,
            nombre: "Brida de Sujeción Premium",
            precio: 24.99,
            imagen: "../Img/Accesorios/brida1.jpg",
            imagenes: [
                "../Img/Accesorios/brida1.jpg"
            ],
            descripcion: "Brida de sujeción en acero inoxidable. Diferentes tamaños disponibles. Pack de 5 unidades.",
            especificaciones: {
                material: "Acero Inoxidable 304",
                diametro: "2.5 pulgadas",
                cantidad: "5 unidades",
                presion_maxima: "5 bar"
            }
        },
        {
            id: 11,
            nombre: "Kit de Aislamiento Térmico",
            precio: 149.99,
            imagen: "../Img/Accesorios/aislamiento1.jpg",
            imagenes: [
                "../Img/Accesorios/aislamiento1.jpg"
            ],
            descripcion: "Kit completo de aislamiento térmico. Protege el motor y reduce calor radiante.",
            especificaciones: {
                material: "Fibra de Cerámica",
                grosor: "10 mm",
                cobertura: "3 metros",
                temperatura_max: "1200°C"
            }
        },
        {
            id: 12,
            nombre: "Sensor Lambda Reemplazo",
            precio: 89.99,
            imagen: "../Img/Accesorios/sensor1.jpg",
            imagenes: [
                "../Img/Accesorios/sensor1.jpg"
            ],
            descripcion: "Sensor lambda de reemplazo OEM. Compatible con sistemas Euro 4-6.",
            especificaciones: {
                tipo: "Sensor O2",
                conexion: "4 pines",
                voltaje: "12V",
                garantia: "1 año"
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
