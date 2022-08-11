// let numeros=[25,60,80,100,25,60,80,100]

// //Recorrer Un Arreglo/Repetir Una Accion
// //Esculcar/Obtener De A 1 Elemento

// //1.ForEach
// numeros.forEach(function(numero){
//     console.log(numero)
// })

let productos=[

    {
        nombre:"Water Spheres",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/bola1.jpg?alt=media&token=7af41e30-32ae-44f0-9b1f-76031be25bbd",
        "https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/bola2.jpg?alt=media&token=89cb2045-cc85-44e1-82d8-78c775dd15ef" ],
        precio:7.99,
        popularity :4,
        description:"GREAT VALUE PACK: Package includes 20000 small water beads, 300 large water beads, new combo give you a different new experience, large capacity beads for you to play with."
    },
    {
        nombre:"Security camera",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/crn1.jpg?alt=media&token=8669efc2-5118-4921-a777-738492fa12bd","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/crn2.jpg?alt=media&token=0d2122de-fee7-4fbe-834b-84ad0301b57c"],
        precio:29.99,
        popularity :4,
        description:"【3 Night Vision Modes & Alarm Siren】Three night vision modes for your choice: Infrared mode, full-color mode, and alarmed mode. You can set the floodlight to turn on when a moving object is detected in the dark, and set the waterproof camera's siren on when it detects motion, to scare away uninvited guests at home, driveway, hallway, or back door【Motion Detection & 24/7 Recording】The outdoor camera will detect movement and visitors, record videos to the cloud/SD card(not included), and send APP alerts to you instantly. You can also store 24/7 footage on a micro sd card (up to 128GB, not included). A home camera allows you to view footage anytime, anywhere, without missing any important details."
    },
    {
        nombre:"Gaming Headphones",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/foto1.jpg?alt=media&token=a8c58a6b-c7ca-4734-9ccd-8589db34687b","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/foto11.jpg?alt=media&token=20932fae-745d-40b5-87ed-54d4f6a99026"],
        precio:21.77,
        popularity :5,
        description:"Compatible with multiple platforms: compatible with PlayStation 4, Xbox One, PC, Nintendo 3DS, laptop, PSP, tablet, iPad, computer, mobile phone. Please note that you need an extra adapter from Microsoft (not included) when you connect with an old version of Xbox One.Surrounding Stereo Subwoofer: Clear sound powered by strong brass, splendid ambient noise isolation and 40mm high-precision magnetic neodymium driver, acoustic positioning precision improves the sensitivity of the speaker unit, giving you a field of vivid sound, sound clarity, shock feeling sound. Perfect for various games like Halo 5 Guardians, Metal Gear Solid, Call of Duty, Star Wars Battlefront, Overwatch, World of Warcraft Legion, etc."
    },
    {
        nombre:"Superman Funko Pop!",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/img2d.webp?alt=media&token=325ec1a6-5067-4740-80fc-91dc0c77ea6c","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/img2f.webp?alt=media&token=aa7980fb-79a4-46d5-baab-ec36bd4cb455"],
        precio:19.95,
        popularity :3,
        description:"Comes in original packaging and comes packaged with a plastic box protector with the collector in mind (removable film) From the Justice League movie, Superman as a Pop! Vinyl Figure from Funko Stylized 3 3/4-inch tall collectible figure, perfect for any DC Comics fan Ships in acid-free PET plastic with peel-off protective film"
    },
    {
        nombre:"The Mandalorian Funko Pop! ",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/joni2.jpg?alt=media&token=179e8fd6-8b1f-4fa6-9460-65b43670cc8d","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/joni1.jpg?alt=media&token=24423af8-6e5d-4398-a5fa-d9e23f255d0e"],
        precio:17.95,
        popularity :3,
        description:"vinyl Celebrate the most stellar fandom of them all with the Star Wars: The Mandalorian Pop! The Mandalorian (Din Djarrin) with the child (Grogu). Vinyl head measures approximately 4.75 inches tall. Item comes in a window display box, perfect for any Star Wars fan."
    },
    {
        nombre:"Razer DeathAdder Essential Gaming Mouse",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/mous1.jpg?alt=media&token=ded66db5-0420-4df3-9bbf-6a093d72f7e1","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/mous2.jpg?alt=media&token=8cef316e-0d82-4770-bb64-d84d8cf618a2"],
        precio:19.55,
        popularity :3,
        description:"The #1 best-selling manufacturer of gaming peripherals in the United States. Source: The NPD Group, Inc. USA - High-precision 6,400 DPI optical sensor: Offers on-the-fly sensitivity adjustment via dedicated (reprogrammable) DPI buttons for gaming and creative work. Durable mechanical switches: Withstands up to 10 million clicks."
    },
    {
        nombre:"Professional Hair Clipper And Hair Trimmer",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/mqn2.jpg?alt=media&token=76d7909c-b5db-4fb6-9054-3363c441d4a5","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/mqn1.jpg?alt=media&token=c3ab84ed-c678-4db9-9441-2dd8be31dbf4"],
        precio:55.99,
        popularity :5,
        description:"【Professional Cordless Hair Clipper & Trimmer Set】: This haircut kit contains everything you need to have a professional cut right in the comfort of your own home. AMULISS professional hair clipper kit offers an easy way to cut your hair, which is also the first choice of the barber or hair stylist. Sharp and Durable High Carbon Steel Blade: The blade of this hair clipper adopts precision high carbon steel blade, which can maintain long-term sharpness without pulling hair. You can easily control hair length and trim a variety of hairstyles with adjustable taper lever and guided combs."
    },
    {
        nombre:"Ahsoka Tano Funko Pop!",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/noma1.jpg?alt=media&token=5f1c4b6d-f34c-44e6-bd52-e5aa6f4286b3","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/noma2.jpg?alt=media&token=d0faa1c3-0695-4fe4-a961-5429085ba81c"],
        precio:15.95,
        popularity :4,
        description:"Comes in original packaging and comes with a plastic box protector with the collector in mind (removable film), From Star Wars: Clone Wars, Ahsoka Tano, as a stylized POP vinyl from Funko, Stylized collectable stands 3 ¾ inches tall, perfect for any Star Wars fan Shipped in acid-free PET plastic with removable protective film, Locking tab adds structural integrity to the Pop Shield when formed"
    },
    {
        nombre:"X-VOLSPORT - Gaming chair",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/silla2.jpg?alt=media&token=be370884-2cf9-4881-8d7f-418814fbecda","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/silla1.jpg?alt=media&token=bc38874c-6ad6-49e9-9642-92c686fb73c0"],
        precio:189.99,
        popularity :4,
        description:"Multifunctional and Ergonomic Gaming Chairs - The high back gaming chair's removable headrest and massaging lumbar cushion make you feel more relaxed at work. The armrest can be adjusted up and down or rotated. Special design with retractable footrest. The back of the chair can be locked at any angle between 90 and 170 degrees backwards to provide comfort and relaxation. By adjusting the knob under the seat, the chair can rotate back and forth, which is more exciting.Maximum load and dimension: Support up to 300lbs, suitable for most people. Backrest size: 21 x 35 inches. Seat size: 14.9 x 18.9 inches. Adjustable seat height: 16.5 - 19.6 inches."
    },
    {
        nombre:"ROCCAT Vulcan TKL Mechanical Gaming Keyboard",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/tecla1.jpg?alt=media&token=d125200e-aaa4-46c0-ba14-bc1418e51bde","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/tecla2.jpg?alt=media&token=862507c0-2fb6-4546-a2a7-64d3b5a4881f"],
        precio:129.99,
        popularity :5,
        description:"Tactile Mechanical Titan Switch: Entirely designed and built by ROCCAT engineers and developed for gamers who love the feel of mechanical switches, but demand the feel of a crisp, tactile hit and instant responsiveness, Tenkeyless Form Factor: This smaller form factor allows for a larger pad and greater range of mouse movement, improving your aiming accuracy, Advanced Anti-Ghosting: Technology optimized for gamers to ensure every keystroke from your most frequently used keys is registered, no matter how frantic the action gets"
    },


]

let fila=document.getElementById("fila")


    //Recorriendo El Arreglo
    productos.forEach(function(producto){
             // console.log(comida.nombre)

    //Creando Un Div Desde JS
    let columna=document.createElement("div")
    columna.classList.add("col")
    
    //Creando Una Tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow","text-center","h-100","p-5")

    //Creando Una IMAGEN
    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src=producto.fotos[0]

    //Detectando Evento De Mouse
    imagen.addEventListener("mouseover",function(){
        imagen.src=producto.fotos[1]
    })

    imagen.addEventListener("mouseleave",function(){
        imagen.src=producto.fotos[0]
    })
    //Crear Nombre
    let nombre=document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent=producto.nombre

    //Creando El Precio
    let precio=document.createElement("h2")
    precio.textContent="US $" + producto.precio

    //Creando La Descripcion
    let description=document.createElement("p")
    description.classList.add("text-danger","d-none")
    description.textContent="Descripcion: " + producto.description

    //Creando Popularidad
    let popularida=document.createElement("h1")
    popularida.textContent="popularity : " + producto.popularity

    //Definiendo Padres E Hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(popularida)
    tarjeta.appendChild(description)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    


 })